(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[44],{359:function(t,i,n){"use strict";n.r(i),n.d(i,"Grabber",(function(){return a}));var o=n(45),e=n(211);function r(t,i,n,e,r){t.canvas.draw((t=>{var a;const s=i.getPosition();!function(t,i,n,e,r,a){Object(o.v)(t,n,e),t.strokeStyle=Object(o.K)(r,a),t.lineWidth=i,t.stroke()}(t,null!==(a=i.retina.linksWidth)&&void 0!==a?a:0,s,r,n,e)}))}class a extends o.c{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.grab;i&&(t.retina.grabModeDistance=i.distance*t.retina.pixelRatio)}async interact(){const t=this.container,i=t.actualOptions.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==o.ab)return;const n=t.interactivity.mouse.position;if(!n)return;const e=t.retina.grabModeDistance;if(!e||e<0)return;const a=t.particles.quadTree.queryCircle(n,e,(t=>this.isEnabled(t)));for(const l of a){var s,c;const a=l.getPosition(),b=Object(o.y)(a,n);if(b>e)continue;const v=i.modes.grab.links,d=v.opacity,u=d-b*d/e;if(u<=0)continue;const p=null!==(s=v.color)&&void 0!==s?s:null===(c=l.options.links)||void 0===c?void 0:c.color;if(!t.particles.grabLineColor&&p){const n=i.modes.grab.links;t.particles.grabLineColor=Object(o.D)(p,n.blink,n.consent)}const f=Object(o.C)(l,void 0,t.particles.grabLineColor);f&&r(t,l,f,u,n)}await Promise.resolve()}isEnabled(t){var i;const n=this.container,e=n.interactivity.mouse,r=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:n.actualOptions.interactivity).events;return r.onHover.enable&&!!e.position&&Object(o.P)("grab",r.onHover.mode)}loadModeOptions(t){t.grab||(t.grab=new e.a);for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];for(const e of n)t.grab.load(null===e||void 0===e?void 0:e.grab)}reset(){}}}}]);
//# sourceMappingURL=44.ae2a5727.chunk.js.map