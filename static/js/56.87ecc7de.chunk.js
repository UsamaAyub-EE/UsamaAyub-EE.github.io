(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[56],{327:function(o,n,t){"use strict";t.r(n),t.d(n,"Collider",(function(){return s}));var e=t(45);async function i(o,n,e,i){switch(o.options.collisions.mode){case"absorb":{const{absorb:s}=await t.e(54).then(t.bind(null,352));s(o,n,e,i);break}case"bounce":{const{bounce:e}=await t.e(55).then(t.bind(null,232));e(o,n);break}case"destroy":{const{destroy:e}=await t.e(28).then(t.bind(null,353));e(o,n);break}}}class s extends e.e{constructor(o){super(o)}clear(){}init(){}async interact(o,n){if(o.destroyed||o.spawning)return;const t=this.container,s=o.getPosition(),a=o.getRadius(),c=t.particles.quadTree.queryCircle(s,2*a);for(const r of c){if(o===r||!r.options.collisions.enable||o.options.collisions.mode!==r.options.collisions.mode||r.destroyed||r.spawning)continue;const c=r.getPosition(),l=r.getRadius();if(Math.abs(Math.round(s.z)-Math.round(c.z))>a+l)continue;Object(e.y)(s,c)>a+l||await i(o,r,n,t.retina.pixelRatio)}}isEnabled(o){return o.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=56.87ecc7de.chunk.js.map