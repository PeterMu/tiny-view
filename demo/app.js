!function (){
    var Demo = View.extend({
        el: '<div class="test"></div>',
        init: function(opts) {
            console.log('init', opts.name)
            this.render()
        }, 
        events: {
            'click button': 'test'
        },
        render: function(){
            this.$el.html('<button>Click me!</button>')
        },
        test: function() {
            alert('u click me')
        }
    })
    var demo = new Demo({
        name: 'demo'
    })
    $('#main').html(demo.el)
}()

