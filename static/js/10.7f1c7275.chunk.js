(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{230:function(t,o,e){"use strict";e.r(o),e.d(o,"divBounce",(function(){return p})),e.d(o,"mouseBounce",(function(){return h}));var n=e(45);const i=2,f=.5,c=Math.PI*f,s=2,r=10,u=0;function a(t,o,e,f,s){const r=t.particles.quadTree.query(f,s);for(const u of r)f instanceof n.b?Object(n.n)(Object(n.o)(u),{position:o,radius:e,mass:e**i*c,velocity:n.h.origin,factor:n.h.origin}):f instanceof n.f&&Object(n.fb)(u,Object(n.m)(o,e))}function p(t,o,e,i){Object(n.u)(e,o,((o,e)=>function(t,o,e,i){const c=document.querySelectorAll(o);c.length&&c.forEach((o=>{const c=o,u=t.retina.pixelRatio,a={x:(c.offsetLeft+c.offsetWidth*f)*u,y:(c.offsetTop+c.offsetHeight*f)*u},p=c.offsetWidth*f*u,h=r*u,b="circle"===e.type?new n.b(a.x,a.y,p+h):new n.f(c.offsetLeft*u-h,c.offsetTop*u-h,c.offsetWidth*u+h*s,c.offsetHeight*u+h*s);i(a,p,b)}))}(t,o,e,((o,e,n)=>a(t,o,e,n,i)))))}function h(t,o){const e=t.retina.pixelRatio,i=r*e,f=t.interactivity.mouse.position,c=t.retina.bounceModeDistance;!c||c<u||!f||a(t,f,c,new n.b(f.x,f.y,c+i),o)}}}]);
//# sourceMappingURL=10.7f1c7275.chunk.js.map