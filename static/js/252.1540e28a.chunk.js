"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[252],{9252:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var a=t(2791),s=t(9434),r=t(5340),o=function(e){return e.contacts.item},c=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},i=function(e){return e.filters.filter},u=t(1831),m=t(1331),_="Filter_label__Ex1A5",d="Filter_input__+jX2l",h=t(3329),p=function(){var e=(0,s.I0)(),n=(0,s.v9)(i);return(0,h.jsx)("label",{htmlFor:"filter",className:_,children:(0,h.jsx)("input",{className:d,onChange:function(n){e((0,m.k)(n.target.value.toLowerCase()))},type:"filter",name:"filter",value:n,placeholder:"Find contacts by name"})})},f=t(4942),b=t(1413),x=t(9439),j="ContactForm_form__TCXtu",N="ContactForm_label__zVCV3",v="ContactForm_paragraph__8Rwen",C="ContactForm_input__PjN8o",k="ContactForm_button__gIpeG",F={name:"",number:""},g=function(){var e=(0,a.useState)(F),n=(0,x.Z)(e,2),t=n[0],c=t.name,l=t.number,i=n[1],u=(0,s.I0)(),m=(0,s.v9)(o);function _(e){var n=e.target,t=n.name,a=n.value;i((function(e){return(0,b.Z)((0,b.Z)({},e),{},(0,f.Z)({},t,a))}))}return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:c,number:l};m.some((function(e){return e.name===n.name}))?alert("".concat(n.name," is already is contacts")):(u((0,r.uK)(n)),i((0,b.Z)({},F)))},className:j,children:[(0,h.jsxs)("label",{htmlFor:"name",className:N,children:[(0,h.jsx)("p",{className:v,children:"Name"}),(0,h.jsx)("input",{className:C,onChange:_,type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Rosie Simpson"})]}),(0,h.jsxs)("label",{htmlFor:"number",className:N,children:[(0,h.jsx)("p",{className:v,children:"Number"}),(0,h.jsx)("input",{className:C,onChange:_,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"645-17-79"})]}),(0,h.jsx)("button",{className:k,type:"submit",children:"Add contact"})]})},y="ContactList_list__xDNud",P="ContactList_item__QtaYu",w="ContactList_par__DuxpW",Z="ContactList_button__zafWS",z=function(){var e=(0,s.I0)(),n=(0,s.v9)(o),t=(0,s.v9)(i),a=function(n){e((0,r.GK)(n.target.name))},c=""!==t&&n.filter((function(e){return e.name.toLowerCase().includes(t)})),l=c||n;return(0,h.jsx)("ul",{className:y,children:l.map((function(e){var n=e.id,t=e.name,s=e.number;return(0,h.jsxs)("li",{className:P,children:[(0,h.jsxs)("p",{className:w,children:[t,": ",s]}),(0,h.jsx)("button",{className:Z,type:"button",name:n,onClick:a,children:"Delete"})]},n)}))})},A="Phonebook_section__o6Vkf",L="Phonebook_container__1MyeN",I="Phonebook_header__oGb6W",D="Phonebook_bottom__7JVs-",S="Phonebook_contacts__sXR8K",V="Phonebook_h2__8luz2",G=function(){var e=(0,s.I0)(),n=(0,s.v9)(c),t=(0,s.v9)(l);return(0,a.useEffect)((function(){e((0,r.Qd)())}),[e]),(0,h.jsx)("section",{className:A,children:(0,h.jsxs)("div",{className:L,children:[n&&!t&&(0,h.jsx)(u.a,{}),(0,h.jsx)("h1",{className:I,children:"Phonebook"}),(0,h.jsx)(p,{}),(0,h.jsxs)("div",{className:D,children:[(0,h.jsx)(g,{}),(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("h2",{className:V,children:"Contacts"}),(0,h.jsx)(z,{})]})]})]})})}}}]);
//# sourceMappingURL=252.1540e28a.chunk.js.map