(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[123],{344:function(o,n,t){"use strict";t.r(n),t.d(n,"updateWobble",(function(){return p}));var e=t(45);const a=0,i=2*Math.PI,l=60;function p(o,n){var t;const{wobble:p}=o.options,{wobble:s}=o;if(null===p||void 0===p||!p.enable||!s)return;const c=s.angleSpeed*n.factor,r=s.moveSpeed*n.factor*((null!==(t=o.retina.wobbleDistance)&&void 0!==t?t:a)*n.factor)/(e.Y/l),b=i,{position:u}=o;s.angle+=c,s.angle>b&&(s.angle-=b),u.x+=r*Math.cos(s.angle),u.y+=r*Math.abs(Math.sin(s.angle))}}}]);
//# sourceMappingURL=123.ffe22e93.chunk.js.map