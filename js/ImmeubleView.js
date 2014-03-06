var ImmeubleView = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('click', 'ul li a', app.route);
    };

    this.render = function() {
        this.el.html(ImmeubleView.template());
        return this;
    };

    // this.findByName = function() {
    //     store.findByName($('.search-key').val(), function(employees) {
    //         $('.employee-list').html(ImmeubleView.liTemplate(employees));
    //     });
    // };

    this.initialize();

}

ImmeubleView.template = Handlebars.compile($("#header-tpl").html()+$("#immeuble-tpl").html());