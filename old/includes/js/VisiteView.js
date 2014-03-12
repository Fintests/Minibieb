var VisiteView = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(VisiteView.template());
        return this;
    };

    this.initialize();

}

VisiteView.template = Handlebars.compile($("#header-tpl").html()+$("#visite-tpl").html());