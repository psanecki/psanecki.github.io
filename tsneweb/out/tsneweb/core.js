// Compiled by ClojureScript 0.0-2311
goog.provide('tsneweb.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.prn.call(null,"hello");
tsneweb.core.cloud = (function cloud(){var scene = (new THREE.Scene());var width = window.innerWidth;var height = window.innerHeight;var renderer = (cljs.core.truth_(window.WebGLRenderingContext)?(new THREE.WebGLRenderer()):(new THREE.CanvasRenderer()));var camera = (new THREE.PerspectiveCamera((75),(width / height),0.1,(1000000)));var fpc = (new THREE.FirstPersonControls(camera));var clock = (new THREE.Clock());var material = (new THREE.LineBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"linewidth","linewidth",-131087360),1.2,new cljs.core.Keyword(null,"fog","fog",1515389980),true], null))));var render = ((function (scene,width,height,renderer,camera,fpc,clock,material){
return (function cb(){fpc.update(clock.getDelta());
requestAnimationFrame(cb);
return renderer.render(scene,camera);
});})(scene,width,height,renderer,camera,fpc,clock,material))
;var lens = cljs.core.vec.call(null,letter_lens);var coords = cljs.core.vec.call(null,letters);var red = cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (scene,width,height,renderer,camera,fpc,clock,material,render,lens,coords){
return (function (p1__4970_SHARP_){return ((3) * p1__4970_SHARP_);
});})(scene,width,height,renderer,camera,fpc,clock,material,render,lens,coords))
,lens));var group = (new THREE.Object3D());var n__4407__auto___4983 = cljs.core.count.call(null,red);var i_4984 = (0);while(true){
if((i_4984 < n__4407__auto___4983))
{var start_4985 = (((i_4984 === (0)))?i_4984:cljs.core.nth.call(null,red,(i_4984 - (1))));var end_4986 = cljs.core.nth.call(null,red,i_4984);var xyzs_4987 = cljs.core.partition.call(null,(3),cljs.core.subvec.call(null,coords,start_4985,end_4986));var geometry_4988 = (new THREE.Geometry());var line_4989 = (new THREE.Line(geometry_4988,material));var seq__4977_4990 = cljs.core.seq.call(null,xyzs_4987);var chunk__4978_4991 = null;var count__4979_4992 = (0);var i__4980_4993 = (0);while(true){
if((i__4980_4993 < count__4979_4992))
{var xyz_4994 = cljs.core._nth.call(null,chunk__4978_4991,i__4980_4993);var vec__4981_4995 = xyz_4994;var x_4996 = cljs.core.nth.call(null,vec__4981_4995,(0),null);var y_4997 = cljs.core.nth.call(null,vec__4981_4995,(1),null);var z_4998 = cljs.core.nth.call(null,vec__4981_4995,(2),null);geometry_4988.vertices.push((new THREE.Vector3(x_4996,((-1) * y_4997),z_4998)));
{
var G__4999 = seq__4977_4990;
var G__5000 = chunk__4978_4991;
var G__5001 = count__4979_4992;
var G__5002 = (i__4980_4993 + (1));
seq__4977_4990 = G__4999;
chunk__4978_4991 = G__5000;
count__4979_4992 = G__5001;
i__4980_4993 = G__5002;
continue;
}
} else
{var temp__4126__auto___5003 = cljs.core.seq.call(null,seq__4977_4990);if(temp__4126__auto___5003)
{var seq__4977_5004__$1 = temp__4126__auto___5003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4977_5004__$1))
{var c__4307__auto___5005 = cljs.core.chunk_first.call(null,seq__4977_5004__$1);{
var G__5006 = cljs.core.chunk_rest.call(null,seq__4977_5004__$1);
var G__5007 = c__4307__auto___5005;
var G__5008 = cljs.core.count.call(null,c__4307__auto___5005);
var G__5009 = (0);
seq__4977_4990 = G__5006;
chunk__4978_4991 = G__5007;
count__4979_4992 = G__5008;
i__4980_4993 = G__5009;
continue;
}
} else
{var xyz_5010 = cljs.core.first.call(null,seq__4977_5004__$1);var vec__4982_5011 = xyz_5010;var x_5012 = cljs.core.nth.call(null,vec__4982_5011,(0),null);var y_5013 = cljs.core.nth.call(null,vec__4982_5011,(1),null);var z_5014 = cljs.core.nth.call(null,vec__4982_5011,(2),null);geometry_4988.vertices.push((new THREE.Vector3(x_5012,((-1) * y_5013),z_5014)));
{
var G__5015 = cljs.core.next.call(null,seq__4977_5004__$1);
var G__5016 = null;
var G__5017 = (0);
var G__5018 = (0);
seq__4977_4990 = G__5015;
chunk__4978_4991 = G__5016;
count__4979_4992 = G__5017;
i__4980_4993 = G__5018;
continue;
}
}
} else
{}
}
break;
}
group.add(line_4989);
{
var G__5019 = (i_4984 + (1));
i_4984 = G__5019;
continue;
}
} else
{}
break;
}
scene.add(group);
scene.fog = (new THREE.Fog((16777215),0.015,(1500)));
renderer.setClearColor((16777215),(1));
fpc.lookSpeed = 0.1;
fpc.movementSpeed = (100);
fpc.noFly = false;
fpc.lookVertical = true;
fpc.constrainVertical = true;
fpc.verticalMin = (1);
fpc.verticalMax = (2);
fpc.lon = (0);
fpc.lat = (0);
renderer.setSize(width,height);
document.body.appendChild(renderer.domElement);
return render.call(null);
});
goog.exportSymbol('tsneweb.core.cloud', tsneweb.core.cloud);
tsneweb.core.cloud.call(null);

//# sourceMappingURL=core.js.map