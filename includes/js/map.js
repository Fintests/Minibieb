/*var FilterView = function(locations) {

    this.initialize = function() {
        this.el = $('<div/>');

        this.el.on('click', '.filterAll', function(event) {
            event.preventDefault();

            $('.filterType').removeClass('off');
            map.displayMarkers();
        });

        this.el.on('click', '.filterType', function(event) {
            event.preventDefault();

            $(this).toggleClass('off');
            var type = $(this).data('type');
            map.filterMarkersType(type);
        });
    };

    this.render = function() {
        this.el.html(FilterView.template(locations));
        return this;
    };

    this.initialize();
};

FilterView.template = Handlebars.compile($("#filter-tpl").html());*/

var map = {
    gmap: null,
    locations: [],

    addMarker: function(position, icon, title) {
        var latLng = new google.maps.LatLng(position.lat, position.lng);

        var marker = new google.maps.Marker({
            title: title,
            position: latLng,
            icon: icon,
            map: this.gmap
        });

        return marker;
    },

    displayMarkers: function() {
        $.each(this.locations.markers, function(index, value) {
            this.visible = true;

            $.each(this.list, function(index2, value2) {
                this.marker.setVisible(true);
            });
        });
    },

    filterMarkersType: function(type) {
        var markersType = this.getMarkersType(type);
        markersType.visible = ! markersType.visible;

        $.each(markersType.list, function(index, value) {
            this.marker.setVisible(markersType.visible);
        });
    },

    filterView: function() {
        var filterView = new FilterView(this.locations).render();
        $('#map-filter').append(filterView.el);
    },

    fitMarkerBounds: function() {
        var mapBounds = new google.maps.LatLngBounds();

        $.each(this.locations.markers, function() {
            $.each(this.list, function() {
                mapBounds.extend(this.marker.getPosition());
            });
        });

        this.gmap.fitBounds(mapBounds);
    },

    generateMarkers: function() {
        var self = this;

        $.each(this.locations.markers, function() {
            var markerList = this.list;
            var markerIcon = 'images/' + this.icon;
            var markerType = this.type;

            $.each(markerList, function() {
                this.marker = self.addMarker(this.position, markerIcon, this.name);
            });
        });
    },

    getMarkersType: function(type) {
        var markersType = false;

        $.each(this.locations.markers, function(index, value) {
            if(this.type == type)
            {
                markersType = this;
                return markersType;
            }
        });

        return markersType;
    },

    setCenter: function(latitude, longitude) {
        var center = new google.maps.LatLng(latitude, longitude);
        this.gmap.setCenter(center);
    },

    initialize: function(targetId, locations) {
        if( ! targetId)
        {
            return false;
        }

        this.locations = locations;

        var center = new google.maps.LatLng(48.8698865, 2.3328263);

        var mapOptions = {
            center: center,
            zoom: 16
        };

        this.gmap = new google.maps.Map(document.getElementById(targetId), mapOptions);
        this.addMarker({lat: 48.8698865, lng: 2.3328263}, null);

        //  this.filterView();
        this.generateMarkers();
        //  this.fitMarkerBounds();

        return this;
    }
};