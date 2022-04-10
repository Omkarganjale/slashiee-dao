(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[24],{1037:function(e,t,i){"use strict";var n=i(4),a=i(8),c=i(3),r=i(0),s=(i(21),i(11)),o=i(155),d=i(18),j=i(10),l=i(68),b=i(76);function m(e){return Object(l.a)("MuiContainer",e)}Object(b.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var h=i(22),g=i(1),x=["className","component","disableGutters","fixed","maxWidth"],u=Object(j.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,t["maxWidth".concat(Object(h.a)(String(i.maxWidth)))],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,i=e.ownerState;return Object(c.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&Object(n.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,i){var n=t.breakpoints.values[i];return 0!==n&&(e[t.breakpoints.up(i)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,i=e.ownerState;return Object(c.a)({},"xs"===i.maxWidth&&Object(n.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),i.maxWidth&&"xs"!==i.maxWidth&&Object(n.a)({},t.breakpoints.up(i.maxWidth),{maxWidth:"".concat(t.breakpoints.values[i.maxWidth]).concat(t.breakpoints.unit)}))})),p=r.forwardRef((function(e,t){var i=Object(d.a)({props:e,name:"MuiContainer"}),n=i.className,r=i.component,j=void 0===r?"div":r,l=i.disableGutters,b=void 0!==l&&l,p=i.fixed,O=void 0!==p&&p,f=i.maxWidth,v=void 0===f?"lg":f,k=Object(a.a)(i,x),w=Object(c.a)({},i,{component:j,disableGutters:b,fixed:O,maxWidth:v}),C=function(e){var t=e.classes,i=e.fixed,n=e.disableGutters,a=e.maxWidth,c={root:["root",a&&"maxWidth".concat(Object(h.a)(String(a))),i&&"fixed",n&&"disableGutters"]};return Object(o.a)(c,m,t)}(w);return Object(g.jsx)(u,Object(c.a)({as:j,ownerState:w,className:Object(s.a)(C.root,n),ref:t},k))}));t.a=p},1106:function(e,t,i){"use strict";i.r(t);var n=i(154),a=i(1037),c=i(896),r=i(815),s=i(982),o=i(966),d=i(983),j=i(47),l=i(32),b=(i(0),i(1)),m=function(e){var t=e.item,i="light"===Object(j.a)().palette.mode;return Object(b.jsxs)(n.a,{sx:{boxShadow:2,borderRadius:1,overflow:"hidden",backgroundColor:"common.white"},children:[Object(b.jsx)("img",{src:t.img,alt:"Dashboard",width:"100%"}),Object(b.jsxs)(n.a,{px:2,py:1,children:[Object(b.jsx)(l.f,{lineHeight:1,color:i?"text.primary":"background.paper",children:t.title}),Object(b.jsxs)(l.h,{fontSize:12,color:i?"text.disabled":"background.default",children:[t.screen," screens"]})]})]})},h=i(932),g=[{id:1,title:"Dashboard",screen:8,img:"/static/landing-page/screen/dashboard.svg"},{id:2,title:"Login / Sign up",screen:4,img:"/static/landing-page/screen/login.svg"},{id:3,title:"Error 404",screen:2,img:"/static/landing-page/screen/error.svg"},{id:4,title:"Ecommerce",screen:1,img:"/static/landing-page/screen/ecommerce.svg"},{id:5,title:"Chat App",screen:1,img:"/static/landing-page/screen/chat.svg"},{id:6,title:"Projects",screen:3,img:"/static/landing-page/screen/projects.svg"}],x=[{id:1,screen:1,title:"User List",img:"/static/landing-page/lists/user.svg"},{id:2,screen:3,title:"Create New User",img:"/static/landing-page/lists/new-user.svg"},{id:3,screen:1,title:"Product List",img:"/static/landing-page/lists/products.svg"},{id:4,screen:1,title:"Contact List",img:"/static/landing-page/lists/contacts.svg"},{id:5,screen:3,title:"Customer List Add",img:"/static/landing-page/lists/customers.svg"},{id:6,screen:4,title:"Add New Product",img:"/static/landing-page/lists/new-product.svg"}],u=[{id:1,screen:1,title:"Buttons",img:"/static/landing-page/components/buttons.svg"},{id:2,screen:1,title:"Icons",img:"/static/landing-page/components/icons.svg"},{id:3,screen:1,title:"Avatar",img:"/static/landing-page/components/avatar.svg"}];t.default=function(){return Object(b.jsxs)(n.a,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)(n.a,{bgcolor:"background.default",pt:12,pb:6,children:Object(b.jsx)(a.a,{children:Object(b.jsxs)(c.a,{container:!0,spacing:3,alignItems:"center",children:[Object(b.jsxs)(c.a,{item:!0,sm:6,xs:12,children:[Object(b.jsxs)(h.a,{children:["Uko ",Object(b.jsx)(l.i,{color:"primary.main",children:"Components"})]}),Object(b.jsx)(l.d,{children:"Browse through over 100 individual components and over 50 screens"})]}),Object(b.jsx)(c.a,{item:!0,sm:6,xs:12,textAlign:"center",children:Object(b.jsx)("img",{src:"/static/landing-page/components-page.png",width:"auto",alt:""})})]})})}),Object(b.jsxs)(a.a,{children:[Object(b.jsx)(n.a,{py:8,children:Object(b.jsxs)(c.a,{container:!0,spacing:3,children:[Object(b.jsx)(c.a,{item:!0,md:5,children:Object(b.jsx)(l.b,{fontWeight:800,children:"Screens & Apps"})}),Object(b.jsx)(c.a,{item:!0,md:7,children:Object(b.jsx)(c.a,{container:!0,spacing:3,children:g.map((function(e){return Object(b.jsx)(c.a,{item:!0,md:4,children:Object(b.jsx)(m,{item:e})},e.id)}))})})]})}),Object(b.jsx)(r.a,{}),Object(b.jsx)(n.a,{py:8,children:Object(b.jsxs)(c.a,{container:!0,spacing:3,children:[Object(b.jsx)(c.a,{item:!0,md:5,children:Object(b.jsx)(l.b,{fontWeight:800,children:"Lists"})}),Object(b.jsx)(c.a,{item:!0,md:7,children:Object(b.jsx)(c.a,{container:!0,spacing:3,children:x.map((function(e){return Object(b.jsx)(c.a,{item:!0,md:4,children:Object(b.jsx)(m,{item:e})},e.id)}))})})]})}),Object(b.jsx)(r.a,{}),Object(b.jsx)(n.a,{py:8,children:Object(b.jsxs)(c.a,{container:!0,spacing:3,children:[Object(b.jsx)(c.a,{item:!0,md:5,children:Object(b.jsx)(l.b,{fontWeight:800,children:"Components"})}),Object(b.jsx)(c.a,{item:!0,md:7,children:Object(b.jsx)(c.a,{container:!0,spacing:3,children:u.map((function(e){return Object(b.jsx)(c.a,{item:!0,md:4,children:Object(b.jsx)(m,{item:e})},e.id)}))})})]})}),Object(b.jsx)(o.a,{}),Object(b.jsx)(s.a,{})]})]})}},932:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var n=i(4),a=i(987),c=i(10),r=i(154),s=i(478),o=i(47),d=i(896),j=i(32),l=(i(0),i(33)),b=i(1),m=Object(c.a)(r.a)((function(e){var t=e.theme;return Object(n.a)({maxWidth:1e3,margin:"auto",padding:"5rem 0"},t.breakpoints.down("sm"),{padding:"3rem 1rem"})})),h=Object(c.a)(s.a)((function(e){var t=e.theme;return Object(n.a)({marginLeft:16},t.breakpoints.down(410),{marginLeft:0,marginTop:16})})),g=Object(c.a)(j.a)((function(e){var t=e.theme;return Object(n.a)({fontSize:36,fontWeight:800,lineHeight:1.3},t.breakpoints.down(450),{fontSize:27,lineHeight:1.1})}));t.b=function(){var e=Object(l.f)(),t="light"===Object(o.a)().palette.mode;return Object(b.jsx)(m,{"data-aos":"fade-up",children:Object(b.jsxs)(d.a,{container:!0,spacing:4,alignItems:"center",children:[Object(b.jsxs)(d.a,{item:!0,md:6,xs:12,children:[Object(b.jsxs)(g,{children:["Uko Provides Numerous"," ",Object(b.jsx)(j.i,{color:"primary.main",children:"Screens & Components"})]}),Object(b.jsx)(j.h,{color:"text.disabled",display:"block",fontWeight:600,fontSize:14,mt:1,mb:3,children:"Browse through over 100 individual components and over 50+ screens"}),Object(b.jsx)(s.a,{size:"small",variant:"contained",onClick:function(){return e("/components")},children:"Browse Components"}),Object(b.jsx)(h,{variant:"outlined",size:"small",endIcon:Object(b.jsx)(a.a,{}),onClick:function(){return e("/dashboard")},children:"Live Demo"})]}),Object(b.jsx)(d.a,{item:!0,md:6,xs:12,children:t?Object(b.jsx)("img",{src:"/static/landing-page/screens.png",width:"100%",alt:""}):Object(b.jsx)("img",{src:"/static/landing-page/screens-dark.png",width:"100%",alt:""})})]})})}},954:function(e,t,i){"use strict";i(0);var n=i(63),a=i(1);t.a=Object(n.a)(Object(a.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter")},955:function(e,t,i){"use strict";i(0);var n=i(63),a=i(1);t.a=Object(n.a)(Object(a.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram")},966:function(e,t,i){"use strict";var n=i(4),a=i(10),c=i(154),r=i(896),s=i(818),o=i(932),d=i(1),j=Object(a.a)(c.a)((function(e){var t=e.theme;return Object(n.a)({backgroundImage:"linear-gradient(180deg, #61A9FF 22.71%, #428AE1 93.69%)",borderRadius:"8px",marginTop:"10rem"},t.breakpoints.down("md"),{padding:"1rem 2rem",marginTop:"5rem"})}));t.a=function(){return Object(d.jsx)(j,{children:Object(d.jsxs)(r.a,{container:!0,spacing:4,alignItems:"center",children:[Object(d.jsx)(r.a,{item:!0,md:6,xs:12,children:Object(d.jsx)(c.a,{textAlign:"center",children:Object(d.jsx)("img",{src:"/static/landing-page/get-started.png",width:"220",alt:""})})}),Object(d.jsxs)(r.a,{item:!0,md:6,xs:12,children:[Object(d.jsx)(o.a,{color:"common.white",children:"Get Started With Uko Dashboard today"}),Object(d.jsx)(s.a,{sx:{backgroundColor:"common.white",color:"primary.main",fontSize:14,fontWeight:500,padding:".7rem 1rem",borderRadius:"4px",width:150,boxShadow:1,mt:3},children:"Purchase Now"})]})]})})}},982:function(e,t,i){"use strict";var n=i(988),a=i(954),c=(i(0),i(63)),r=i(1),s=Object(c.a)(Object(r.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube"),o=i(955),d=i(10),j=i(154),l=i(32),b=i(82),m=Object(d.a)(b.c)((function(e){return{padding:10,display:"inline-flex",borderRadius:"50%","&:hover":{background:e.theme.palette.grey[100]}}}));t.a=function(){return Object(r.jsxs)(j.a,{py:8,textAlign:"center",children:[Object(r.jsxs)(l.f,{children:["Developed with \ud83d\udc97 & Care by ",Object(r.jsx)("a",{href:"https://ui-lib.com/",children:"UI Lib"})]}),Object(r.jsxs)(j.a,{mt:1,children:[Object(r.jsx)(m,{to:"#",children:Object(r.jsx)(n.a,{color:"primary",sx:{fontSize:22}})}),Object(r.jsx)(m,{to:"#",children:Object(r.jsx)(a.a,{color:"primary"})}),Object(r.jsx)(m,{to:"#",children:Object(r.jsx)(s,{color:"primary"})}),Object(r.jsx)(m,{to:"#",children:Object(r.jsx)(o.a,{color:"primary",sx:{fontSize:22}})})]})]})}},983:function(e,t,i){"use strict";var n=i(16),a=i(13),c=i(4),r=i(881),s=i(63),o=i(1),d=Object(s.a)(Object(o.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu"),j=i(10),l=i(880),b=i(909),m=i(1037),h=i(154),g=i(895),x=i(913),u=i(914),p=i(142),O=i(253),f=i(0),v=i(82),k=i(79),w=Object(j.a)("ul")((function(e){var t=e.theme;return Object(c.a)({margin:0,padding:0,listStyle:"none"},t.breakpoints.down("sm"),{"& a":{display:"block",marginTop:"1rem"}})})),C=Object(j.a)(v.b)((function(e){var t=e.theme;return{display:"inline-block",margin:"0 1rem",fontSize:12,color:t.palette.text.disabled,fontWeight:500,cursor:"pointer","&:last-of-type":{padding:".4rem 1rem",borderRadius:"6px",border:"1px solid",borderColor:t.palette.divider},"&:hover":{color:t.palette.primary.main}}}));t.a=function(){var e=Object(f.useState)(!1),t=Object(a.a)(e,2),i=t[0],c=t[1],s=Object(l.a)((function(e){return e.breakpoints.down("sm")})),j=Object(f.useContext)(p.a),W=j.settings,y=j.saveSettings,S=function(e){y(Object(n.a)(Object(n.a)({},W),{},{theme:e}))},L=function(){return Object(o.jsxs)(w,{children:["light"===W.theme?Object(o.jsx)(b.a,{disableRipple:!0,onClick:function(){return S(k.a.DARK)},children:Object(o.jsx)(O.a,{})}):Object(o.jsx)(b.a,{disableRipple:!0,onClick:function(){return S(k.a.LIGHT)},children:Object(o.jsx)(r.a,{})}),Object(o.jsx)(C,{to:"/",children:"Home"}),Object(o.jsx)(C,{to:"#",children:"Purchase Now"})]})};return Object(o.jsx)(x.a,{position:"fixed",sx:{boxShadow:2,minHeight:64,justifyContent:"center",backgroundColor:"background.default"},children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(u.a,{sx:{justifyContent:"space-between",pl:0,pr:0},children:[Object(o.jsx)(v.b,{to:"/",children:Object(o.jsx)("img",{src:"/static/logo/logo.svg",width:30,alt:"Logo"})}),s?Object(o.jsxs)(h.a,{children:[Object(o.jsx)(b.a,{onClick:function(){return c(!0)},children:Object(o.jsx)(d,{})}),Object(o.jsx)(g.a,{anchor:"right",open:i,onClose:function(){return c(!1)},children:Object(o.jsx)(L,{})})]}):Object(o.jsx)(L,{})]})})})}},987:function(e,t,i){"use strict";var n=i(63),a=i(1);t.a=Object(n.a)(Object(a.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},988:function(e,t,i){"use strict";i(0);var n=i(63),a=i(1);t.a=Object(n.a)(Object(a.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook")}}]);
//# sourceMappingURL=24.ea565fc7.chunk.js.map