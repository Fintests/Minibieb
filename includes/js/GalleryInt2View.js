var GalleryInt2View = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(GalleryInt2View.template());
        return this;
    };

    this.initialize();

}

GalleryInt2View.template = Handlebars.compile($("#header-tpl").html()+$("#galleryInt2-tpl").html());