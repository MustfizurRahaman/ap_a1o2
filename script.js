var map = L.map('map').setView([37.7749, -122.4194], 13);

var esriStreets = L.esri.basemapLayer('DarkGray').addTo(map);;;

$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson",function(data){
    var customIcon = L.icon({
      iconUrl: 'https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/criminal.png',
      iconSize: [60,60]
    });
    var markers = L.geoJson(data, {
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: customIcon});
        marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT + '<br/>' + feature.properties.SUBJECT);
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(markers);
    map.addLayer(clusters);
});
