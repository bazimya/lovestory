"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(t){if("function"==typeof define&&define.amd)define(["jquery"],t);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var e;try{e=require("jquery")}catch(t){e=null}module.exports=t(e)}else window&&(window.Slider=t(window.jQuery))}(function(t){var e,o="slider",n="bootstrapSlider";return windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){}),function(t){var c=Array.prototype.slice;function e(){}!function(d){if(d){var p="undefined"==typeof console?e:function(t){console.error(t)};d.bridget=function(t,e){var i,l,r;(i=e).prototype.option||(i.prototype.option=function(t){d.isPlainObject(t)&&(this.options=d.extend(!0,this.options,t))}),l=t,r=e,d.fn[l]=function(e){if("string"==typeof e){for(var t=c.call(arguments,1),i=0,s=this.length;i<s;i++){var o=this[i],n=d.data(o,l);if(n)if(d.isFunction(n[e])&&"_"!==e.charAt(0)){var a=n[e].apply(n,t);if(void 0!==a&&a!==n)return a}else p("no such method '"+e+"' for "+l+" instance");else p("cannot call methods on "+l+" prior to initialization; attempted to call '"+e+"'")}return this}var h=this.map(function(){var t=d.data(this,l);return t?(t.option(e),t._init()):(t=new r(this,e),d.data(this,l,t)),d(this)});return!h||1<h.length?h:h[0]}},d.bridget}}(t)}(t),function(R){var s=function(t){return"Invalid input value '"+t+"' passed in"},I={linear:{toValue:function(t){var e=t/100*(this.options.max-this.options.min),i=!0;if(0<this.options.ticks_positions.length){for(var s,o,n,a=0,h=1;h<this.options.ticks_positions.length;h++)if(t<=this.options.ticks_positions[h]){s=this.options.ticks[h-1],n=this.options.ticks_positions[h-1],o=this.options.ticks[h],a=this.options.ticks_positions[h];break}e=s+(t-n)/(a-n)*(o-s),i=!1}var l=(i?this.options.min:0)+Math.round(e/this.options.step)*this.options.step;return l<this.options.min?this.options.min:l>this.options.max?this.options.max:l},toPercentage:function(t){if(this.options.max===this.options.min)return 0;if(0<this.options.ticks_positions.length){for(var e,i,s,o=0,n=0;n<this.options.ticks.length;n++)if(t<=this.options.ticks[n]){e=0<n?this.options.ticks[n-1]:0,s=0<n?this.options.ticks_positions[n-1]:0,i=this.options.ticks[n],o=this.options.ticks_positions[n];break}if(0<n)return s+(t-e)/(i-e)*(o-s)}return 100*(t-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(t){var e=0===this.options.min?0:Math.log(this.options.min),i=Math.log(this.options.max),s=Math.exp(e+(i-e)*t/100);return Math.round(s)===this.options.max?this.options.max:(s=this.options.min+Math.round((s-this.options.min)/this.options.step)*this.options.step)<this.options.min?this.options.min:s>this.options.max?this.options.max:s},toPercentage:function(t){if(this.options.max===this.options.min)return 0;var e=Math.log(this.options.max),i=0===this.options.min?0:Math.log(this.options.min);return 100*((0===t?0:Math.log(t))-i)/(e-i)}}};function i(t,e){this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof t?this.element=document.querySelector(t):t instanceof HTMLElement&&(this.element=t),e=e||{};for(var i=Object.keys(this.defaultOptions),s=0;s<i.length;s++){var o=i[s],n=e[o];n=null!==(n=void 0!==n?n:a(this.element,o))?n:this.defaultOptions[o],this.options||(this.options={}),this.options[o]=n}function a(t,e){var i="data-slider-"+e.replace(/_/g,"-"),s=t.getAttribute(i);try{return JSON.parse(s)}catch(t){return s}}"auto"===this.options.rtl&&(this.options.rtl="rtl"===window.getComputedStyle(this.element).direction),"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.rtl?this.options.tooltip_position="left":this.options.tooltip_position="right";var h,l,r,d,p,c=this.element.style.width,u=!1,m=this.element.parentNode;if(this.sliderElem)u=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var v=document.createElement("div");v.className="slider-track",(l=document.createElement("div")).className="slider-track-low",(h=document.createElement("div")).className="slider-selection",(r=document.createElement("div")).className="slider-track-high",(d=document.createElement("div")).className="slider-handle min-slider-handle",d.setAttribute("role","slider"),d.setAttribute("aria-valuemin",this.options.min),d.setAttribute("aria-valuemax",this.options.max),(p=document.createElement("div")).className="slider-handle max-slider-handle",p.setAttribute("role","slider"),p.setAttribute("aria-valuemin",this.options.min),p.setAttribute("aria-valuemax",this.options.max),v.appendChild(l),v.appendChild(h),v.appendChild(r),this.rangeHighlightElements=[];var _=this.options.rangeHighlights;if(Array.isArray(_)&&0<_.length)for(var f=0;f<_.length;f++){var g=document.createElement("div"),y=_[f].class||"";g.className="slider-rangeHighlight slider-selection "+y,this.rangeHighlightElements.push(g),v.appendChild(g)}var b=Array.isArray(this.options.labelledby);if(b&&this.options.labelledby[0]&&d.setAttribute("aria-labelledby",this.options.labelledby[0]),b&&this.options.labelledby[1]&&p.setAttribute("aria-labelledby",this.options.labelledby[1]),!b&&this.options.labelledby&&(d.setAttribute("aria-labelledby",this.options.labelledby),p.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&0<this.options.ticks.length){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",s=0;s<this.options.ticks.length;s++){var k=document.createElement("div");if(k.className="slider-tick",this.options.ticks_tooltip){var E=this._addTickListener(),C=E.addMouseEnter(this,k,s),w=E.addMouseLeave(this,k);this.ticksCallbackMap[s]={mouseEnter:C,mouseLeave:w}}this.ticks.push(k),this.ticksContainer.appendChild(k)}h.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&0<this.options.ticks_labels.length)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",s=0;s<this.options.ticks_labels.length;s++){var x=document.createElement("div"),L=0===this.options.ticks_positions.length,P=this.options.reversed&&L?this.options.ticks_labels.length-(s+1):s;x.className="slider-tick-label",x.innerHTML=this.options.ticks_labels[P],this.tickLabels.push(x),this.tickLabelContainer.appendChild(x)}var T=function(t){var e=document.createElement("div");e.className="tooltip-arrow";var i=document.createElement("div");i.className="tooltip-inner",t.appendChild(e),t.appendChild(i)},M=document.createElement("div");M.className="tooltip tooltip-main",M.setAttribute("role","presentation"),T(M);var A=document.createElement("div");A.className="tooltip tooltip-min",A.setAttribute("role","presentation"),T(A);var H=document.createElement("div");H.className="tooltip tooltip-max",H.setAttribute("role","presentation"),T(H),this.sliderElem.appendChild(v),this.sliderElem.appendChild(M),this.sliderElem.appendChild(A),this.sliderElem.appendChild(H),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(d),this.sliderElem.appendChild(p),m.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(R&&(this.$element=R(this.element),this.$sliderElem=R(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),I[this.options.scale]&&(this.options.scale=I[this.options.scale]),!0===u&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(t){this._removeProperty(this.trackLow,t),this._removeProperty(this.trackSelection,t),this._removeProperty(this.trackHigh,t)},this),[this.handle1,this.handle2].forEach(function(t){this._removeProperty(t,"left"),this._removeProperty(t,"right"),this._removeProperty(t,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(t){this._removeProperty(t,"left"),this._removeProperty(t,"right"),this._removeProperty(t,"top"),this._removeClass(t,"right"),this._removeClass(t,"left"),this._removeClass(t,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=c,this.options.orientation="horizontal",this.options.rtl?this.stylePos="right":this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&0<this.options.ticks.length&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=l||this.trackLow,this.trackSelection=h||this.trackSelection,this.trackHigh=r||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):"after"!==this.options.selection&&"before"!==this.options.selection||(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=d||this.handle1,this.handle2=p||this.handle2,!0===u)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),s=0;s<this.ticks.length;s++)this._removeClass(this.ticks[s],"round triangle hide");if(-1!==["round","triangle","custom"].indexOf(this.options.handle))for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),s=0;s<this.ticks.length;s++)this._addClass(this.ticks[s],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable){var N=!1;try{var S=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,S)}catch(t){}var z=!!N&&{passive:!0};this.sliderElem.addEventListener("touchstart",this.touchstart,z),this.sliderElem.addEventListener("touchmove",this.touchmove,z)}if(this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var V=this._addTickListener(),D=V.addMouseEnter(this,this.handle1),F=V.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:D,mouseLeave:F},D=V.addMouseEnter(this,this.handle2),F=V.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:D,mouseLeave:F}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1);this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)}this.options.enabled?this.enable():this.disable()}if((e=function(t,e){return i.call(this,t,e),this}).prototype={_init:function(){},constructor:e,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(t){return Array.isArray(t)?t[0]+" : "+t[1]:t},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(t,e,i){t||(t=0);var s=this.getValue();this._state.value=this._validateInputValue(t);var o=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=o(this._state.value[0]),this._state.value[1]=o(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=o(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var n=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(n),!0===e&&this._trigger("slide",n),s!==n&&!0===i&&this._trigger("change",{oldValue:s,newValue:n}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),R&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(t,e){return this._bindNonQueryEventHandler(t,e),this},off:function(t,e){R?(this.$element.off(t,e),this.$sliderElem.off(t,e)):this._unbindNonQueryEventHandler(t,e)},getAttribute:function(t){return t?this.options[t]:this.options},setAttribute:function(t,e){return this.options[t]=e,this},refresh:function(){return this._removeSliderEventHandlers(),i.call(this,this.element,this.options),R&&R.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var t=this.ticksContainer.getElementsByClassName("slider-tick"),e=0;e<t.length;e++)t[e].removeEventListener("mouseenter",this.ticksCallbackMap[e].mouseEnter,!1),t[e].removeEventListener("mouseleave",this.ticksCallbackMap[e].mouseLeave,!1);this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1)}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(t,e){void 0===this.eventToCallbackMap[t]&&(this.eventToCallbackMap[t]=[]),this.eventToCallbackMap[t].push(e)},_unbindNonQueryEventHandler:function(t,e){var i=this.eventToCallbackMap[t];if(void 0!==i)for(var s=0;s<i.length;s++)if(i[s]===e){i.splice(s,1);break}},_cleanUpEventCallbacksMap:function(){for(var t=Object.keys(this.eventToCallbackMap),e=0;e<t.length;e++){var i=t[e];delete this.eventToCallbackMap[i]}},_showTooltip:function(){!1===this.options.tooltip_split?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){!1===this._state.inDrag&&!0!==this.alwaysShowTooltip&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_setToolTipOnMouseOver:function(t){var e=this.options.formatter(t?t.value[0]:this._state.value[0]),i=s(t||this._state,this.options.reversed);function s(t,e){return e?[100-t.percentage[0],this.options.range?100-t.percentage[1]:t.percentage[1]]:[t.percentage[0],t.percentage[1]]}this._setText(this.tooltipInner,e),this.tooltip.style[this.stylePos]=i[0]+"%"},_addTickListener:function(){return{addMouseEnter:function(s,t,o){var e=function(){var t=s._state,e=0<=o?o:this.attributes["aria-valuenow"].value,i=parseInt(e,10);t.value[0]=i,t.percentage[0]=s.options.ticks_positions[i],s._setToolTipOnMouseOver(t),s._showTooltip()};return t.addEventListener("mouseenter",e,!1),e},addMouseLeave:function(t,e){var i=function(){t._hideTooltip()};return e.addEventListener("mouseleave",i,!1),i}}},_layout:function(){var t,e;if(t=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=t[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),isNaN(this.options.formatter(this._state.value[0]))&&this.handle1.setAttribute("aria-valuetext",this.options.formatter(this._state.value[0])),this.handle2.style[this.stylePos]=t[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),isNaN(this.options.formatter(this._state.value[1]))&&this.handle2.setAttribute("aria-valuetext",this.options.formatter(this._state.value[1])),0<this.rangeHighlightElements.length&&Array.isArray(this.options.rangeHighlights)&&0<this.options.rangeHighlights.length)for(var i=0;i<this.options.rangeHighlights.length;i++){var s=this._toPercentage(this.options.rangeHighlights[i].start),o=this._toPercentage(this.options.rangeHighlights[i].end);if(this.options.reversed){var n=100-o;o=100-s,s=n}var a=this._createHighlightRange(s,o);a?"vertical"===this.options.orientation?(this.rangeHighlightElements[i].style.top=a.start+"%",this.rangeHighlightElements[i].style.height=a.size+"%"):(this.options.rtl?this.rangeHighlightElements[i].style.right=a.start+"%":this.rangeHighlightElements[i].style.left=a.start+"%",this.rangeHighlightElements[i].style.width=a.size+"%"):this.rangeHighlightElements[i].style.display="none"}if(Array.isArray(this.options.ticks)&&0<this.options.ticks.length){var h,l="vertical"===this.options.orientation?"height":"width";h="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var r=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var d=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[h]=-r/2+"px"),d=this.tickLabelContainer.offsetHeight;else for(p=0;p<this.tickLabelContainer.childNodes.length;p++)this.tickLabelContainer.childNodes[p].offsetHeight>d&&(d=this.tickLabelContainer.childNodes[p].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=d+"px")}for(var p=0;p<this.options.ticks.length;p++){var c=this.options.ticks_positions[p]||this._toPercentage(this.options.ticks[p]);this.options.reversed&&(c=100-c),this.ticks[p].style[this.stylePos]=c+"%",this._removeClass(this.ticks[p],"in-selection"),this.options.range?c>=t[0]&&c<=t[1]&&this._addClass(this.ticks[p],"in-selection"):"after"===this.options.selection&&c>=t[0]?this._addClass(this.ticks[p],"in-selection"):"before"===this.options.selection&&c<=t[0]&&this._addClass(this.ticks[p],"in-selection"),this.tickLabels[p]&&(this.tickLabels[p].style[l]=r+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[p]?(this.tickLabels[p].style.position="absolute",this.tickLabels[p].style[this.stylePos]=c+"%",this.tickLabels[p].style[h]=-r/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[p].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[p].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[h]=this.sliderElem.offsetWidth/2*-1+"px"))}}if(this.options.range){e=this.options.formatter(this._state.value),this._setText(this.tooltipInner,e),this.tooltip.style[this.stylePos]=(t[1]+t[0])/2+"%";var u=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,u);var m=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,m),this.tooltip_min.style[this.stylePos]=t[0]+"%",this.tooltip_max.style[this.stylePos]=t[1]+"%"}else e=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,e),this.tooltip.style[this.stylePos]=t[0]+"%";if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(t[0],t[1])+"%",this.trackSelection.style.top=Math.min(t[0],t[1])+"%",this.trackSelection.style.height=Math.abs(t[0]-t[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(t[0],t[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(t[0],t[1])+"%":this.trackSelection.style.left=Math.min(t[0],t[1])+"%",this.trackSelection.style.width=Math.abs(t[0]-t[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";var v=this.tooltip_min.getBoundingClientRect(),_=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?v.right>_.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):v.right>_.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(t,e){return this._isHighlightRange(t,e)?e<t?{start:e,size:t-e}:{start:t,size:e-t}:null},_isHighlightRange:function(t,e){return 0<=t&&t<=100&&0<=e&&e<=100},_resize:function(t){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(t,e){t.style.removeProperty?t.style.removeProperty(e):t.style.removeAttribute(e)},_mousedown:function(t){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var e=this._getPercentage(t);if(this.options.range){var i=Math.abs(this._state.percentage[0]-e),s=Math.abs(this._state.percentage[1]-e);this._state.dragged=i<s?0:1,this._adjustPercentageForRangeSliders(e)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=e,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var o=this._calculateValue();return this._trigger("slideStart",o),this._setDataVal(o),this.setValue(o,!1,!0),t.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(t){if(void 0!==t.changedTouches){var e=t.changedTouches[0];this.touchX=e.pageX,this.touchY=e.pageY}else this._mousedown(t)},_triggerFocusOnHandle:function(t){0===t&&this.handle1.focus(),1===t&&this.handle2.focus()},_keydown:function(t,e){if(!this._state.enabled)return!1;var i;switch(e.keyCode){case 37:case 40:i=-1;break;case 39:case 38:i=1}if(i){if(this.options.natural_arrow_keys){var s="vertical"===this.options.orientation&&!this.options.reversed,o="horizontal"===this.options.orientation&&this.options.reversed;(s||o)&&(i=-i)}var n=this._state.value[t]+i*this.options.step,a=n/this.options.max*100;if(this._state.keyCtrl=t,this.options.range)this._adjustPercentageForRangeSliders(a),n=[this._state.keyCtrl?this._state.value[0]:n,this._state.keyCtrl?n:this._state.value[1]];return this._trigger("slideStart",n),this._setDataVal(n),this.setValue(n,!0,!0),this._setDataVal(n),this._trigger("slideStop",n),this._layout(),this._pauseEvent(e),delete this._state.keyCtrl,!1}},_pauseEvent:function(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1},_mousemove:function(t){if(!this._state.enabled)return!1;var e=this._getPercentage(t);this._adjustPercentageForRangeSliders(e),this._state.percentage[this._state.dragged]=e,this._layout();var i=this._calculateValue(!0);return this.setValue(i,!0,!0),!1},_touchmove:function(t){if(void 0!==t.changedTouches){var e=t.changedTouches[0],i=e.pageX-this.touchX,s=e.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&i<=5&&-5<=i&&(15<=s||s<=-15)?this._mousedown(t):s<=5&&-5<=s&&(15<=i||i<=-15)&&this._mousedown(t))}},_adjustPercentageForRangeSliders:function(t){if(this.options.range){var e=this._getNumDigitsAfterDecimalPlace(t);e=e?e-1:0;var i=this._applyToFixedAndParseFloat(t,e);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],e)<i?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],e)>i?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._state.value[1]/this.options.max*100<t?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._state.value[0]/this.options.max*100>t&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),(this._state.inDrag=!1)===this._state.over&&this._hideTooltip();var t=this._calculateValue(!0);return this._layout(),this._setDataVal(t),this._trigger("slideStop",t),!1},_calculateValue:function(t){var e;if(this.options.range?(e=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(e[0]=this._toValue(this._state.percentage[0]),e[0]=this._applyPrecision(e[0])),100!==this._state.percentage[1]&&(e[1]=this._toValue(this._state.percentage[1]),e[1]=this._applyPrecision(e[1]))):(e=this._toValue(this._state.percentage[0]),e=parseFloat(e),e=this._applyPrecision(e)),t){for(var i=[e,1/0],s=0;s<this.options.ticks.length;s++){var o=Math.abs(this.options.ticks[s]-e);o<=i[1]&&(i=[this.options.ticks[s],o])}if(i[1]<=this.options.ticks_snap_bounds)return i[0]}return e},_applyPrecision:function(t){var e=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(t,e)},_getNumDigitsAfterDecimalPlace:function(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0},_applyToFixedAndParseFloat:function(t,e){var i=t.toFixed(e);return parseFloat(i)},_getPercentage:function(t){!this.touchCapable||"touchstart"!==t.type&&"touchmove"!==t.type||(t=t.touches[0]);var e=t[this.mousePos]-this._state.offset[this.stylePos];"right"===this.stylePos&&(e=-e);var i=e/this._state.size*100;return i=Math.round(i/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(i=100-i),Math.max(0,Math.min(100,i))},_validateInputValue:function(t){if(isNaN(+t)){if(Array.isArray(t))return this._validateArray(t),t;throw new Error(s(t))}return+t},_validateArray:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("number"!=typeof i)throw new Error(s(i))}},_setDataVal:function(t){this.element.setAttribute("data-value",t),this.element.setAttribute("value",t),this.element.value=t},_trigger:function(t,e){e=e||0===e?e:void 0;var i=this.eventToCallbackMap[t];if(i&&i.length)for(var s=0;s<i.length;s++){(0,i[s])(e)}R&&this._triggerJQueryEvent(t,e)},_triggerJQueryEvent:function(t,e){var i={type:t,value:e};this.$element.trigger(i),this.$sliderElem.trigger(i)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(t,e){void 0!==t.textContent?t.textContent=e:void 0!==t.innerText&&(t.innerText=e)},_removeClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var n=i[o],a=new RegExp("(?:\\s|^)"+n+"(?:\\s|$)");s=s.replace(a," ")}t.className=s.trim()},_addClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var n=i[o];new RegExp("(?:\\s|^)"+n+"(?:\\s|$)").test(s)||(s+=" "+n)}t.className=s.trim()},_offsetLeft:function(t){return t.getBoundingClientRect().left},_offsetRight:function(t){return t.getBoundingClientRect().right},_offsetTop:function(t){for(var e=t.offsetTop;(t=t.offsetParent)&&!isNaN(t.offsetTop);)e+=t.offsetTop,"BODY"!==t.tagName&&(e-=t.scrollTop);return e},_offset:function(t){return{left:this._offsetLeft(t),right:this._offsetRight(t),top:this._offsetTop(t)}},_css:function(t,e,i){if(R)R.style(t,e,i);else{var s=e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()});t.style[s]=i}},_toValue:function(t){return this.options.scale.toValue.apply(this,[t])},_toPercentage:function(t){return this.options.scale.toPercentage.apply(this,[t])},_setTooltipPosition:function(){var t=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var e,i="left"===(e=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right")?"right":"left";t.forEach(function(t){this._addClass(t,e),t.style[i]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?t.forEach(function(t){this._addClass(t,"bottom"),t.style.top="22px"}.bind(this)):t.forEach(function(t){this._addClass(t,"top"),t.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},R&&R.fn){var t=void 0;R.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),t=n):(R.bridget(o,e),t=o),R.bridget(n,e),R(function(){R("input[data-provide=slider]")[t]()})}}(t),e});