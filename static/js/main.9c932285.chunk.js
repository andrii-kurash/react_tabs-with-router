(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c.n(a),n=c(9),i=(c(28),c(29),c(2)),b=c(17),j=c.n(b),r=(c(0),c(3)),d=function(e){var t=e.to,c=e.text;return Object(r.jsx)(n.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:c})},l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var e,t=Object(i.p)().tabId,c=void 0===t?"":t,a=(null===(e=o.find((function(e){return e.id===c})))||void 0===e?void 0:e.content)||"Please select a tab";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:o.map((function(e){return Object(r.jsx)("li",{className:j()({"is-active":c===e.id}),"data-cy":"Tab",children:Object(r.jsx)(n.b,{to:"/tabs/".concat(e.id),"data-cy":"TabLink",children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a})]})]})},h=(c(32),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(d,{to:"/",text:"Home"}),Object(r.jsx)(d,{to:"/tabs",text:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(x,{})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})});s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9c932285.chunk.js.map