(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[30,74],{177:function(t,e,i){"use strict";i.r(e),i.d(e,"loadEmittersPlugin",(function(){return a})),i.d(e,"EmitterShapeBase",(function(){return n}));class n{constructor(t,e,i,n){this.position=t,this.size=e,this.fill=i,this.options=n}resize(t,e){this.position=t,this.size=e}}async function a(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t.emitterShapeManager){const{ShapeManager:e}=await i.e(73).then(i.bind(null,341));t.emitterShapeManager=new e(t)}t.addEmitterShapeGenerator||(t.addEmitterShapeGenerator=(e,i)=>{var n;null===(n=t.emitterShapeManager)||void 0===n||n.addShapeGenerator(e,i)});const{EmittersPlugin:n}=await i.e(21).then(i.bind(null,342)),a=new n(t);await t.addPlugin(a,e)}},320:function(t,e,i){"use strict";i.r(e),i.d(e,"EmittersCircleShapeGenerator",(function(){return h}));var n=i(177),a=i(45);const s=.25,r=2*Math.PI;class o extends n.EmitterShapeBase{constructor(t,e,i,n){super(t,e,i,n)}async init(){}async randomPosition(){const t=this.size,e=this.fill,i=this.position,[n,o]=[.5*t.width,.5*t.height],h=((t,e)=>{const i=Object(a.F)()*s,n=Math.atan(e/t*Math.tan(r*i)),o=Object(a.F)();return o<s?n:o<.5?Math.PI-n:o<.75?Math.PI+n:-n})(n,o),c=(d=h,(u=n)*(l=o)/Math.sqrt((l*Math.cos(d))**2+(u*Math.sin(d))**2)),p=e?c*Math.sqrt(Object(a.F)()):c;var u,l,d;return Promise.resolve({position:{x:i.x+p*Math.cos(h),y:i.y+p*Math.sin(h)}})}}class h{generate(t,e,i,n){return new o(t,e,i,n)}}}}]);
//# sourceMappingURL=30.7af0b2e2.chunk.js.map