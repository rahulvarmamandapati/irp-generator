(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{314:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(0),l=t(21),i=t(11),o=t(4);const m=e=>{const[a,t]=n.useState(e),r=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=(e,a)=>{switch(a){case"email":return!e.match(r);default:return""===e}};return[a,(e,r)=>t({...a,[e]:{...a[e],value:r,hasError:l(r,e)}})]};var s=t(16),c=t(60),p=t(82),d=t(68),h=t(66),u=t(55),g=t(130),x=t(131),f=t.n(x),E=t(12),v=t(61);const b=r.c.h2.withConfig({displayName:"Page1__StyledH2",componentId:"sc-123bu32-0"})(["margin-top:0;margin-bottom:35px;font-family:",";font-weight:bold;font-style:normal;font-size:20px;line-height:24px;color:",";@media ","{font-size:24px;line-height:28px;}span{font-weight:normal;}"],e=>e.theme.sansSerif,e=>e.theme.darkBlue,o.a.breakUp768),y=r.c.h5.withConfig({displayName:"Page1__StyledH5",componentId:"sc-123bu32-1"})(["margin-top:0;margin-bottom:35px;font-family:",";font-weight:bold;font-style:normal;font-size:20px;line-height:24px;color:",";"],e=>e.theme.sansSerif,e=>e.theme.darkBlue),w=r.c.hr.withConfig({displayName:"Page1__StyledHr",componentId:"sc-123bu32-2"})(["border-top:1px solid #ebeaed;margin:30px auto;@media ","{margin:50px auto;}@media ","{display:none;}"],o.a.breakUp768,o.a.breakUp1024);a.default=function(){const{state:{currentPage:e,profile:a,avatars:t},dispatch:o}=n.useContext(i.a),[x,k]=m({name:{value:"",hasError:""},avatar_id:{value:"",hasError:""}}),N=""!==a.name&&!!a.avatar_id.id;return n.createElement(n.Fragment,null,n.createElement(u.a,{lottieData:g,fallback:f.a}),n.createElement(r.a,{theme:E.u},n.createElement(s.a,null,n.createElement(c.a,null),n.createElement(v.f,null,n.createElement(v.c,null,n.createElement(v.b,{className:"order-lgUp-2"},n.createElement(b,null,"Step 1:"," ",n.createElement("span",null,"Select your IRP avatar.")),n.createElement(E.i,null,n.createElement(E.n,{className:Object(l.a)(x.name.hasError&&"hasError"),htmlFor:"repName"},"Let\u2019s give them a name",n.createElement(E.m,{type:"text",className:Object(l.a)(x.name.hasError&&"hasError"),placeholder:"Name Your Rep",id:"repName",name:"repName",value:a.name||"",onChange:e=>{k("name",e.target.value),o({type:"setUserProfile",profile:{name:e.target.value}})}}),x.name.hasError&&n.createElement("small",null,"Oops, you forgot to give yourself a name!"))),n.createElement(E.i,{style:{marginBottom:0}},n.createElement(E.n,{style:{marginBottom:"15px"}},"Select an Avatar"),n.createElement(v.d,null,t.map(e=>n.createElement(v.e,{type:"button",key:e.id,onClick:()=>{o({type:"setUserProfile",profile:{avatar_id:{id:e.id}}})}},n.createElement(h.a,{id:"avatar".concat(e.id),selected:e.id===a.avatar_id.id,size:"x120x115x135x70"},e.id)))))),n.createElement(v.a,{className:"order-lgUp-1"},n.createElement(w,null),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement(d.a,{id:"avatar".concat(a.avatar_id.id),size:"x150"},"Select an avatar")),n.createElement("div",{className:"col"},n.createElement(y,{style:{marginBottom:"20px"}},"Why is this step important?"),n.createElement(E.o,null,"Choosing a rep name helps you visualize your ideal rep profile. Consider giving your rep profile a fun name like Rockstar Rachel or Moneyball Mike!")))))),n.createElement(p.a,{currentPage:e,isValid:N,validate:()=>{k("name",x.name.value)}}))))}},66:function(e,a,t){"use strict";var r=t(1),n=t(0),l=t.n(n),i=t(21),o=t(4);const m=r.c.svg.withConfig({displayName:"SelectProfileAvatar__StyledProfileImage",componentId:"sc-1x53soa-0"})(["width:200px;height:200px;margin-bottom:",";border-radius:100%;position:relative;&.x120{width:120px;height:120px;}&.x150{width:150px;height:150px;}&.x120x115x135x70{width:73px;height:73px;margin-bottom:0;@media ","{width:135px;height:135px;}@media ","{width:115px;height:115px;}@media ","{width:120px;height:120px;}}&.x70{width:70px;height:70px;margin-bottom:0;}&.x70x50{width:50px;height:50px;margin-bottom:0;@media ","{width:70px;height:70px;}}.label{position:absolute;top:50%;left:50%;transform:translateX(-50%);text-indent:-999em;user-select:none;z-index:-1;}"],e=>e.theme.spacing35,o.a.breakUp768,o.a.breakUp1024,o.a.breakUp1440,o.a.breakUp1024);a.a=function(e){let{size:a,id:t,selected:r}=e;const[n,o]=l.a.useState(!1);return l.a.createElement(m,{overflow:"auto",className:Object(i.a)("styledProfileImage",a,t,r&&"selected"),onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)}},r&&l.a.createElement("use",{xlinkHref:"#".concat(t,"_hover")}),!r&&l.a.createElement("use",{xlinkHref:n?"#".concat(t,"_hover"):"#".concat(t)}))}}}]);
//# sourceMappingURL=14.b11091d1.chunk.js.map