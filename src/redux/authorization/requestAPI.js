import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

// Создание нового пользователя

export const signUp = createAsyncThunk(
    'auth/register ',
    async credentials => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);

            return data;
        } catch (error) {
            return error.response.status;
        }
    }
);

// залогинивание пользователя

export const logIn = createAsyncThunk('auth/login',
    async credentials => {
        try {
            const { data } = await axios.post('/users/login', credentials);

            token.set(data.token);
            return data;
        } catch (error) {
            return error.response.status;
        }
    }
);

// разлогинивание пользователя

export const logOut = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            return error.response.status;
        }
    }
);



export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            console.log('Токена нет, уходим из fetchCurrentUser');
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return error.response.status;
        }
    }
);