(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),o=c.n(n),l=(c(9),c(2)),r=(c(10),c(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(r.jsx)("ul",{className:"navbar-nav",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})})}),Object(r.jsxs)("div",{className:"form-check form-switch",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(r.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})})}function b(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),b=i[0],d=i[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),h=m[0],j=m[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"my-3",children:e.heading}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"}),Object(r.jsx)("textarea",{value:s,placeholder:"Enter Your Text Here",style:{backgroundColor:"light"===e.mode?"#343a40":"white",color:"light"===e.mode?"white":"black"},onChange:function(e){n(e.target.value)},className:"form-control",id:"mybox",rows:"10"})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-success mx-1",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{type:"button",className:"btn btn-success mx-1 my-2",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{type:"button",className:"btn btn-success mx-1 my-2",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copy To Clipboard","success")},children:"Copy Text"}),Object(r.jsx)("button",{type:"button",className:"btn btn-success mx-1 my-2",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showAlert("Extra Spaces Have Been Removed","success")},children:"Remove Extra Spaces"}),Object(r.jsx)("button",{type:"button",className:"btn btn-success mx-1",onClick:function(){n(""),e.showAlert("Text Cleared","success")},children:"Clear Text"}),Object(r.jsx)("h4",{className:"my-3",children:"Replace Word"}),Object(r.jsx)("textarea",{value:b,onChange:function(e){d(e.target.value)},style:{backgroundColor:"light"===e.mode?"#343a40":"white",color:"light"===e.mode?"white":"black"},placeholder:"find",className:"form-control my-2",id:"exampleFormControlTextarea1",rows:"1"}),Object(r.jsx)("textarea",{value:h,onChange:function(e){console.log(j(e.target.value))},style:{backgroundColor:"light"===e.mode?"#343a40":"white",color:"light"===e.mode?"white":"black"},placeholder:"replace",className:"form-control my-2",id:"exampleFormControlTextarea1",rows:"1"}),Object(r.jsx)("button",{type:"button",className:"btn btn-success my-2",onClick:function(){var t=s.replaceAll(b,h);n(t),e.showAlert("".concat(b," is replace by ").concat(h," "),"success")},children:"Replace Words"})]}),Object(r.jsx)("h2",{className:"my-3",children:"Your Text Summary"}),Object(r.jsxs)("p",{children:[s.length>0?s.trim().split(" ").length:0," Words ",s.length," Characters"]}),Object(r.jsxs)("p",{children:[.008*s.split(" ").length," Minutes Read"]}),Object(r.jsx)("h2",{className:"my-3",children:" Preview "}),Object(r.jsx)("p",{children:s})]})}i.defaultProps={title:"Set Title Here",about:"Set About Here"};var d=function(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})};var u=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),o=Object(l.a)(n,2),u=o[0],m=o[1],h=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"Text-Transform",about:"About",mode:c,toggleMode:function(){"light"===c?(s("dark"),document.body.style.backgroundColor="#141e30",document.body.style.color="#fff",h("Dark Mode Has Been Enabled.","success")):(s("light"),document.body.style.backgroundColor="#fff",document.body.style.color="#000",h("Light Mode Has Been Enabled.","success"))}}),Object(r.jsx)(d,{alert:u,msg:"Success"}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(b,{heading:"Enter Your Text Below",mode:c,showAlert:h})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),s(e),n(e),o(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),m()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.87e6f0ef.chunk.js.map