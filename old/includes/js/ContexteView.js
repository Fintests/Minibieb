var ContexteView = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(ContexteView.template());
        return this;
    };


    this.initialize();

}

ContexteView.template = Handlebars.compile($("#header-tpl").html()+$("#contexte-tpl").html());