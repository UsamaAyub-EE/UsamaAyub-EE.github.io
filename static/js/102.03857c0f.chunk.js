(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[102],{299:function(o,t,i){"use strict";i.r(t),i.d(t,"OpacityUpdater",(function(){return c}));var a=i(45);class c{constructor(o){this.container=o}async init(o){const t=o.options.opacity;o.opacity=Object(a.M)(t,1);const i=t.animation;i.enable&&(o.opacity.velocity=Object(a.H)(i.speed)/a.bb*this.container.retina.reduceFactor,i.sync||(o.opacity.velocity*=Object(a.F)())),await Promise.resolve()}isEnabled(o){var t,i,a,c;return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((null!==(t=o.opacity.maxLoops)&&void 0!==t?t:0)<=0||(null!==(i=o.opacity.maxLoops)&&void 0!==i?i:0)>0&&(null!==(a=o.opacity.loops)&&void 0!==a?a:0)<(null!==(c=o.opacity.maxLoops)&&void 0!==c?c:0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}async update(o,t){this.isEnabled(o)&&o.opacity&&(Object(a.jb)(o,o.opacity,!0,o.options.opacity.animation.destroy,t),await Promise.resolve())}}}}]);
//# sourceMappingURL=102.03857c0f.chunk.js.map