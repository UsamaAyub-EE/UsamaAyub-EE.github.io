(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[50],{350:function(o,t,i){"use strict";i.r(t),i.d(t,"Slower",(function(){return s}));var n=i(45),e=i(217);class s extends n.c{constructor(o){super(o)}clear(o,t,i){o.slow.inRange&&!i||(o.slow.factor=1)}init(){const o=this.container,t=o.actualOptions.interactivity.modes.slow;t&&(o.retina.slowModeRadius=t.radius*o.retina.pixelRatio)}async interact(){}isEnabled(o){var t;const i=this.container,e=i.interactivity.mouse,s=(null!==(t=null===o||void 0===o?void 0:o.interactivity)&&void 0!==t?t:i.actualOptions.interactivity).events;return s.onHover.enable&&!!e.position&&Object(n.P)("slow",s.onHover.mode)}loadModeOptions(o){o.slow||(o.slow=new e.a);for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(const e of i)o.slow.load(null===e||void 0===e?void 0:e.slow)}reset(o){o.slow.inRange=!1;const t=this.container,i=t.actualOptions,e=t.interactivity.mouse.position,s=t.retina.slowModeRadius,a=i.interactivity.modes.slow;if(!a||!s||s<0||!e)return;const r=o.getPosition(),c=Object(n.y)(e,r),l=c/s,u=a.factor,{slow:d}=o;c>s||(d.inRange=!0,d.factor=l/u)}}}}]);
//# sourceMappingURL=50.31166d02.chunk.js.map