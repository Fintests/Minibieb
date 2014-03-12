var LocalisationView = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');

       /*script à remetre
    	// if(navigator.connection)
     //    	this.checkConnection();
    	// else
    	// 	app.showAlert("Erreur","Votre navigateur n'a pas accès à internet. Veuillez vous connecter");*/

    	if(navigator.geolocation)
    	navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
      
    	
    };


    this.checkConnection = function () {
    	if(navigator.connection)
    		return true;
    	else
    		return false;
	};

	this.onSuccess = function (position) {

      // Define a default location and create the map
      var defaultLoc = new google.maps.LatLng(37.802955, -122.139923);
      $('#map_canvas').gmap( { 'center': defaultLoc, 'zoom' : 14, 
          'streetViewControlOptions': {'position':google.maps.ControlPosition.TOP_CENTER},
          'zoomControlOptions': {'position':google.maps.ControlPosition.LEFT_TOP} }) 
      .bind('init', function(evt, map) {

          // Try to get current location to center on, else stay at defaultLoc
          $('#map_canvas').gmap('getCurrentPosition', function(pos, status) {
              if (status === "OK") {
                  var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                  $('#map_canvas').gmap('option', 'center', latLng);
              } else {
                  $('#map_canvas').html("<div class='map'></div>");
              }                    
          }, { timeout: 8000, enableHighAccuracy: true } );
      }); // end .bind

	};

	this.onError = function(error) {
		app.showAlert("error : "+error.code+" - "+error.message);
	},

    this.render = function() {
        this.el.html(LocalisationView.template());
        return this;
    };

    this.initialize();

}

LocalisationView.template = Handlebars.compile($("#header-tpl").html()+$("#localisation-tpl").html());