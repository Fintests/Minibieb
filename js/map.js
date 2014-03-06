$('#page-map').live('pageinit', function(event){
    console.log('te');
    // Define a default location and create the map
    var defaultLoc = new google.maps.LatLng(37.802955, -122.139923);
    $('#map_canvas').gmap( { 'center': defaultLoc, 'zoom' : 14, 
        'streetViewControlOptions': {'position':google.maps.ControlPosition.TOP_CENTER},
        'zoomControlOptions': {'position':google.maps.ControlPosition.LEFT_TOP} }) 
    .bind('init', function(evt, map) {
        //fadingMsg("Getting map and current location.");
        // Try to get current location to center on, else stay at defaultLoc
        $('#map_canvas').gmap('getCurrentPosition', function(pos, status) {
            if (status === "OK") {
                var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $('#map_canvas').gmap('option', 'center', latLng);
            } else {
                $('#fading_msg').remove();
                fadingMsg ("<span style='color:#f33;'>Error</span> while getting location. Device GPS/location may be disabled.");
            }                    
        }, { timeout: 8000, enableHighAccuracy: true } );
                
        $('#map_canvas').gmap('addControl', 'controls', google.maps.ControlPosition.BOTTOM_CENTER);
        $('div#controls').css('display','inline').css('opacity', '0.7');
    }); // end .bind
});
