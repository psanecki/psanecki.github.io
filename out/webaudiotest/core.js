// Compiled by ClojureScript 0.0-2311
goog.provide('webaudiotest.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
webaudiotest.core.MAX_ITER = (10);
webaudiotest.core.looper = (function looper(){var chance = (new Chance(Math.random()));var e = ((function (chance){
return (function e(){return cljs.core.println.call(null,chance.bool(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"likehood","likehood",1219303714),(100)], null)));
});})(chance))
;
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (chance){
return (function (p1__4978_SHARP_){return setTimeout(e,(p1__4978_SHARP_ * (1000)));
});})(chance))
,cljs.core.range.call(null,(10))));
});
cljs.core.prn.call(null,cljs.core.type.call(null,cljs.core.into_array.call(null,Float32Array,cljs.core.repeatedly.call(null,(10),cljs.core.rand))));

//# sourceMappingURL=core.js.map