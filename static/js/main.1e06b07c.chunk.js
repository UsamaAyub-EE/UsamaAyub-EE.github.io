(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[14],{108:function(e){e.exports=JSON.parse('{"background":{"color":"#282c34"},"interactivity":{"events":{"onClick":{"enable":true,"mode":"push"},"onHover":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"push":{"quantity":4},"repulse":{"distance":200,"duration":0.4}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":"#ffffff","distance":150,"enable":true,"opacity":0.5,"width":1},"collisions":{"enable":true},"move":{"direction":"none","enable":true,"outModes":{"default":"bounce"},"random":false,"speed":5,"straight":false},"number":{"density":{"enable":true},"value":80},"opacity":{"value":0.5},"shape":{"type":"circle"},"size":{"random":true,"value":5}}}')},120:function(e){e.exports=JSON.parse('{"logo":{"source":"images/logo.png","height":45,"width":50},"sections":[{"title":"Home","href":"/"},{"title":"About","href":"/about"},{"title":"Skills","href":"/skills"},{"title":"Education","href":"/education"},{"title":"Projects","href":"/projects"},{"title":"TicTacToe","href":"/tictactoe"}]}')},126:function(e){e.exports=JSON.parse('{"social":[{"network":"github","href":"https://github.com/Zeeshan12340"},{"network":"discord","href":"https://discord.com/users/717250576747986955"}]}')},127:function(e){e.exports=JSON.parse('{"name":"Usama Ayub","roles":["a software engineer","hobbyist coder"]}')},128:function(e){e.exports=JSON.parse('{"sections":[{"component":"About","path":"/about","headerTitle":"About"},{"component":"Skills","path":"/skills","headerTitle":"Skills"},{"component":"Education","path":"/education","headerTitle":"Education"},{"component":"Projects","path":"/projects","headerTitle":"Projects"},{"component":"TicTacToe","path":"/tictactoe","headerTitle":"Tic Tac Toe"}]}')},133:function(e,t,n){},173:function(e,t,n){var o={"./About":[140,0,4],"./About.jsx":[140,0,4],"./Education":[136,13,2],"./Education.jsx":[136,13,2],"./FallbackSpinner":[34],"./FallbackSpinner.jsx":[34],"./Header":[131,8],"./Header.jsx":[131,8],"./Home":[58],"./Home.jsx":[58],"./NavBar":[54],"./NavBar.jsx":[54],"./Projects":[137,0,3],"./Projects.jsx":[137,0,3],"./Skills":[138,0,5],"./Skills.jsx":[138,0,5],"./Social":[59],"./Social.jsx":[59],"./ThemeToggler":[55],"./ThemeToggler.jsx":[55],"./TicTacToe":[139,6],"./TicTacToe.jsx":[139,6],"./projects/ProjectCard":[134,0,7],"./projects/ProjectCard.jsx":[134,0,7]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=173,e.exports=r},174:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(117),a=(n(133),n(135),n(41)),l=n(26),i=n(197),s=n(97),d=n(9),u=n(34),h=n(54),b=n(58),p=n(128),j=n(1);var A,f=function(){const[e,t]=Object(o.useState)(null);return Object(o.useEffect)((()=>{t(p)}),[]),Object(j.jsxs)("div",{className:"MainApp",children:[Object(j.jsx)(h.default,{}),Object(j.jsx)("main",{className:"main",children:Object(j.jsx)(d.c,{children:Object(j.jsxs)(o.Suspense,{fallback:Object(j.jsx)(u.default,{}),children:[Object(j.jsx)(d.a,{exact:!0,path:"/",component:b.default}),e&&e.sections.map((e=>{const t=r.a.lazy((()=>n(173)("./"+e.component)));return Object(j.jsx)(d.a,{path:e.path,component:()=>Object(j.jsx)(t,{header:e.headerTitle})},e.headerTitle)}))]})})})]})},m=n(2);var g=Object(l.c)(A||(A=Object(m.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(e=>{let{theme:t}=e;return t.background}),(e=>{let{theme:t}=e;return t.color}));const k={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},O={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"},v=document.getElementById("root");function S(){const e=Object(i.a)(!0);return Object(j.jsx)(s.a.Provider,{value:{darkMode:e},children:Object(j.jsxs)(l.b,{theme:e.isDarkMode?O:k,children:[Object(j.jsx)(g,{}),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(a.a,{children:Object(j.jsx)(f,{})})})]})})}Object(c.createRoot)(v).render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}))},34:function(e,t,n){"use strict";n.r(t);n(0);var o=n(175),r=n(1);const c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};t.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},54:function(e,t,n){"use strict";n.r(t);var o,r,c=n(2),a=n(99),l=n(176),i=n(130),s=n(0),d=n(9),u=n(41),h=n(26),b=n(55),p=n(120),j=n(1);const A={logoStyle:{width:50,height:40}},f=h.d.a(o||(o=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(e=>e.theme.navbarTheme.linkColor),(e=>e.theme.navbarTheme.linkHoverColor),(e=>e.theme.accentColor)),m=Object(h.d)(u.b)(r||(r=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(e=>e.theme.navbarTheme.linkColor),(e=>e.theme.navbarTheme.linkHoverColor),(e=>e.theme.accentColor),(e=>e.theme.navbarTheme.linkActiveColor)),g=Object(d.f)((()=>{var e,t,n,o,r,c;const d=Object(s.useContext)(h.a),[u,g]=Object(s.useState)(null),[k,O]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{g(p)}),[]),Object(j.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:k,children:Object(j.jsxs)(l.a,{children:[(null===u||void 0===u?void 0:u.logo)&&Object(j.jsx)(a.a.Brand,{href:"/",children:Object(j.jsx)("img",{src:null===u||void 0===u||null===(e=u.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==u&&void 0!==u&&null!==(t=u.logo)&&void 0!==t&&t.height&&null!==u&&void 0!==u&&null!==(n=u.logo)&&void 0!==n&&n.width?{height:null===u||void 0===u||null===(o=u.logo)||void 0===o?void 0:o.height,width:null===u||void 0===u||null===(r=u.logo)||void 0===r?void 0:r.width}:A.logoStyle})}),Object(j.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:()=>O(!k)}),Object(j.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(j.jsx)(i.a,{className:"me-auto"}),Object(j.jsx)(i.a,{children:u&&(null===(c=u.sections)||void 0===c?void 0:c.map(((e,t)=>"link"===(null===e||void 0===e?void 0:e.type)?Object(j.jsx)(f,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:()=>O(!1),className:"navbar__link",theme:d,children:e.title},e.title):Object(j.jsx)(m,{onClick:()=>O(!1),exact:0===t,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title))))}),Object(j.jsx)(b.default,{onClick:()=>O(!1)})]})]})})}));t.default=g},55:function(e,t,n){"use strict";n.r(t);n(0);var o=n(118),r=n.n(o),c=n(97),a=n(1);function l(e){const{onClick:t}=e;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.a.Consumer,{children:e=>Object(a.jsx)("div",{style:{marginBottom:8},children:Object(a.jsx)(r.a,{onChange:()=>(e.darkMode.toggle(),void t()),checked:e.darkMode.isDarkMode,size:50})})})})}l.defaultProps={onClick:()=>{}},t.default=l},58:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(124),c=n.n(r),a=n(110),l=n(59),i=n(34),s=n(127),d=n(108),u=n(100),h=n(109),b=n(1);const p={nameStyle:{fontSize:"3em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};t.default=function(){const[e,t]=Object(o.useState)(null),[n,r]=Object(o.useState)(!1);return Object(o.useEffect)((()=>{t(s),n||Object(u.b)((async e=>{await Object(h.a)(e)})).then((()=>{r(!0)}))}),[n]),e?Object(b.jsxs)("div",{style:p.mainContainer,children:[n&&Object(b.jsx)(u.a,{options:d}),Object(b.jsxs)(a.a,{children:[Object(b.jsx)("h1",{style:p.nameStyle,children:null===e||void 0===e?void 0:e.name}),Object(b.jsxs)("div",{style:{flexDirection:"row"},children:[Object(b.jsx)("h2",{style:p.inlineChild,children:"I'm\xa0"}),Object(b.jsx)(c.a,{options:{loop:!0,autoStart:!0,strings:null===e||void 0===e?void 0:e.roles}})]}),Object(b.jsx)(l.default,{})]})]}):Object(b.jsx)(i.default,{})}},59:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(125),c=n(126),a=n(1);const l={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};t.default=function(){const[e,t]=Object(o.useState)(null);return Object(o.useEffect)((()=>{t(c)}),[]),Object(a.jsxs)("div",{className:"social",children:[e?e.social.map((e=>Object(a.jsx)(r.SocialIcon,{style:l.iconStyle,url:e.href,network:e.network,target:"_blank",rel:"noopener"},e.network))):null,[{network:"hackthebox",href:"https://app.hackthebox.com/users/348120",iconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAYaFuZb0d9f3OLGAoUAbeyrFHiWNTtD5LrYmXfDzow&s",style:{marginLeft:10,marginRight:10,marginBottom:10,width:"60px",borderRadius:"50%"}},{network:"tryhackme",href:"https://tryhackme.com/p/Zeeshan1234",iconUrl:"data:image/jpeg;base64,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",style:{marginLeft:10,marginRight:10,marginBottom:10,width:"60px",borderRadius:"50%"}},{network:"pentesterlab",href:"https://pentesterlab.com/profile/Zeeshan1234",iconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_rab7QbwdKkFEPCC9YT9_FVUHEccfnlrJw6nw366dw&s",style:{marginLeft:10,marginRight:10,marginBottom:10,width:"60px",borderRadius:"50%"}},{network:"pwn.college",href:"https://pwn.college/hacker/4912",iconUrl:"https://avatars.githubusercontent.com/u/42601809?s=500",style:{marginLeft:10,marginRight:10,marginBottom:10,width:"60px",borderRadius:"50%"}}].map((e=>Object(a.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:e.iconUrl,alt:e.network,style:e.style})},e.network)))]})}},97:function(e,t,n){"use strict";var o=n(0);const r=n.n(o).a.createContext();t.a=r}},[[174,15,16]]]);
//# sourceMappingURL=main.1e06b07c.chunk.js.map