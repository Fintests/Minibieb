var GalleryInt1View = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(GalleryInt1View.template());
        return this;
    };

    this.initialize();

}

GalleryInt1View.template = Handlebars.compile($("#header-tpl").html()+$("#galleryInt1-tpl").html());