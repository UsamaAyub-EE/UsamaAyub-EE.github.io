(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[72],{289:function(t,i,s){"use strict";s.r(i),s.d(i,"EmitterInstance",(function(){return r}));var e=s(45),o=s(222),n=s(226);function a(t,i){t.color?t.color.value=i:t.color={value:i}}class r{constructor(t,i,s,n,a){var r,h,l,c,p,d,u,_,v,m=this;this.emitters=i,this.container=s,this._destroy=()=>{var t,i;null===(t=this._mutationObserver)||void 0===t||t.disconnect(),this._mutationObserver=void 0,null===(i=this._resizeObserver)||void 0===i||i.disconnect(),this._resizeObserver=void 0,this.emitters.removeEmitter(this),this._engine.dispatchEvent("emitterDestroyed",{container:this.container,data:{emitter:this}})},this._prepareToDie=()=>{var t;if(this._paused)return;const i=void 0!==(null===(t=this.options.life)||void 0===t?void 0:t.duration)?Object(e.H)(this.options.life.duration):void 0;this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal)&&void 0!==i&&i>0&&(this._duration=i*e.Y)},this._setColorAnimation=function(t,i,s){var o;let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const a=m.container;if(!t.enable)return i;const r=Object(e.cb)(t.offset),h=Object(e.H)(m.options.rate.delay)*e.Y/a.retina.reduceFactor;return(i+Object(e.H)(null!==(o=t.speed)&&void 0!==o?o:0)*a.fpsLimit/h+r*n)%s},this._engine=t,this._currentDuration=0,this._currentEmitDelay=0,this._currentSpawnDelay=0,this._initialPosition=a,n instanceof o.Emitter?this.options=n:(this.options=new o.Emitter,this.options.load(n)),this._spawnDelay=Object(e.H)(null!==(r=this.options.life.delay)&&void 0!==r?r:0)*e.Y/this.container.retina.reduceFactor,this.position=null!==(h=this._initialPosition)&&void 0!==h?h:this._calcPosition(),this.name=this.options.name,this.fill=this.options.fill,this._firstSpawn=!this.options.life.wait,this._startParticlesAdded=!1;let y=Object(e.r)({},this.options.particles);if(null!==(l=y)&&void 0!==l||(y={}),null!==(p=(c=y).move)&&void 0!==p||(c.move={}),null!==(u=(d=y.move).direction)&&void 0!==u||(d.direction=this.options.direction),this.options.spawnColor&&(this.spawnColor=Object(e.db)(this.options.spawnColor)),this._paused=!this.options.autoPlay,this._particlesOptions=y,this._size=this._calcSize(),this.size=Object(e.I)(this._size,this.container.canvas.size),this._lifeCount=null!==(_=this.options.life.count)&&void 0!==_?_:-1,this._immortal=this._lifeCount<=0,this.options.domId){const t=document.getElementById(this.options.domId);t&&(this._mutationObserver=new MutationObserver((()=>{this.resize()})),this._resizeObserver=new ResizeObserver((()=>{this.resize()})),this._mutationObserver.observe(t,{attributes:!0,attributeFilter:["style","width","height"]}),this._resizeObserver.observe(t))}const f=this.options.shape,w=null===(v=this._engine.emitterShapeManager)||void 0===v?void 0:v.getShapeGenerator(f.type);w&&(this._shape=w.generate(this.position,this.size,this.fill,f.options)),this._engine.dispatchEvent("emitterCreated",{container:s,data:{emitter:this}}),this.play()}externalPause(){this._paused=!0,this.pause()}externalPlay(){this._paused=!1,this.play()}async init(){var t;await(null===(t=this._shape)||void 0===t?void 0:t.init())}pause(){this._paused||delete this._emitDelay}play(){var t;if(!this._paused&&this.container.retina.reduceFactor&&(this._lifeCount>0||this._immortal||!this.options.life.count)&&(this._firstSpawn||this._currentSpawnDelay>=(null!==(t=this._spawnDelay)&&void 0!==t?t:0))){if(void 0===this._emitDelay){const t=Object(e.H)(this.options.rate.delay);this._emitDelay=t*e.Y/this.container.retina.reduceFactor}(this._lifeCount>0||this._immortal)&&this._prepareToDie()}}resize(){var t;const i=this._initialPosition;this.position=i&&Object(e.S)(i,this.container.canvas.size,e.h.origin)?i:this._calcPosition(),this._size=this._calcSize(),this.size=Object(e.I)(this._size,this.container.canvas.size),null===(t=this._shape)||void 0===t||t.resize(this.position,this.size)}async update(t){if(!this._paused){var i,s;if(this._firstSpawn)this._firstSpawn=!1,this._currentSpawnDelay=null!==(i=this._spawnDelay)&&void 0!==i?i:0,this._currentEmitDelay=null!==(s=this._emitDelay)&&void 0!==s?s:0;if(this._startParticlesAdded||(this._startParticlesAdded=!0,await this._emitParticles(this.options.startCount)),void 0!==this._duration&&(this._currentDuration+=t.value,this._currentDuration>=this._duration)){var o,n;if(this.pause(),void 0!==this._spawnDelay&&delete this._spawnDelay,this._immortal||this._lifeCount--,this._lifeCount>0||this._immortal)this.position=this._calcPosition(),null===(o=this._shape)||void 0===o||o.resize(this.position,this.size),this._spawnDelay=Object(e.H)(null!==(n=this.options.life.delay)&&void 0!==n?n:0)*e.Y/this.container.retina.reduceFactor;else this._destroy();this._currentDuration-=this._duration,delete this._duration}void 0!==this._spawnDelay&&(this._currentSpawnDelay+=t.value,this._currentSpawnDelay>=this._spawnDelay&&(this._engine.dispatchEvent("emitterPlay",{container:this.container}),this.play(),this._currentSpawnDelay-=this._currentSpawnDelay,delete this._spawnDelay)),void 0!==this._emitDelay&&(this._currentEmitDelay+=t.value,this._currentEmitDelay>=this._emitDelay&&(await this._emit(),this._currentEmitDelay-=this._emitDelay))}}_calcPosition(){if(this.options.domId){const t=document.getElementById(this.options.domId);if(t){const i=t.getBoundingClientRect(),s=this.container.retina.pixelRatio;return{x:(i.x+.5*i.width)*s,y:(i.y+.5*i.height)*s}}}return Object(e.l)({size:this.container.canvas.size,position:this.options.position})}_calcSize(){var t;const i=this.container;if(this.options.domId){const t=document.getElementById(this.options.domId);if(t){const s=t.getBoundingClientRect();return{width:s.width*i.retina.pixelRatio,height:s.height*i.retina.pixelRatio,mode:"precise"}}}return null!==(t=this.options.size)&&void 0!==t?t:(()=>{const t=new n.a;return t.load({height:0,mode:"percent",width:0}),t})()}async _emit(){if(this._paused)return;const t=Object(e.H)(this.options.rate.quantity);await this._emitParticles(t)}async _emitParticles(t){const i=Object(e.V)(this._particlesOptions);for(let o=0;o<t;o++){const t=Object(e.r)({},i);if(this.spawnColor){var s;const i=null===(s=this.options.spawnColor)||void 0===s?void 0:s.animation;if(i){const t={h:360,s:100,l:100},s=3.6;this.spawnColor.h=this._setColorAnimation(i.h,this.spawnColor.h,t.h,s),this.spawnColor.s=this._setColorAnimation(i.s,this.spawnColor.s,t.s),this.spawnColor.l=this._setColorAnimation(i.l,this.spawnColor.l,t.l)}a(t,this.spawnColor)}const o=this.options.shape;let n=this.position;if(this._shape){const i=await this._shape.randomPosition();if(i){n=i.position;const s=o.replace;s.color&&i.color&&a(t,i.color),s.opacity&&(t.opacity?t.opacity.value=i.opacity:t.opacity={value:i.opacity})}else n=null}n&&await this.container.particles.addParticle(n,t)}}}}}]);
//# sourceMappingURL=72.8a5cd5ff.chunk.js.map