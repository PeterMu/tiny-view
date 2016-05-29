# 超轻量级 View 库 

80 行代码实现的超轻量 View 库，使用方法类似 Backbone.View，依赖 jquery(1.8+)。

## Get Started

```
var Demo = View.extend({
    el: '<div class="test"></div>',
    init: function(opts) {
        console.log('init', opts.name)
        this.render()
    }, 
    events: {
        'click button': 'clickFunc'
    },
    render: function(){
        this.$el.html('<button>Click me!</button>')
    },
    clickFunc: function() {
        alert('u click me')
    }
})
var demo = new Demo({
    name: 'demo'
})
```

## 配置参数

### el { String }

View 的根 dom 对象，可以是一段html代码或者一个选择器。

### init { function }

创建View时，调用的初始化函数。

### 没了，就这俩配置参数。

## API

### el { Object }
  
View 的原生dom对象。

```
var view = View.extend({...})
view.el
```

### $el { Object }

View 的 jquery 对象。

```
var view = View.extend({...})
view.$el
```

### $ { function }

jquery 选择器

```
var view = View.extend({...})
view.$('selector')
```
### destroy { function }

销毁 View，同时解绑绑定到 View 上的事件。

### 其他没有了，就是这么简单。

