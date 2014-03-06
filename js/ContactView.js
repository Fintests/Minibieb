var ContactView = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(ContactView.template());
        return this;
    };

    this.initialize();

}

ContactView.template = Handlebars.compile($("#header-tpl").html()+$("#contact-tpl").html());