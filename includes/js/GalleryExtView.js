var GalleryExtView = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(GalleryExtView.template());
        return this;
    };

    this.initialize();

}

GalleryExtView.template = Handlebars.compile($("#header-tpl").html()+$("#galleryExt-tpl").html());