(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[12],{1098:function(e,t,r){"use strict";r.r(t);var a=r(13),n=r(929),o=r(878),i=r(313),c=r(880),s=r(896),l=r(823),b=r(912),d=r(478),u=r(311),j=Object(u.a)(),f=r(931),O=r(45),h=r(927),p=r(921),m=r(32),x=r(939),v=r(991),C=r(909),g=r(941),y=r(944),w=r(923),k=r(114),M=r(1),L=function(e){var t=e.handleProjectMoreOpen;return Object(M.jsxs)(l.a,{sx:{padding:"1rem 1.5rem"},children:[Object(M.jsxs)(O.a,{alignItems:"flex-end",justifyContent:"space-between",children:[Object(M.jsx)(m.c,{children:"Uko Dashboard"}),Object(M.jsx)(C.a,{sx:{padding:0},onClick:t,children:Object(M.jsx)(x.a,{})})]}),Object(M.jsxs)(O.a,{alignItems:"center",marginTop:1,children:[Object(M.jsx)(v.a,{sx:{color:"text.disabled",marginRight:1}}),Object(M.jsx)(m.h,{fontWeight:500,color:"text.disabled",children:"Due on Nov 3"})]}),Object(M.jsx)(m.g,{fontSize:12,fontWeight:500,my:3,lineHeight:1.8,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam"}),Object(M.jsxs)(O.a,{justifyContent:"space-between",py:1,children:[Object(M.jsx)(m.g,{fontWeight:600,children:"Project Progress"}),Object(M.jsx)(m.g,{fontWeight:600,children:"32%"})]}),Object(M.jsx)(g.a,{variant:"determinate",value:32}),Object(M.jsxs)(O.a,{alignItems:"center",justifyContent:"space-between",pt:3,children:[Object(M.jsxs)(O.a,{alignItems:"center",children:[Object(M.jsxs)(y.a,{children:[Object(M.jsx)(k.a,{alt:"Remy Sharp",src:"/static/avatar/001-man.svg"}),Object(M.jsx)(k.a,{alt:"Travis Howard",src:"/static/avatar/002-girl.svg"}),Object(M.jsx)(k.a,{alt:"Cindy Baker",src:"/static/avatar/003-boy.svg"})]}),Object(M.jsx)(m.h,{ml:1,children:"+ 15 people"})]}),Object(M.jsx)(w.a,{onClick:function(e){return console.log(e.target.value)}})]})]})},S=r(891),H=r(154),V=r(0),R=function(e){var t=e.tabTitle,r=e.amount,a=e.badgeColor;return Object(M.jsx)(S.a,{variant:"dot",overlap:"circular",badgeContent:"",color:a||"default",children:Object(M.jsxs)(H.a,{sx:{color:"text.primary"},children:[Object(M.jsx)(m.b,{children:r}),Object(M.jsx)(m.e,{marginBottom:1,children:t})]})})},I=r(918),P=r(951),B=j(o.a)((function(e){return{"& .MuiTabs-flexContainer":{justifyContent:"space-between","& .Mui-selected":{"& h2, & h5":{color:e.theme.palette.primary.main}}}}})),z=[{title:"In Progress",amount:45,badgeColor:"primary"},{title:"Upcoming",amount:3,badgeColor:"warning"},{title:"Blocked",amount:2,badgeColor:"error"},{title:"Projects Total",amount:141,badgeColor:"success"}];t.default=function(){Object(I.a)("Uko Project V1");var e=Object(V.useState)("0"),t=Object(a.a)(e,2),r=t[0],o=t[1],u=Object(V.useState)(!1),j=Object(a.a)(u,2),x=j[0],v=j[1],C=Object(V.useState)(null),g=Object(a.a)(C,2),y=g[0],w=g[1],k=Object(c.a)((function(e){return e.breakpoints.down("sm")})),S=function(e){w(e.currentTarget)},H=["in-progress","upcoming","blocked","projects-total","in-progress","upcoming","blocked","projects-total","upcoming"].filter((function(e){return"0"===r||"upcoming"===e&&"1"===r||"blocked"===e&&"2"===r||"projects-total"===e&&"2"===r}));return Object(M.jsx)(f.a,{pt:2,pb:4,children:Object(M.jsxs)(i.a,{value:r,children:[Object(M.jsxs)(s.a,{container:!0,spacing:3,children:[Object(M.jsx)(s.a,{item:!0,xs:12,md:7,children:Object(M.jsx)(l.a,{sx:{padding:"1.5rem"},children:Object(M.jsx)(B,{onChange:function(e,t){o(t)},variant:"scrollable",children:z.map((function(e,t){return Object(M.jsx)(b.a,{disableRipple:!0,value:"".concat(t),label:Object(M.jsx)(R,{tabTitle:e.title,amount:e.amount,badgeColor:e.badgeColor})},e.title)}))})})}),Object(M.jsx)(s.a,{item:!0,xs:12,md:5,children:Object(M.jsx)(l.a,{sx:{padding:".1rem 2rem",height:"100%"},children:Object(M.jsxs)(O.a,{height:"100%",alignItems:"center",justifyContent:"space-between",children:[Object(M.jsx)(m.b,{children:"UKo Projects"}),Object(M.jsx)("img",{alt:"Uko Projects",src:"/static/illustration/uko-project-v1.svg"})]})})}),Object(M.jsx)(s.a,{item:!0,xs:12,children:Object(M.jsxs)(O.a,{justifyContent:"space-between",flexWrap:"wrap",children:[Object(M.jsx)(p.a,{placeholder:"Find Projects",sx:{maxWidth:k?"100%":270,marginBottom:k?1:0}}),Object(M.jsx)(d.a,{fullWidth:k,variant:"contained",startIcon:Object(M.jsx)(n.a,{}),onClick:function(){return v(!0)},sx:{fontSize:12},children:"Create a project"}),Object(M.jsx)(P.a,{open:x,setOpen:v})]})})]}),Object(M.jsxs)(s.a,{container:!0,spacing:3,pt:4,children:[H.map((function(e,t){return Object(M.jsx)(s.a,{item:!0,xs:12,sm:6,lg:4,children:Object(M.jsx)(L,{handleProjectMoreOpen:S})},t)})),Object(M.jsx)(h.a,{anchorEl:y,handleMoreClose:function(){return w(null)}})]})]})})}},918:function(e,t,r){"use strict";var a=r(188),n=r(0);t.a=function(e){var t=Object(n.useContext)(a.a),r=t.title,o=t.setTitle;return Object(n.useEffect)((function(){return o(e)}),[e,o]),r}},919:function(e,t,r){"use strict";var a=r(16),n=r(187),o=r(1);t.a=function(e){return Object(o.jsxs)(n.a,Object(a.a)(Object(a.a)({viewBox:"0 0 20 20"},e),{},{children:[Object(o.jsx)("path",{d:"M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.84769 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.84769 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.84769 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M19.7617 18.6124L15.1005 13.9511C14.7829 13.6335 14.2685 13.6335 13.9509 13.9511C13.6332 14.2684 13.6332 14.7834 13.9509 15.1007L18.6121 19.762C18.7709 19.9208 18.9788 20.0002 19.1869 20.0002C19.3948 20.0002 19.6029 19.9208 19.7617 19.762C20.0794 19.4446 20.0794 18.9297 19.7617 18.6124Z",fill:"currentColor"})]}))}},921:function(e,t,r){"use strict";var a=r(16),n=r(4),o=r(10),i=r(52),c=r(919),s=r(1),l=Object(o.a)(i.c)((function(e){var t=e.theme;return Object(n.a)({height:45,fontSize:13,width:"100%",maxWidth:270,fontWeight:500,padding:"0 1rem",borderRadius:"8px",border:"1px solid ",borderColor:"light"===t.palette.mode?t.palette.secondary[300]:t.palette.divider,color:t.palette.text.primary,backgroundColor:t.palette.background.paper},t.breakpoints.down(500),{maxWidth:"100%"})}));t.a=function(e){return Object(s.jsx)(l,Object(a.a)(Object(a.a)({},e),{},{startAdornment:Object(s.jsx)(c.a,{sx:{fontSize:16,marginRight:1,color:"text.disabled"}})}))}},922:function(e,t,r){"use strict";var a=r(16),n=r(187),o=r(1);t.a=function(e){return Object(o.jsx)(n.a,Object(a.a)(Object(a.a)({viewBox:"0 0 12 12"},e),{},{children:Object(o.jsx)("path",{d:"M10.6221 0.48305C9.97692 -0.161017 8.93219 -0.161017 8.28705 0.48305L7.70255 1.07081L1.48058 7.29007L1.46735 7.3034C1.46415 7.3066 1.46415 7.31001 1.46074 7.31001C1.45413 7.31993 1.44421 7.32974 1.43771 7.33966C1.43771 7.34297 1.4343 7.34297 1.4343 7.34627C1.42769 7.35619 1.42448 7.3628 1.41777 7.37272C1.41457 7.37603 1.41457 7.37923 1.41126 7.38264C1.40795 7.39256 1.40465 7.39917 1.40124 7.40909C1.40124 7.41229 1.39804 7.41229 1.39804 7.4157L0.0175678 11.5673C-0.0229278 11.6855 0.00785715 11.8164 0.096803 11.9041C0.159303 11.9658 0.2436 12.0003 0.331306 12C0.367153 11.9994 0.40269 11.9938 0.436987 11.9835L4.585 10.5996C4.58821 10.5996 4.58821 10.5996 4.59162 10.5964C4.60205 10.5933 4.61207 10.5888 4.62126 10.583C4.62385 10.5827 4.62612 10.5816 4.62798 10.5798C4.63779 10.5732 4.65102 10.5665 4.66093 10.5599C4.67075 10.5534 4.68077 10.5435 4.69069 10.5368C4.69399 10.5334 4.69719 10.5334 4.69719 10.5302C4.7006 10.5269 4.70721 10.5237 4.71052 10.517L11.517 3.70989C12.161 3.06469 12.161 2.01986 11.517 1.37476L10.6221 0.48305ZM4.47932 9.82336L2.18078 7.5247L7.93375 1.77118L10.2323 4.06984L4.47932 9.82336ZM1.85702 8.1357L3.86507 10.1438L0.849795 11.1479L1.85702 8.1357ZM11.0514 3.24745L10.7013 3.60089L8.40265 1.30203L8.75616 0.948691C9.14283 0.562292 9.76959 0.562292 10.1564 0.948691L11.0546 1.84702C11.4384 2.23548 11.4369 2.86085 11.0514 3.24745Z",fill:"currentColor"})}))}},923:function(e,t,r){"use strict";var a=r(16),n=r(929),o=r(909),i=r(154),c=r(1);t.a=function(e){return Object(c.jsx)(o.a,Object(a.a)(Object(a.a)({sx:{p:0}},e),{},{children:Object(c.jsx)(i.a,{sx:{width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed",borderRadius:"50%",borderColor:"secondary.400"},children:Object(c.jsx)(n.a,{fontSize:"small",sx:{color:"secondary.400"}})})}))}},924:function(e,t,r){"use strict";var a=r(16),n=r(187),o=r(1);t.a=function(e){return Object(o.jsxs)(n.a,Object(a.a)(Object(a.a)({viewBox:"0 0 10 12"},e),{},{children:[Object(o.jsx)("path",{d:"M4.23535 5.64706H4.94123V9.52942H4.23535V5.64706Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M2.82349 5.64706H3.52937V9.52942H2.82349V5.64706Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M5.64722 5.64706H6.3531V9.52942H5.64722V5.64706Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M9.17647 1.41176H6.35294V1.05882C6.35294 0.474988 5.87798 0 5.29412 0H3.88235C3.29849 0 2.82353 0.474988 2.82353 1.05882V1.41176H0V3.52941H0.735247L1.38428 10.994C1.41231 11.5588 1.87518 12 2.44179 12H6.73466C7.30127 12 7.76414 11.5588 7.79217 10.994L8.44123 3.52941H9.17647V1.41176ZM3.52941 1.05882C3.52941 0.864212 3.68774 0.705882 3.88235 0.705882H5.29412C5.48875 0.705882 5.64706 0.864212 5.64706 1.05882V1.41176H3.52941V1.05882ZM0.705882 2.11765H8.47059V2.82353H0.705882V2.11765ZM7.08732 10.9559C7.07941 11.1455 6.92452 11.2941 6.73468 11.2941H2.44179C2.25195 11.2941 2.09706 11.1456 2.08915 10.9559C1.39861 3.00981 1.44584 3.55313 1.44376 3.52941H7.73271C7.73082 3.55071 7.77478 3.04544 7.08732 10.9559Z",fill:"currentColor"})]}))}},926:function(e,t,r){"use strict";var a=r(16),n=r(10),o=r(477),i=r(1),c=Object(n.a)(o.a)((function(e){var t=e.theme;return{"&:hover, & .MuiOutlinedInput-root:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.primary.main}},"& .MuiOutlinedInput-input":{fontSize:12,minHeight:35,fontWeight:500,borderRadius:"8px",padding:"0px 1rem",color:t.palette.text.primary},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"8px",borderColor:"transparent",borderWidth:"1px !important"},"& .MuiInputBase-root":{backgroundColor:"light"===t.palette.mode?t.palette.text.secondary:t.palette.divider}}}));t.a=function(e){return Object(i.jsx)(c,Object(a.a)(Object(a.a)({},e),{},{fullWidth:!0}))}},927:function(e,t,r){"use strict";var a=r(473),n=r(911),o=r(924),i=r(922),c=(r(0),r(32)),s=r(1);t.a=function(e){var t=e.anchorEl,r=e.handleMoreClose;return Object(s.jsxs)(a.a,{anchorEl:t,open:Boolean(t),onClose:r,children:[Object(s.jsxs)(n.a,{onClick:r,sx:{"&:hover":{color:"primary.main"}},children:[Object(s.jsx)(i.a,{sx:{fontSize:14,marginRight:1}}),Object(s.jsx)(c.h,{fontWeight:500,children:"Edit"})]}),Object(s.jsxs)(n.a,{onClick:r,sx:{"&:hover":{color:"primary.main"}},children:[Object(s.jsx)(o.a,{sx:{fontSize:14,marginRight:1}}),Object(s.jsx)(c.h,{fontWeight:500,children:"Remove"})]})]})}},929:function(e,t,r){"use strict";var a=r(63),n=r(1);t.a=Object(a.a)(Object(n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},931:function(e,t,r){"use strict";var a=r(480),n=Object(a.a)();t.a=n},933:function(e,t,r){"use strict";var a=r(16),n=r(187),o=r(1);t.a=function(e){return Object(o.jsxs)(n.a,Object(a.a)(Object(a.a)({viewBox:"0 0 16 15"},e),{},{children:[Object(o.jsx)("path",{d:"M6.0299 5.69554C6.63699 5.69554 7.12914 5.2034 7.12914 4.59631C7.12914 3.98922 6.63699 3.49707 6.0299 3.49707C5.42281 3.49707 4.93066 3.98922 4.93066 4.59631C4.93066 5.2034 5.42281 5.69554 6.0299 5.69554Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M15.0534 8.64122C14.5344 8.15267 13.8779 7.83206 13.1603 7.74046V2.15267C13.1603 1.55725 12.916 1.0229 12.5344 0.625954C12.1374 0.229008 11.6031 0 11.0076 0H2.15267C1.55725 0 1.0229 0.244275 0.625954 0.625954C0.229008 1.0229 0 1.55725 0 2.15267V9.19084V9.84733V11.2672C0 11.8626 0.244275 12.3969 0.625954 12.7939C1.0229 13.1908 1.55725 13.4198 2.15267 13.4198H10.7176C11.2824 13.8779 11.9847 14.1679 12.7634 14.1679C13.6641 14.1679 14.4733 13.8015 15.0534 13.2214C15.6336 12.6412 16 11.8321 16 10.9313C16 10.0305 15.6336 9.22137 15.0534 8.64122ZM0.80916 2.15267C0.80916 1.78626 0.961832 1.45038 1.20611 1.20611C1.45038 0.961832 1.78626 0.80916 2.15267 0.80916H11.0076C11.374 0.80916 11.7099 0.961832 11.9542 1.20611C12.1985 1.45038 12.3511 1.78626 12.3511 2.15267V6.91603L10.0916 4.67176C9.93893 4.51908 9.67939 4.50382 9.51145 4.67176L6.10687 8.0916L3.80153 5.77099C3.64885 5.61832 3.38931 5.60305 3.22137 5.77099L0.80916 8.21374V2.15267ZM2.1374 12.626V12.6107C1.77099 12.6107 1.43511 12.458 1.19084 12.2137C0.961832 11.9695 0.80916 11.6336 0.80916 11.2672V9.84733V9.35878L3.52672 6.64122L5.83206 8.94656C5.98473 9.09924 6.24427 9.09924 6.41221 8.94656L9.81679 5.52672L12.0458 7.77099C12 7.78626 11.9542 7.80153 11.9084 7.81679C11.8473 7.83206 11.7863 7.84733 11.7099 7.87786C11.6489 7.89313 11.5878 7.92366 11.5267 7.93893C11.4809 7.9542 11.4504 7.96947 11.4046 8C11.3435 8.03053 11.2977 8.0458 11.2519 8.07634C11.1756 8.12214 11.0992 8.16794 11.0229 8.21374C10.9771 8.24428 10.9466 8.25954 10.9008 8.29008C10.8702 8.30534 10.855 8.32061 10.8244 8.33588C10.687 8.42748 10.5649 8.53435 10.458 8.65649C9.87786 9.23664 9.51145 10.0458 9.51145 10.9466C9.51145 11.1756 9.54198 11.3893 9.58779 11.6183C9.60305 11.6794 9.61832 11.7252 9.63359 11.7863C9.67939 11.9389 9.72519 12.0916 9.78626 12.2443V12.2595C9.84733 12.3817 9.9084 12.5191 9.98473 12.626H2.1374ZM14.458 12.6412C14.0153 13.084 13.4198 13.3435 12.7481 13.3435C12.1069 13.3435 11.5114 13.084 11.084 12.6718C11.0229 12.6107 10.9618 12.5344 10.9008 12.4733C10.855 12.4275 10.8092 12.3664 10.7634 12.3206C10.7023 12.2443 10.6565 12.1527 10.6107 12.0611C10.5802 12 10.5496 11.9542 10.5191 11.8931C10.4886 11.8168 10.458 11.7252 10.4427 11.6336C10.4275 11.5725 10.3969 11.4962 10.3817 11.4351C10.3511 11.2824 10.3359 11.1145 10.3359 10.9466C10.3359 10.2748 10.6107 9.67939 11.0382 9.23664C11.4809 8.79389 12.0763 8.53435 12.7481 8.53435C13.4198 8.53435 14.0153 8.80916 14.458 9.23664C14.9008 9.66412 15.1603 10.2748 15.1603 10.9466C15.1603 11.6031 14.8855 12.1985 14.458 12.6412Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M14.0758 10.5193H13.1445V9.588C13.1445 9.35899 12.9613 9.17578 12.7323 9.17578C12.5033 9.17578 12.3201 9.35899 12.3201 9.588V10.5193H11.3888C11.1598 10.5193 10.9766 10.7025 10.9766 10.9315C10.9766 11.1605 11.1598 11.3437 11.3888 11.3437H12.3201V12.275C12.3201 12.504 12.5033 12.6872 12.7323 12.6872C12.9613 12.6872 13.1445 12.504 13.1445 12.275V11.3437H14.0758C14.3048 11.3437 14.488 11.1605 14.488 10.9315C14.488 10.7025 14.3048 10.5193 14.0758 10.5193Z",fill:"currentColor"})]}))}},939:function(e,t,r){"use strict";var a=r(63),n=r(1);t.a=Object(a.a)(Object(n.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz")},941:function(e,t,r){"use strict";var a=r(84),n=r(8),o=r(3),i=r(0),c=(r(21),r(11)),s=r(155),l=r(97),b=r(185),d=r(22),u=r(47),j=r(10),f=r(18),O=r(68),h=r(76);function p(e){return Object(O.a)("MuiLinearProgress",e)}Object(h.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var m,x,v,C,g,y,w,k,M,L,S,H,V=r(1),R=["className","color","value","valueBuffer","variant"],I=Object(l.c)(w||(w=m||(m=Object(a.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),P=Object(l.c)(k||(k=x||(x=Object(a.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),B=Object(l.c)(M||(M=v||(v=Object(a.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),z=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?Object(b.d)(e.palette[t].main,.62):Object(b.b)(e.palette[t].main,.5)},W=Object(j.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat(Object(d.a)(r.color))],t[r.variant]]}})((function(e){var t=e.ownerState,r=e.theme;return Object(o.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:z(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),Z=Object(j.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var r=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(d.a)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme,a=z(r,t.color);return Object(o.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(l.b)(L||(L=C||(C=Object(a.a)(["\n    animation: "," 3s infinite linear;\n  "]))),B)),D=Object(j.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat(Object(d.a)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":r.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.b)(S||(S=g||(g=Object(a.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),I)})),N=Object(j.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat(Object(d.a)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":r.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:z(r,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.b)(H||(H=y||(y=Object(a.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),P)})),A=i.forwardRef((function(e,t){var r=Object(f.a)({props:e,name:"MuiLinearProgress"}),a=r.className,i=r.color,l=void 0===i?"primary":i,b=r.value,j=r.valueBuffer,O=r.variant,h=void 0===O?"indeterminate":O,m=Object(n.a)(r,R),x=Object(o.a)({},r,{color:l,variant:h}),v=function(e){var t=e.classes,r=e.variant,a=e.color,n={root:["root","color".concat(Object(d.a)(a)),r],dashed:["dashed","dashedColor".concat(Object(d.a)(a))],bar1:["bar","barColor".concat(Object(d.a)(a)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat(Object(d.a)(a)),"buffer"===r&&"color".concat(Object(d.a)(a)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return Object(s.a)(n,p,t)}(x),C=Object(u.a)(),g={},y={bar1:{},bar2:{}};if("determinate"===h||"buffer"===h)if(void 0!==b){g["aria-valuenow"]=Math.round(b),g["aria-valuemin"]=0,g["aria-valuemax"]=100;var w=b-100;"rtl"===C.direction&&(w=-w),y.bar1.transform="translateX(".concat(w,"%)")}else 0;if("buffer"===h)if(void 0!==j){var k=(j||0)-100;"rtl"===C.direction&&(k=-k),y.bar2.transform="translateX(".concat(k,"%)")}else 0;return Object(V.jsxs)(W,Object(o.a)({className:Object(c.a)(v.root,a),ownerState:x,role:"progressbar"},g,{ref:t},m,{children:["buffer"===h?Object(V.jsx)(Z,{className:v.dashed,ownerState:x}):null,Object(V.jsx)(D,{className:v.bar1,ownerState:x,style:y.bar1}),"determinate"===h?null:Object(V.jsx)(N,{className:v.bar2,ownerState:x,style:y.bar2})]}))}));t.a=A},944:function(e,t,r){"use strict";var a=r(4),n=r(8),o=r(3),i=r(0),c=(r(21),r(156),r(11)),s=r(155),l=r(10),b=r(18),d=r(462),u=r(827),j=r(68),f=r(76);function O(e){return Object(j.a)("MuiAvatarGroup",e)}var h=Object(f.a)("MuiAvatarGroup",["root","avatar"]),p=r(1),m=["children","className","max","spacing","variant"],x={small:-16,medium:null},v=Object(l.a)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return Object(o.a)(Object(a.a)({},"& .".concat(h.avatar),t.avatar),t.root)}})((function(e){var t,r=e.theme;return t={},Object(a.a)(t,"& .".concat(d.a.root),{border:"2px solid ".concat(r.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(a.a)(t,"display","flex"),Object(a.a)(t,"flexDirection","row-reverse"),t})),C=Object(l.a)(u.a,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})((function(e){var t=e.theme;return{border:"2px solid ".concat(t.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),g=i.forwardRef((function(e,t){var r=Object(b.a)({props:e,name:"MuiAvatarGroup"}),a=r.children,l=r.className,d=r.max,u=void 0===d?5:d,j=r.spacing,f=void 0===j?"medium":j,h=r.variant,g=void 0===h?"circular":h,y=Object(n.a)(r,m),w=u<2?2:u,k=Object(o.a)({},r,{max:u,spacing:f,variant:g}),M=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"]},O,t)}(k),L=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})),S=L.length>w?L.length-w+1:0,H=f&&void 0!==x[f]?x[f]:-f;return Object(p.jsxs)(v,Object(o.a)({ownerState:k,className:Object(c.a)(M.root,l),ref:t},y,{children:[S?Object(p.jsxs)(C,{ownerState:k,className:M.avatar,style:{marginLeft:H},variant:g,children:["+",S]}):null,L.slice(0,L.length-S).reverse().map((function(e){return i.cloneElement(e,{className:Object(c.a)(e.props.className,M.avatar),style:Object(o.a)({marginLeft:H},e.props.style),variant:e.props.variant||g})}))]}))}));t.a=g},951:function(e,t,r){"use strict";var a=r(16),n=r(13),o=r(1088),i=r(47),c=r(890),s=r(823),l=r(154),b=r(909),d=r(976),u=r(827),j=r(478),f=r(923),O=r(926),h=r(45),p=r(32),m=r(933),x=r(0),v=r(1);t.a=function(e){var t=e.open,r=e.setOpen,C=Object(x.useState)(new Date),g=Object(n.a)(C,2),y=g[0],w=g[1],k=Object(i.a)();return Object(v.jsx)(c.a,{open:t,onClose:function(){return r(!1)},children:Object(v.jsxs)(s.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,boxShadow:1,p:4},children:[Object(v.jsxs)(l.a,{mb:2,children:[Object(v.jsx)(p.f,{mb:1,children:"Project Name"}),Object(v.jsx)(O.a,{placeholder:"Project name",fullWidth:!0})]}),Object(v.jsxs)(l.a,{mb:2,children:[Object(v.jsx)(p.f,{mb:1,children:"Deadline"}),Object(v.jsx)(o.a,{value:y,onChange:function(e){return w(e)},renderInput:function(e){return Object(v.jsx)(O.a,Object(a.a)(Object(a.a)({fullWidth:!0},e),{},{inputProps:{placeholder:"Deadline Date"}}))}})]}),Object(v.jsxs)(l.a,{mb:2,children:[Object(v.jsx)(p.f,{mb:1,children:"Description"}),Object(v.jsx)(O.a,{fullWidth:!0,rows:2,multiline:!0,name:"description",placeholder:"Description",sx:{"& .MuiOutlinedInput-root":{padding:0,"& textarea":{paddingY:1}}}})]}),Object(v.jsxs)(l.a,{mb:2,children:[Object(v.jsx)(p.f,{mb:1,children:"Add Picture"}),Object(v.jsxs)("label",{htmlFor:"icon-button-file",children:[Object(v.jsx)("input",{accept:"image/*",id:"icon-button-file",type:"file",style:{display:"none"}}),Object(v.jsx)(b.a,{component:"span",disableRipple:!0,sx:{padding:0,display:"block"},children:Object(v.jsxs)(l.a,{sx:{backgroundColor:"light"===k.palette.mode?"secondary.300":"divider",minHeight:40,borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)(m.a,{sx:{fontSize:18,color:"text.disabled",marginRight:.5}}),Object(v.jsx)(p.h,{color:"text.disabled",children:"Choose a file"})]})})]})]}),Object(v.jsxs)(l.a,{my:1,children:[Object(v.jsx)(p.h,{children:"Team"}),Object(v.jsxs)(d.a,{direction:"row",spacing:1,mt:1,children:[Object(v.jsx)(f.a,{}),Object(v.jsx)(u.a,{alt:"Remy Sharp",src:"/static/user/user-7.png"}),Object(v.jsx)(u.a,{alt:"Travis Howard",src:"/static/user/user-6.png"}),Object(v.jsx)(u.a,{alt:"Cindy Baker",src:"/static/user/user-5.png"})]})]}),Object(v.jsxs)(h.a,{mt:4,children:[Object(v.jsx)(j.a,{variant:"contained",fullWidth:!0,children:"Create"}),Object(v.jsx)(l.a,{width:40}),Object(v.jsx)(j.a,{variant:"contained",fullWidth:!0,onClick:function(){return r(!1)},sx:{backgroundColor:"light"===k.palette.mode?"secondary.300":"divider",color:"text.disabled","&:hover":{backgroundColor:"light"===k.palette.mode?"secondary.300":"divider",color:"text.disabled"}},children:"Cancel"})]})]})})}},976:function(e,t,r){"use strict";var a=r(4),n=r(8),o=r(3),i=r(0),c=(r(21),r(54)),s=r(59),l=r(806),b=r(186),d=r(10),u=r(18),j=r(1),f=["component","direction","spacing","divider","children"];function O(e,t){var r=i.Children.toArray(e).filter(Boolean);return r.reduce((function(e,a,n){return e.push(a),n<r.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(n)})),e}),[])}var h=Object(d.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,r=e.theme,n=Object(o.a)({display:"flex"},Object(c.b)({theme:r},Object(c.d)({values:t.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=Object(s.a)(r),l=Object.keys(r.breakpoints.values).reduce((function(e,r){return null==t.spacing[r]&&null==t.direction[r]||(e[r]=!0),e}),{}),d=Object(c.d)({values:t.direction,base:l}),u=Object(c.d)({values:t.spacing,base:l});n=Object(b.a)(n,Object(c.b)({theme:r},u,(function(e,r){return{"& > :not(style) + :not(style)":Object(a.a)({margin:0},"margin".concat((n=r?d[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n])),Object(s.d)(i,e))};var n})))}return n})),p=i.forwardRef((function(e,t){var r=Object(u.a)({props:e,name:"MuiStack"}),a=Object(l.a)(r),i=a.component,c=void 0===i?"div":i,s=a.direction,b=void 0===s?"column":s,d=a.spacing,p=void 0===d?0:d,m=a.divider,x=a.children,v=Object(n.a)(a,f),C={direction:b,spacing:p};return Object(j.jsx)(h,Object(o.a)({as:c,ownerState:C,ref:t},v,{children:m?O(x,m):x}))}));t.a=p},991:function(e,t,r){"use strict";var a=r(63),n=r(1);t.a=Object(a.a)(Object(n.jsx)("path",{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"}),"Flag")}}]);
//# sourceMappingURL=12.c734da76.chunk.js.map