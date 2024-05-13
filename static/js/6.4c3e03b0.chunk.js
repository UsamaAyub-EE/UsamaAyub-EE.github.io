(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[6],{134:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t(5),s=t.n(c),d=t(7),i=t(1);const l=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...l}=e;return r=Object(d.c)(r,"card-body"),Object(i.jsx)(c,{ref:a,className:s()(t,r),...l})}));l.displayName="CardBody";var o=l;const n=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...l}=e;return r=Object(d.c)(r,"card-footer"),Object(i.jsx)(c,{ref:a,className:s()(t,r),...l})}));n.displayName="CardFooter";var b=n,j=t(112);const f=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:c,as:l="div",...o}=e;const n=Object(d.c)(t,"card-header"),b=Object(r.useMemo)((()=>({cardHeaderBsPrefix:n})),[n]);return Object(i.jsx)(j.a.Provider,{value:b,children:Object(i.jsx)(l,{ref:a,...o,className:s()(c,n)})})}));f.displayName="CardHeader";var m=f;const x=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,variant:c,as:l="img",...o}=e;const n=Object(d.c)(t,"card-img");return Object(i.jsx)(l,{ref:a,className:s()(c?"".concat(n,"-").concat(c):n,r),...o})}));x.displayName="CardImg";var O=x;const y=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...l}=e;return r=Object(d.c)(r,"card-img-overlay"),Object(i.jsx)(c,{ref:a,className:s()(t,r),...l})}));y.displayName="CardImgOverlay";var g=y;const p=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="a",...l}=e;return r=Object(d.c)(r,"card-link"),Object(i.jsx)(c,{ref:a,className:s()(t,r),...l})}));p.displayName="CardLink";var u=p,v=t(107);const N=Object(v.a)("h6"),h=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c=N,...l}=e;return r=Object(d.c)(r,"card-subtitle"),Object(i.jsx)(c,{ref:a,className:s()(t,r),...l})}));h.displayName="CardSubtitle";var w=h;const C=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="p",...l}=e;return r=Object(d.c)(r,"card-text"),Object(i.jsx)(c,{ref:a,className:s()(t,r),...l})}));C.displayName="CardText";var P=C;const R=Object(v.a)("h5"),S=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c=R,...l}=e;return r=Object(d.c)(r,"card-title"),Object(i.jsx)(c,{ref:a,className:s()(t,r),...l})}));S.displayName="CardTitle";var k=S;const B=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,bg:c,text:l,border:n,body:b=!1,children:j,as:f="div",...m}=e;const x=Object(d.c)(t,"card");return Object(i.jsx)(f,{ref:a,...m,className:s()(r,x,c&&"bg-".concat(c),l&&"text-".concat(l),n&&"border-".concat(n)),children:b?Object(i.jsx)(o,{children:j}):j})}));B.displayName="Card";var T=Object.assign(B,{Img:O,Title:k,Subtitle:w,Body:o,Link:u,Text:P,Header:m,Footer:b,ImgOverlay:g}),I=t(248);const F=r.forwardRef(((e,a)=>{let{bsPrefix:t,bg:r="primary",pill:c=!1,text:l,className:o,as:n="span",...b}=e;const j=Object(d.c)(t,"badge");return Object(i.jsx)(n,{ref:a,...b,className:s()(o,j,c&&"rounded-pill",l&&"text-".concat(l),r&&"bg-".concat(r))})}));F.displayName="Badge";var L=F,V=t(26),H=t(352);const z={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=e=>{var a;const t=Object(r.useContext)(V.a),{project:c}=e;return Object(i.jsx)("div",{children:Object(i.jsxs)(T,{style:{borderRadius:10,backgroundColor:t.cardBackground,borderColor:t.cardBorderColor,borderWidth:3,width:350,marginLeft:100,marginRight:100,marginBottom:50},text:t.bsSecondaryVariant,children:[(null===c||void 0===c?void 0:c.image)&&Object(i.jsx)(T.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image,style:{height:200}}),Object(i.jsxs)(T.Body,{children:[Object(i.jsx)(T.Title,{style:z.cardTitleStyle,children:c.title}),Object(i.jsx)(T.Text,{style:z.cardTextStyle,as:"div",children:Object(i.jsx)(H.a,{children:c.bodyText})})]}),Object(i.jsx)(T.Body,{children:null===c||void 0===c||null===(a=c.links)||void 0===a?void 0:a.map((e=>Object(i.jsx)(I.a,{style:z.buttonStyle,variant:"outline-"+t.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),c.tags&&Object(i.jsx)(T.Footer,{style:{backgroundColor:t.cardFooterBackground},children:c.tags.map((e=>Object(i.jsx)(L,{pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:z.badgeStyle,children:e},e)))})]})})}},248:function(e,a,t){"use strict";var r=t(5),c=t.n(r),s=t(0),d=t(48),i=t(7),l=t(1);const o=s.forwardRef(((e,a)=>{let{as:t,bsPrefix:r,variant:s="primary",size:o,active:n=!1,disabled:b=!1,className:j,...f}=e;const m=Object(i.c)(r,"btn"),[x,{tagName:O}]=Object(d.b)({tagName:t,disabled:b,...f}),y=O;return Object(l.jsx)(y,{...x,...f,ref:a,disabled:b,className:c()(j,m,n&&"active",s&&"".concat(m,"-").concat(s),o&&"".concat(m,"-").concat(o),f.href&&b&&"disabled")})}));o.displayName="Button",a.a=o}}]);
//# sourceMappingURL=6.4c3e03b0.chunk.js.map