(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[1],{198:function(i,t,n){"use strict";n.r(t),n.d(t,"applyDistance",(function(){return p})),n.d(t,"move",(function(){return y})),n.d(t,"spin",(function(){return u})),n.d(t,"applyPath",(function(){return v})),n.d(t,"getProximitySpeedFactor",(function(){return d})),n.d(t,"initSpin",(function(){return x}));var e=n(45);const o=.5,a=0,c=1,s=60,l=0,r=.01;function p(i){var t,n;const c=i.initialPosition,{dx:s,dy:l}=Object(e.z)(c,i.position),r=Math.abs(s),p=Math.abs(l),{maxDistance:y}=i.retina,u=y.horizontal,v=y.vertical;if(!u&&!v)return;const d=null!==(n=v&&p>=v)&&void 0!==n&&n;if(!(null!==(t=u&&r>=u)&&void 0!==t&&t)&&!d||i.misplaced){if((!u||r<u)&&(!v||p<v)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){const t=i.position,n=i.velocity;u&&(t.x<c.x&&n.x<a||t.x>c.x&&n.x>a)&&(n.x*=-Object(e.F)()),v&&(t.y<c.y&&n.y<a||t.y>c.y&&n.y>a)&&(n.y*=-Object(e.F)())}}else i.misplaced=!!u&&r>u||!!v&&p>v,u&&(i.velocity.x=i.velocity.y*o-i.velocity.x),v&&(i.velocity.y=i.velocity.x*o-i.velocity.y)}async function y(i,t,n,e,o,l){await v(i,l);const r=i.gravity,p=null!==r&&void 0!==r&&r.enable&&r.inverse?-c:c;o&&n&&(i.velocity.x+=o*l.factor/(s*n)),null!==r&&void 0!==r&&r.enable&&n&&(i.velocity.y+=p*(r.acceleration*l.factor)/(s*n));const y=i.moveDecay;i.velocity.multTo(y);const u=i.velocity.mult(n);null!==r&&void 0!==r&&r.enable&&e>a&&(!r.inverse&&u.y>=a&&u.y>=e||r.inverse&&u.y<=a&&u.y<=-e)&&(u.y=p*e,n&&(i.velocity.y=u.y/n));const d=i.options.zIndex,x=(c-i.zIndexFactor)**d.velocityRate;u.multTo(x);const{position:h}=i;h.addTo(u),t.vibrate&&(h.x+=Math.sin(h.x*Math.cos(h.y)),h.y+=Math.cos(h.y*Math.sin(h.x)))}function u(i,t){const n=i.container;if(!i.spin)return;const e={x:"clockwise"===i.spin.direction?Math.cos:Math.sin,y:"clockwise"===i.spin.direction?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*e.x(i.spin.angle),i.position.y=i.spin.center.y+i.spin.radius*e.y(i.spin.angle),i.spin.radius+=i.spin.acceleration;const a=Math.max(n.canvas.size.width,n.canvas.size.height),s=a*o;i.spin.radius>s?(i.spin.radius=s,i.spin.acceleration*=-c):i.spin.radius<l&&(i.spin.radius=l,i.spin.acceleration*=-c),i.spin.angle+=t*r*(c-i.spin.radius/a)}async function v(i,t){var n;const o=i.options.move.path;if(!o.enable)return;if(i.lastPathTime<=i.pathDelay)return void(i.lastPathTime+=t.value);const a=await(null===(n=i.pathGenerator)||void 0===n?void 0:n.generate(i,t));a&&i.velocity.addTo(a),o.clamp&&(i.velocity.x=Object(e.p)(i.velocity.x,-c,c),i.velocity.y=Object(e.p)(i.velocity.y,-c,c)),i.lastPathTime-=i.pathDelay}function d(i){return i.slow.inRange?i.slow.factor:c}function x(i){var t;const n=i.container,o=i.options.move.spin;if(!o.enable)return;const a=null!==(t=o.position)&&void 0!==t?t:{x:50,y:50},c={x:.01*a.x*n.canvas.size.width,y:.01*a.y*n.canvas.size.height},s=i.getPosition(),l=Object(e.y)(s,c),r=Object(e.H)(o.acceleration);i.retina.spinAcceleration=r*n.retina.pixelRatio;i.spin={center:c,direction:i.velocity.x>=0?"clockwise":"counter-clockwise",angle:i.velocity.angle,radius:l,acceleration:i.retina.spinAcceleration}}}}]);
//# sourceMappingURL=1.bf513456.chunk.js.map