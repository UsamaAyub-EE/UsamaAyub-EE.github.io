(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[28,55],{232:function(e,o,i){"use strict";i.r(o),i.d(o,"bounce",(function(){return n}));var t=i(45);const s=e=>{void 0===e.collisionMaxSpeed&&(e.collisionMaxSpeed=Object(t.H)(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function n(e,o){Object(t.n)(Object(t.o)(e),Object(t.o)(o)),s(e),s(o)}},353:function(e,o,i){"use strict";i.r(o),i.d(o,"destroy",(function(){return s}));var t=i(232);function s(e,o){if(e.unbreakable||o.unbreakable||Object(t.bounce)(e,o),void 0===e.getRadius()&&void 0!==o.getRadius())e.destroy();else if(void 0!==e.getRadius()&&void 0===o.getRadius())o.destroy();else if(void 0!==e.getRadius()&&void 0!==o.getRadius()){(e.getRadius()>=o.getRadius()?o:e).destroy()}}}}]);
//# sourceMappingURL=28.0e0459b5.chunk.js.map