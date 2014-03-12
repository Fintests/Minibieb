var LocalisationView = function(locations) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');

      	this.el.on('click', '.filterAll', function(event) {
            event.preventDefault();

            $('.filterType').removeClass('off');
            if(google.maps){
                map.displayMarkers();
            }
        });

        this.el.on('click', '.filterType', function(event) {
            event.preventDefault();

            $(this).toggleClass('off');
            var type = $(this).data('type');
            if(google.maps){
                map.filterMarkersType(type);
            }
        });
    };


    this.render = function() {
        this.el.html(LocalisationView.template(locations));
        return this;
    };

    this.initialize();

}

LocalisationView.template = Handlebars.compile($("#localisation-tpl").html());