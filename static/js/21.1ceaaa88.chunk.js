(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[21],{222:function(t,i,o){"use strict";o.r(i),o.d(i,"Emitter",(function(){return d}));var e=o(45);class s{constructor(){this.wait=!1}load(t){t&&(void 0!==t.count&&(this.count=t.count),void 0!==t.delay&&(this.delay=Object(e.hb)(t.delay)),void 0!==t.duration&&(this.duration=Object(e.hb)(t.duration)),void 0!==t.wait&&(this.wait=t.wait))}}class n{constructor(){this.quantity=1,this.delay=.1}load(t){void 0!==t&&(void 0!==t.quantity&&(this.quantity=Object(e.hb)(t.quantity)),void 0!==t.delay&&(this.delay=Object(e.hb)(t.delay)))}}class a{constructor(){this.color=!1,this.opacity=!1}load(t){t&&(void 0!==t.color&&(this.color=t.color),void 0!==t.opacity&&(this.opacity=t.opacity))}}class l{constructor(){this.options={},this.replace=new a,this.type="square"}load(t){if(t){var i;if(void 0!==t.options)this.options=Object(e.r)({},null!==(i=t.options)&&void 0!==i?i:{});this.replace.load(t.replace),void 0!==t.type&&(this.type=t.type)}}}var r=o(227);class d{constructor(){this.autoPlay=!0,this.fill=!0,this.life=new s,this.rate=new n,this.shape=new l,this.startCount=0}load(t){t&&(void 0!==t.autoPlay&&(this.autoPlay=t.autoPlay),void 0!==t.size&&(this.size||(this.size=new r.a),this.size.load(t.size)),void 0!==t.direction&&(this.direction=t.direction),this.domId=t.domId,void 0!==t.fill&&(this.fill=t.fill),this.life.load(t.life),this.name=t.name,this.particles=Object(e.x)(t.particles,(t=>Object(e.r)({},t))),this.rate.load(t.rate),this.shape.load(t.shape),void 0!==t.position&&(this.position={},void 0!==t.position.x&&(this.position.x=Object(e.hb)(t.position.x)),void 0!==t.position.y&&(this.position.y=Object(e.hb)(t.position.y))),void 0!==t.spawnColor&&(void 0===this.spawnColor&&(this.spawnColor=new e.a),this.spawnColor.load(t.spawnColor)),void 0!==t.startCount&&(this.startCount=t.startCount))}}},227:function(t,i,o){"use strict";o.d(i,"a",(function(){return e}));class e{constructor(){this.mode="percent",this.height=0,this.width=0}load(t){void 0!==t&&(void 0!==t.mode&&(this.mode=t.mode),void 0!==t.height&&(this.height=t.height),void 0!==t.width&&(this.width=t.width))}}},342:function(t,i,o){"use strict";o.r(i),o.d(i,"EmittersPlugin",(function(){return n}));var e=o(45),s=o(222);class n{constructor(t){this._engine=t,this.id="emitters"}async getPlugin(t){const{Emitters:i}=await o.e(72).then(o.bind(null,271));return new i(this._engine,t)}loadOptions(t,i){var o;if(!this.needsPlugin(t)&&!this.needsPlugin(i))return;null!==i&&void 0!==i&&i.emitters&&(t.emitters=Object(e.x)(i.emitters,(t=>{const i=new s.Emitter;return i.load(t),i})));const n=null===i||void 0===i||null===(o=i.interactivity)||void 0===o||null===(o=o.modes)||void 0===o?void 0:o.emitters;if(n)if(Object(e.N)(n))t.interactivity.modes.emitters={random:{count:1,enable:!0},value:n.map((t=>{const i=new s.Emitter;return i.load(t),i}))};else{const i=n;if(void 0!==i.value){const o=1;if(Object(e.N)(i.value)){var a,l;t.interactivity.modes.emitters={random:{count:null!==(a=i.random.count)&&void 0!==a?a:o,enable:null!==(l=i.random.enable)&&void 0!==l&&l},value:i.value.map((t=>{const i=new s.Emitter;return i.load(t),i}))}}else{var r,d;const e=new s.Emitter;e.load(i.value),t.interactivity.modes.emitters={random:{count:null!==(r=i.random.count)&&void 0!==r?r:o,enable:null!==(d=i.random.enable)&&void 0!==d&&d},value:e}}}else{(t.interactivity.modes.emitters={random:{count:1,enable:!1},value:new s.Emitter}).value.load(n)}}}needsPlugin(t){var i;if(!t)return!1;const o=t.emitters;return Object(e.N)(o)&&!!o.length||void 0!==o||!(null===(i=t.interactivity)||void 0===i||null===(i=i.events)||void 0===i||null===(i=i.onClick)||void 0===i||!i.mode)&&Object(e.P)("emitter",t.interactivity.events.onClick.mode)}}}}]);
//# sourceMappingURL=21.1ceaaa88.chunk.js.map