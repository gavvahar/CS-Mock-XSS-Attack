(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(5),i=a.n(r),j=a(2),b=a(4),u=function(e){var t=e.text,a=e.image,n=e.index;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[n+1,". ",t," "]}),Object(c.jsx)("img",{style:{maxWidth:200},src:a,alt:t})]})},x=function(){var e=Object(n.useState)([{text:"go to the bank",image:"https://placekitten.com/g/200/300"},{text:"Never stop killing it",image:"https://www.placecage.com/c/200/300"}]),t=Object(b.a)(e,2),a=t[0],s=(t[1],Object(n.useState)({text:"",image:""})),r=Object(b.a)(s,2),i=r[0],x=r[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(i.text||i.image)&&(a.push({text:i.text,image:i.image}),x({text:"",image:""}))},children:[Object(c.jsx)("label",{children:"What do you need to get done?"}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{value:i.text,onChange:function(e){return x(Object(j.a)(Object(j.a)({},i),{},{text:e.target.value}))},defaultValue:"Add a new task!"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Add an image to your task!"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{value:i.image,onChange:function(e){return x(Object(j.a)(Object(j.a)({},i),{},{image:e.target.value}))},defaultValue:"Add an image!"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:"btn",type:"submit",value:"Add task"})]}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Tasks on your list:"}),a.map((function(e,t){return Object(c.jsx)(u,{text:e.text,image:e.image,index:t})}))]})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2d5842f4.chunk.js.map