!function(t){if("function"==typeof define&&define.amd)define("tiny-view",["jquery"],function(n){return t(n)});else if("function"==typeof define&&define.cmd)define("tiny-view",function(n,e,i){var o=n("jquery");return t(o)});else if(window.jQuery){var n=t(window.jQuery);window.View=n}else console&&console.error("U need to load jquery!")}(function(t){function n(t,e){var e=e||{};for(var i in t)"object"==typeof t[i]?(e[i]=t[i].constructor===Array?[]:{},n(t[i],e[i])):e[i]=t[i];return e}function e(t){this.init&&"function"==typeof this.init?(this.el=this.el||"<div></div>",this.$el=i(this.el),this.el=this.$el[0],this.init(t),this._bindEvents()):console.error("please add init function")}var i=t;return Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),e=this,i=function(){},o=function(){return e.apply(this instanceof i?this:t||this,n.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,o.prototype=new i,o}),e.prototype={init:i.noop,destroy:function(){this.$el.off(),this.$el.remove()},$:function(t){return this.$el.find(t)},_bindEvents:function(){if(this.events){var t,n,e,i=this;for(var o in this.events)e=o.match(/^(\S+)\s*(.*)$/),t=e[1],n=e[2],this.$el.on(t,n,i[i.events[o]].bind(i))}}},e.extend=function(t){var e=this,i=function(){return e.apply(this,arguments)};if(i.prototype=n(e.prototype),i.prototype.constructor=i,t)for(var o in t)i.prototype[o]=t[o];return i.__super__=e.prototype,i},e});