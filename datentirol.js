let myMap = L.map("mapdiv"); //"http://leafletjs.com/reference-1.3.0.html#map-l-map"

//spricht leaflet bib an erstellt variable myMap, da ist der link zur bib drin, erstellt neue Karte link auf html div //
let markerGroup = L.featureGroup(); 
let myLayers = {
    
    osm : L.tileLayer( //http://leafletjs.com/reference-1.3.0.html#tilayer 
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            subdomains : ["a", "b", "c",],
            attribution : "Datenquelle: <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        }
    ),
    geolandbasemap : L.tileLayer(
        "https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png" , {
        subdomains : ["maps","maps2","maps2","maps3","maps4"], //http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>" //http://leafletjs.com/reference-1.3.0.html#control-attribution
    }
    ),
    bmapoverlay : L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps2","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
        }
    ),
    bmaphidpi : L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains : ["maps","maps2","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
        }
    ),
    bmapgrau : L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps2","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
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
    "Openstreetmap" : myLayers.osm,
    "Basemap Orthofoto" : myLayers.bmaporthofoto30cm,
    "Basemap Grau" : myLayers.bmapgrau,
    "Basemap hidpi" : myLayers.bmaphidpi,
    
},{
    "Basemap Overlay" : myLayers.bmapoverlay,
    "Marker" : markerGroup, //das hier ist ein objekt
},{
    collapsed: false //http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed
})
myMap.addControl(myMapControl);


myMap.setView([47.267,11.383],11);
//fuegt koordinaten ein, für die variablen http://leafletjs.com/reference-1.3.0.html#map-setview

let myMapScale = L.control.scale( //http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
    {metric: true, //http://leafletjs.com/reference-1.3.0.html#control-scale-metric
    imperial: false, //http://leafletjs.com/reference-1.3.0.html#control-scale-imperial
    maxWidth: 200} //http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
    //automatisch links unten - optinal befehl position: bottomleft
).addTo(myMap);
 
// options immer mit geschwungener klammer objekt immer in geschwungene klammer

//const uni = [47.264, 11.385];


myMap.addLayer(markerGroup);
const markerOptions ={
    title: "Universität Innsbruck",
    opacity: 0.7,
    draggable: true,
};

   //http://leafletjs.com/reference-1.3.0.html#marker-l-marker
// addTo(myMap) fuegt es erst hinzu

//L.marker(uni, markerOptions).addTo(markerGroup);
//L.marker(patscherkofel).addTo(markerGroup).bindPopup("Patscher Kofel" );
//let patscherkofelMarker = L.marker(patscherkofel).addTo(markerGroup);
//patscherkofelMarker.bindPopup("<p>Patscher Kofel</p><img style = 'width:200px' src='patscher.jpg' alt='Patscherkofl' />")

myMap.fitBounds(markerGroup.getBounds());

// man definiert eine constate für die koordinaten