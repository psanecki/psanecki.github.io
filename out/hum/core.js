// Compiled by ClojureScript 0.0-2311
goog.provide('hum.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
hum.core.get_osc_type = (function get_osc_type(osc,type){var pred__8333 = cljs.core._EQ_;var expr__8334 = type;if(cljs.core.truth_(pred__8333.call(null,new cljs.core.Keyword(null,"sawtooth","sawtooth",1033236133),expr__8334)))
{return osc.SAWTOOTH;
} else
{if(cljs.core.truth_(pred__8333.call(null,new cljs.core.Keyword(null,"sine","sine",-619916490),expr__8334)))
{return osc.SINE;
} else
{if(cljs.core.truth_(pred__8333.call(null,new cljs.core.Keyword(null,"square","square",812434677),expr__8334)))
{return osc.SQUARE;
} else
{if(cljs.core.truth_(pred__8333.call(null,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),expr__8334)))
{return osc.TRIANGLE;
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8334))));
}
}
}
}
});
hum.core.create_context = (function create_context(){var constructor = (function (){var or__3551__auto__ = window.AudioContext;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return window.webkitAudioContext;
}
})();return (new constructor());
});
hum.core.create_osc = (function() {
var create_osc = null;
var create_osc__1 = (function (ctx){return ctx.createOscillator();
});
var create_osc__2 = (function (ctx,type){var osc = ctx.createOscillator();var osc_type = hum.core.get_osc_type.call(null,osc,type);osc.type = osc_type;
return osc;
});
create_osc = function(ctx,type){
switch(arguments.length){
case 1:
return create_osc__1.call(this,ctx);
case 2:
return create_osc__2.call(this,ctx,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_osc.cljs$core$IFn$_invoke$arity$1 = create_osc__1;
create_osc.cljs$core$IFn$_invoke$arity$2 = create_osc__2;
return create_osc;
})()
;
hum.core.connect = (function connect(from,to){from.connect(to);
return from;
});
hum.core.__GT_node = (function __GT_node(from,to){return hum.core.connect.call(null,from,to);
});
hum.core.curr_time = (function curr_time(ctx){return ctx.currentTime;
});
hum.core.now = (function now(){return (new Date()).getTime();
});
hum.core.__GT_destination = (function __GT_destination(node){return node.connect(node.context.destination);
});
hum.core.fill_with_noise_BANG_ = (function fill_with_noise_BANG_(buffer){var channel_data = buffer.getChannelData((0));var n__4407__auto__ = channel_data.length;var i = (0);while(true){
if((i < n__4407__auto__))
{(channel_data[i] = ((Math.random.call(null) * (2)) - (1)));
{
var G__8336 = (i + (1));
i = G__8336;
continue;
}
} else
{return null;
}
break;
}
});
hum.core.fill_with_constant_BANG_ = (function fill_with_constant_BANG_(buffer,value){var channel_data = buffer.getChannelData((0));var n__4407__auto__ = channel_data.length;var i = (0);while(true){
if((i < n__4407__auto__))
{(channel_data[i] = value);
{
var G__8337 = (i + (1));
i = G__8337;
continue;
}
} else
{return null;
}
break;
}
});
hum.core.set_noise_rate_BANG_ = (function set_noise_rate_BANG_(lf_noise_node,sample_rate){return lf_noise_node.playbackRate.value = (sample_rate / lf_noise_node.context.sampleRate);
});
hum.core.Noise = (function (){var obj8339 = {};return obj8339;
})();
hum.core.noise = (function noise(ac){if((function (){var and__3539__auto__ = ac;if(and__3539__auto__)
{return ac.hum$core$Noise$noise$arity$1;
} else
{return and__3539__auto__;
}
})())
{return ac.hum$core$Noise$noise$arity$1(ac);
} else
{var x__4178__auto__ = (((ac == null))?null:ac);return (function (){var or__3551__auto__ = (hum.core.noise[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (hum.core.noise["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Noise.noise",ac);
}
}
})().call(null,ac);
}
});
hum.core.lf_noise = (function lf_noise(ac){if((function (){var and__3539__auto__ = ac;if(and__3539__auto__)
{return ac.hum$core$Noise$lf_noise$arity$1;
} else
{return and__3539__auto__;
}
})())
{return ac.hum$core$Noise$lf_noise$arity$1(ac);
} else
{var x__4178__auto__ = (((ac == null))?null:ac);return (function (){var or__3551__auto__ = (hum.core.lf_noise[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (hum.core.lf_noise["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Noise.lf-noise",ac);
}
}
})().call(null,ac);
}
});
hum.core.AudioOps = (function (){var obj8341 = {};return obj8341;
})();
hum.core.binary = (function binary(ac,binary_op){if((function (){var and__3539__auto__ = ac;if(and__3539__auto__)
{return ac.hum$core$AudioOps$binary$arity$2;
} else
{return and__3539__auto__;
}
})())
{return ac.hum$core$AudioOps$binary$arity$2(ac,binary_op);
} else
{var x__4178__auto__ = (((ac == null))?null:ac);return (function (){var or__3551__auto__ = (hum.core.binary[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (hum.core.binary["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AudioOps.binary",ac);
}
}
})().call(null,ac,binary_op);
}
});
hum.core.plus = (function plus(ac){if((function (){var and__3539__auto__ = ac;if(and__3539__auto__)
{return ac.hum$core$AudioOps$plus$arity$1;
} else
{return and__3539__auto__;
}
})())
{return ac.hum$core$AudioOps$plus$arity$1(ac);
} else
{var x__4178__auto__ = (((ac == null))?null:ac);return (function (){var or__3551__auto__ = (hum.core.plus[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (hum.core.plus["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AudioOps.plus",ac);
}
}
})().call(null,ac);
}
});
hum.core.mult = (function mult(ac){if((function (){var and__3539__auto__ = ac;if(and__3539__auto__)
{return ac.hum$core$AudioOps$mult$arity$1;
} else
{return and__3539__auto__;
}
})())
{return ac.hum$core$AudioOps$mult$arity$1(ac);
} else
{var x__4178__auto__ = (((ac == null))?null:ac);return (function (){var or__3551__auto__ = (hum.core.mult[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (hum.core.mult["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AudioOps.mult",ac);
}
}
})().call(null,ac);
}
});
hum.core.constant = (function constant(ac,value){if((function (){var and__3539__auto__ = ac;if(and__3539__auto__)
{return ac.hum$core$AudioOps$constant$arity$2;
} else
{return and__3539__auto__;
}
})())
{return ac.hum$core$AudioOps$constant$arity$2(ac,value);
} else
{var x__4178__auto__ = (((ac == null))?null:ac);return (function (){var or__3551__auto__ = (hum.core.constant[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (hum.core.constant["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AudioOps.constant",ac);
}
}
})().call(null,ac,value);
}
});
window.AudioContext.prototype.hum$core$AudioOps$ = true;
window.AudioContext.prototype.hum$core$AudioOps$binary$arity$2 = (function (ac,binary_op){var ac__$1 = this;var script_processor = ac__$1.createScriptProcessor((0),(2),(1));script_processor.onaudioprocess = ((function (script_processor,ac__$1){
return (function (e){var input_0 = e.inputBuffer.getChannelData((0));var input_1 = e.inputBuffer.getChannelData((1));var output = e.outputBuffer.getChannelData((0));var n__4407__auto__ = script_processor.bufferSize;var i = (0);while(true){
if((i < n__4407__auto__))
{(output[i] = binary_op.call(null,(input_0[i]),(input_1[i])));
{
var G__8342 = (i + (1));
i = G__8342;
continue;
}
} else
{return null;
}
break;
}
});})(script_processor,ac__$1))
;
return script_processor;
});
window.AudioContext.prototype.hum$core$AudioOps$plus$arity$1 = (function (ac){var ac__$1 = this;return hum.core.binary.call(null,ac__$1,cljs.core._PLUS_);
});
window.AudioContext.prototype.hum$core$AudioOps$mult$arity$1 = (function (ac){var ac__$1 = this;return hum.core.binary.call(null,ac__$1,cljs.core._STAR_);
});
window.AudioContext.prototype.hum$core$AudioOps$constant$arity$2 = (function (ac,value){var ac__$1 = this;var buffer_size = ((2) * ac__$1.sampleRate);var buffer = ac__$1.createBuffer((1),buffer_size,ac__$1.sampleRate);var constant_node = ac__$1.createBufferSource();hum.core.fill_with_constant_BANG_.call(null,buffer,value);
constant_node.buffer = buffer;
constant_node.start();
constant_node.loop = true;
return constant_node;
});
window.AudioContext.prototype.hum$core$Noise$ = true;
window.AudioContext.prototype.hum$core$Noise$noise$arity$1 = (function (ac){var ac__$1 = this;var buffer_size = (4096);var script_processor = ac__$1.createScriptProcessor(buffer_size,(1),(1));script_processor.onaudioprocess = ((function (buffer_size,script_processor,ac__$1){
return (function (e){var output = e.outputBuffer.getChannelData((0));var n__4407__auto__ = buffer_size;var i = (0);while(true){
if((i < n__4407__auto__))
{(output[i] = ((Math.random.call(null) * (2)) - (1)));
{
var G__8343 = (i + (1));
i = G__8343;
continue;
}
} else
{return null;
}
break;
}
});})(buffer_size,script_processor,ac__$1))
;
return script_processor;
});
window.AudioContext.prototype.hum$core$Noise$lf_noise$arity$1 = (function (ac){var ac__$1 = this;var buffer_size = ((2) * ac__$1.sampleRate);var noise_buffer = ac__$1.createBuffer((1),buffer_size,ac__$1.sampleRate);var lf_noise_node = ac__$1.createBufferSource();hum.core.fill_with_noise_BANG_.call(null,noise_buffer);
lf_noise_node.buffer = noise_buffer;
lf_noise_node.start();
lf_noise_node.loop = true;
return lf_noise_node;
});
hum.core.plus_BANG_ = (function plus_BANG_(node_0,node_1){var ac = node_0.context;var merger = ac.createChannelMerger((2));var p = hum.core.plus.call(null,ac);node_0.connect(merger,(0),(0));
node_1.connect(merger,(0),(1));
merger.connect(p);
return p;
});
hum.core.mult_BANG_ = (function mult_BANG_(node_0,node_1){var ac = node_0.context;var merger = ac.createChannelMerger((2));var p = hum.core.mult.call(null,ac);node_0.connect(merger,(0),(0));
node_1.connect(merger,(0),(1));
merger.connect(p);
return p;
});
cljs.core.prn.call(null,"hum.core");
hum.core.ac = hum.core.create_context.call(null);
hum.core.white_noise = hum.core.noise.call(null,hum.core.ac);
cljs.core.prn.call(null,hum.core.now.call(null));
hum.core.const_110 = hum.core.constant.call(null,hum.core.ac,(550));
hum.core.osc_0 = hum.core.create_osc.call(null,hum.core.ac);
hum.core.osc_0.start();
hum.core.osc_0.frequency.value = (3);
hum.core.osc_0.oscilatorType = (1);
hum.core.osc_1 = hum.core.create_osc.call(null,hum.core.ac);
hum.core.osc_1.start();
hum.core.osc_1.frequency.value = (0);
hum.core.lf_noise_1 = hum.core.lf_noise.call(null,hum.core.ac);
hum.core.set_noise_rate_BANG_.call(null,hum.core.lf_noise_1,(140));
hum.core.lf_noise_0 = hum.core.lf_noise.call(null,hum.core.ac);
hum.core.set_noise_rate_BANG_.call(null,hum.core.lf_noise_0,(1001));
hum.core.x = hum.core.mult_BANG_.call(null,hum.core.lf_noise_0,hum.core.mult_BANG_.call(null,hum.core.osc_0,hum.core.mult_BANG_.call(null,hum.core.constant.call(null,hum.core.ac,(1055)),hum.core.lf_noise_1)));
hum.core.x.connect(hum.core.osc_1.frequency);
hum.core.__GT_destination.call(null,hum.core.x);
setTimeout((function (){return hum.core.x.disconnect();
}),(100000));
hum.core.i = setInterval((function (){return cljs.core.prn.call(null,hum.core.curr_time.call(null,hum.core.ac));
}),(1000));
clearInterval(hum.core.i);
cljs.core.prn.call(null,cljs.core._EQ_.call(null,cljs.core.type.call(null,hum.core.lf_noise),AudioBufferSourceNode));

//# sourceMappingURL=core.js.map