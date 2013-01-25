var dbegin= -20000;
var dend= -8000;
var map;
var layerl0;
function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(32.259770213417774, 35.101516357421836),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    layerl0 = new google.maps.FusionTablesLayer({
    query: {
    select: "col2",
    from: "1eNJwNBJREeQCy2r6XZi9RBFmJxdjH1X9gY09shM",
    where :'begin >= "' + dbegin + '" and end <= "' + dend + '"'
    },
    map: map,
    styleId: 2,
    templateId: 2
    });
}
$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: -30000,
        max: 2013,
        values: [ dbegin, dend],
        slide: function( event, ui ) {
            dbegin = ui.values[ 0 ];
            dend = ui.values[ 1 ];
            $( "#amount " ).val( dbegin + " to " + dend );
        },
        stop: function( event, ui){
            initialize();
        }
    });
    $( "#amount" ).val(
        $( "#slider-range" ).slider( "values", 0) + " to " +
        $( "#slider-range" ).slider( "values", 1)
    );
});
google.maps.event.addDomListener(window, 'load', initialize);
