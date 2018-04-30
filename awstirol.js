let myMap = L.map("mapdiv"); //"http://leafletjs.com/reference-1.3.0.html#map-l-map"

//spricht leaflet bib an erstellt variable myMap, da ist der link zur bib drin, erstellt neue Karte link auf html div //
let markerGroup = L.featureGroup(); 
let myLayers = {
    geolandbasemap : L.tileLayer(
        "https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png" , {
        subdomains : ["maps","maps2","maps2","maps3","maps4"], //http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>" //http://leafletjs.com/reference-1.3.0.html#control-attribution
    }
    ),
    bmaporthofoto30cm : L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains : ["maps","maps2","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
        }
    ),
    }
//neuer layer wird erzeugt und über seite aufgerufen, geschwungen für platzhalter, z zoomstufe 11, x koordinate laengengrad, y breitengrad, s subdomain, //

//let url = "https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.png");





myMap.addLayer(myLayers.bmaporthofoto30cm);
//http://leafletjs.com/reference-1.3.0.html#map-addlayer


let myMapControl = L.control.layers({ //http://leafletjs.com/reference-1.3.0.html#control-layers
    "Orthofoto" : myLayers.bmaporthofoto30cm,
    "Basemap" : myLayers.geolandbasemap,
    
},{
    "Marker" : markerGroup, //das hier ist ein objekt
},{
    collapsed: false //http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed
})
myMap.addControl(myMapControl);


//myMap.setView([47.267,11.383],11);
//fuegt koordinaten ein, für die variablen http://leafletjs.com/reference-1.3.0.html#map-setview

let myMapScale = L.control.scale( //http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
    {metric: true, //http://leafletjs.com/reference-1.3.0.html#control-scale-metric
    imperial: false, //http://leafletjs.com/reference-1.3.0.html#control-scale-imperial
    maxWidth: 200} //http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
    //automatisch links unten - optinal befehl position: bottomleft
).addTo(myMap);
 
// options immer mit geschwungener klammer objekt immer in geschwungene klammer

//const uni = [47.264, 11.385];
//const patscherkofel = [47.20889, 11.46083];

const Gehrenspitze = [47.387131, 11.133717];

myMap.addLayer(markerGroup);
const markerOptions ={
    opacity: 0.7,
    draggable: true,
};

L.marker(Gehrenspitze).addTo(markerGroup).bindPopup("Gehrenspitze" );

let GehrenspitzeMarker = L.marker(Gehrenspitze).addTo(markerGroup);
//gehrenspitzeMarker.bindPopup("<p>Gehrenspitze</p><p>Temperatur: 0.6</p><p>Datum: 2018-04-26 T08:00:00+02:00</p><p>Link: https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png</p>")

GehrenspitzeMarker.bindPopup("<p>Station: Gehrenspitze </br> Temperatur: 0.6 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png' alt='Gehrenspitze' />");

//name":"Gehrenspitze","temperatur":"0.6","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png

//http://leafletjs.com/reference-1.3.0.html#marker-l-marker
// addTo(myMap) fuegt es erst hinzu

//L.marker(uni, markerOptions).addTo(markerGroup);
//L.marker(patscherkofel).addTo(markerGroup).bindPopup("Patscher Kofel" );


//let patscherkofelMarker = L.marker(patscherkofel).addTo(markerGroup);
//patscherkofelMarker.bindPopup("<p>Patscher Kofel</p><img style = 'width:200px' src='patscher.jpg' alt='Patscherkofl' />")

myMap.fitBounds(markerGroup.getBounds());


//let lift = L.polyline([igls,patscherkofel], 
//{
  //  color: 'red'
//});
//myMap.addLayer(lift);

//let uniPolygon = L.polygon([uni,usi,technik]);
//myMap.addLayer(uniPolygon);

//uniPolygon.bindPopup("Ende?");




// man definiert eine constate für die koordinaten