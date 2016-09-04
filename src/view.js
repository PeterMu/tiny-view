/**
 * 公用View组件
 * @author petermu
 */
!function(factory){
    // amd || cmd
    if(typeof define == 'function' && (define.cmd || define.amd)){
        define(['jquery'], function($){
            return factory($)
        })
    }else{
        if(window.jQuery){
            var ret = factory(window.jQuery)
            window.View = ret
        }else{
            console && console.error('U need to load jquery!')
        }
    }
}(function(jQuery){
    var $ = jQuery
    //Polyfill bind
    if (!Function.prototype.bind) {
          Function.prototype.bind = function (oThis) {
            if (typeof this !== "function") {
              throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var aArgs = Array.prototype.slice.call(arguments, 1), 
            fToBind = this, 
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP ? this : oThis || this, aArgs.concat(Array.prototype.slice.call(arguments)));
            }
            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();
            return fBound;
      }
    }

	function deepClone(parent, child) {
	    var child = child || {};
	    for (var key in parent) {
	        if (typeof parent[key] === 'object') {
	            child[key] = (parent[key].constructor === Array) ? [] : {};
	            deepClone(parent[key], child[key]);
	        } else {
	            child[key] = parent[key];
	        }
	    }
	    return child;
	}

    function View(opts) {
        if(this.init && typeof this.init == 'function') {
            this.setEl()
            this.init(opts)
            this._bindEvents()
        }else {
            console.error('please add init function')
        }
    }

    View.prototype = {
        setEl: function(el) {
            this.el = el || this.el || '<div></div>'
            this.$el = $(this.el)
            this.el = this.$el[0]
        },
        init: $.noop,
        destroy: function() {
            //解绑挂载的所有事件
            this.$el.off()
            this.$el.remove()
        },
        $: function(selector) {
            return this.$el.find(selector)
        },
        _bindEvents: function(){
            if(!this.events){
                return
            }
            var that = this
            var eventType, selector, funcName, match
            for(var key in this.events){
                match = key.match(/^(\S+)\s*(.*)$/)
                eventType = match[1]
                selector = match[2]
                this.$el.on(eventType, selector, that[that.events[key]].bind(that))
            }
        }
    }

    View.extend = function (opts){
        var parent = this
        var child = function() {
            return parent.apply(this, arguments)
        }
        child.prototype = deepClone(parent.prototype)
        child.prototype.constructor = child
        if(opts) {
            for(var key in opts) {
                child.prototype[key] = opts[key]
            }
        }
        child.__super__ = parent.prototype
        return child
    }

    return View
})

