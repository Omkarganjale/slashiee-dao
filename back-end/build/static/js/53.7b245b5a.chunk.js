(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[53],{1051:function(e,t,a){"use strict";a.r(t);var i=a(14),n=a(812),l=a(815),c=a(157),r=a(814),s=a(469),o=a(46),h=a(237),d=a(32),m=a(308),u=a(0),j=a(131),b=a(82),x=a(186),O=a(1);t.default=function(){var e=Object(u.useState)(""),t=Object(i.a)(e,2),a=t[0],f=t[1],g=Object(u.useState)(!1),p=Object(i.a)(g,2),v=p[0],w=p[1],y=x.e().shape({email:x.f().email("Must be a valid email").max(255).required("Email is required")}),S=Object(m.d)({initialValues:{email:"demo@example.com",submit:null},validationSchema:y,onSubmit:function(e){w(!0),setTimeout((function(){w(!1),j.b.success("Reset link has been sent!")}),1e3),a&&(f("Error!"),w(!1))}}),W=S.errors,k=S.values,C=S.touched,R=S.handleBlur,B=S.handleChange,D=S.handleSubmit;return Object(O.jsx)(o.a,{height:"100vh",alignItems:"center",flexDirection:"column",justifyContent:"center",children:Object(O.jsxs)(l.a,{sx:{padding:4,maxWidth:600,marginTop:4,boxShadow:1},children:[Object(O.jsxs)(o.a,{alignItems:"center",flexDirection:"column",justifyContent:"center",mb:5,children:[Object(O.jsx)(c.a,{width:38,mb:1,children:Object(O.jsx)("img",{src:"/static/logo/logo.svg",width:"100%",alt:"Uko Logo"})}),Object(O.jsx)(d.a,{fontSize:24,fontWeight:700,children:"Reset your password"})]}),Object(O.jsxs)(o.a,{justifyContent:"space-between",flexWrap:"wrap",my:2,children:[Object(O.jsxs)("form",{noValidate:!0,onSubmit:D,style:{width:"100%"},children:[Object(O.jsx)(h.a,{fullWidth:!0,name:"email",type:"email",label:"Email",onBlur:R,onChange:B,value:k.email||"",error:Boolean(C.email&&W.email),helperText:C.email&&W.email}),a&&Object(O.jsx)(r.a,{error:!0,sx:{mt:2,fontSize:13,fontWeight:500,textAlign:"center"},children:a}),Object(O.jsx)(c.a,{sx:{mt:4},children:v?Object(O.jsx)(n.a,{loading:!0,fullWidth:!0,variant:"contained",children:"Reset"}):Object(O.jsx)(s.a,{fullWidth:!0,type:"submit",variant:"contained",children:"Reset"})})]}),Object(O.jsxs)(d.h,{margin:"auto",mt:3,color:"text.disabled",children:["Don't have an account?"," ",Object(O.jsx)(b.b,{to:"/register",children:Object(O.jsx)(d.h,{color:"primary.main",children:"Create an account"})})]})]})]})})}}}]);
//# sourceMappingURL=53.7b245b5a.chunk.js.map