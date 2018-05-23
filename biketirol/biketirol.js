/*
    Vorbereitung: GPX Track herunterladen und nach GeoJSON konvertieren
    -------------------------------------------------------------------
    Datenquelle https://www.data.gv.at/suche/?search-term=bike+trail+tirol&searchIn=catalog
    Download Einzeletappen / Zur Ressource ...
    Alle Dateien im unterverzeichnis data/ ablegen
    Die .gpx Datei der eigenen Etappe als etappe00.gpx speichern
    Die .gpx Datei über https://mapbox.github.io/togeojson/ in .geojson umwandeln und als etappe00.geojson speichern
    Die etappe00.geojson Datei in ein Javascript Objekt umwandeln und als etappe00.geojson.js speichern

    -> statt 00 natürlich die eigene Etappe (z.B. 01,02, ...25)
*/

// eine neue Leaflet Karte definieren

// Grundkartenlayer mit OSM, basemap.at, Elektronische Karte Tirol (Sommer, Winter, Orthophoto jeweils mit Beschriftung) über L.featureGroup([]) definieren
// WMTS URLs siehe https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol

// Maßstab metrisch ohne inch

// Start- und Endpunkte der Route als Marker mit Popup, Namen, Wikipedia Link und passenden Icons für Start/Ziel von https://mapicons.mapsmarker.com/

// GeoJSON Track als Linie in der Karte einzeichnen und auf Ausschnitt zoomen
// Einbauen nicht über async, sondern über ein L.geoJSON() mit einem Javascript Objekt (wie beim ersten Stadtspaziergang Wien Beispiel)

// Baselayer control für OSM, basemap.at, Elektronische Karte Tirol hinzufügen

// Overlay controls zum unabhängigem Ein-/Ausschalten der Route und Marker hinzufügen


let myMap = L.map("map", {
    fullscreenControl: true,

}); 

let bikegroup = L.featureGroup().addTo(myMap);

let myLayers = {

    osm : L.tileLayer( 
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            subdomains : ["a", "b", "c",],
            attribution : "Datenquelle: <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        }
    ),
    geolandbasemap: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmapgrau: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
            subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmaporthofoto30cm: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    tiris_sommer: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_base_summer/GoogleMapsCompatible/{z}/{x}/{y}    .jpeg80", {
            attribution: "Datenquelle: <a   href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>eK   arte Tirol</a>"
        }
    ),
    tiris_winter: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_base_winter/GoogleMapsCompatible/{z}/{x}/{y}    .jpeg80", {
            attribution: "Datenquelle: <a   href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>eK   arte Tirol</a>"
        }
    ),
    tiris_ortho: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_ortho/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80", {
            attribution: "Datenquelle: <a   href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>eK   arte Tirol</a>"
        }
    ),
    bmapoverlay: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
            subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    tiris_nomenklatur: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_nomenklatur/GoogleMapsCompatible/{z}/{x}/{y}.png8",  {
            attribution: "Datenquelle: <a   href='https://www.data.gv.at/katalog/dataset/land-tirol_elektronischekartetirol'>eK   arte Tirol</a>",
            pane: "overlayPane",
        }
    ),
}
    
const tirisSommer = L.layerGroup([
    myLayers.tiris_sommer,
    myLayers.tiris_nomenklatur
]);
const tirisWinter = L.layerGroup([
    myLayers.tiris_winter,
    myLayers.tiris_nomenklatur
]);
const tirisOrtho = L.layerGroup([
    myLayers.tiris_ortho,
    myLayers.tiris_nomenklatur
]);

myMap.addLayer(myLayers.geolandbasemap);

//myMap.addLayer(bikegroup);

let myMapControl = L.control.layers({
    
    "Openstreetmap": myLayers.osm,
    "basemap.at Grundkarte": myLayers.geolandbasemap,
    "basemap.at grau": myLayers.bmapgrau,
    "basemap.at Orthofoto": myLayers.bmaporthofoto30cm,
    "Elektronische Karte Tirol - Sommer" : tirisSommer,
    "Elektronische Karte Tirol - Winter" : tirisWinter,
    "Elektronische Karte Tirol - Orthophoto" : tirisOrtho,

},{

    "Etappe 21": bikegroup
   
},{
    collapsed: false 
}).addTo(myMap);

myMap.addControl(myMapControl);
myMap.addLayer(tirisSommer);


let myScale = L.control.scale({
    metric: true, 
    imperial: false, 
    maxWidth: 200,
}).addTo(myMap);

const SZ_Koordinaten = {
    start : [47.261389, 11.553201],
    ziel : [47.134239, 11.452475],
};

const myIconStart = L.icon({
    iconUrl: 'images/cycling_start.png',
    iconAnchor: [16, 37]
});

const myIconZiel = L.icon({
    iconUrl: 'images/cycling_ziel.png',
    iconAnchor: [16,37]
});

const markerOptionStart = {
    title: "Windegg",
    draggable: false,
    opacity: 0.90,
    icon: myIconStart,
};

const markerOptionZiel = {
    title: "Matrei",
    draggable: false,
    opacity: 0.90,
    icon: myIconZiel
};

L.marker(SZ_Koordinaten.start, markerOptionStart).bindPopup("<p>Start: Windegg</p><a href='https://de.wikipedia.org/wiki/Windegg'>Wikipedia Windegg</a>").addTo(bikegroup);
L.marker(SZ_Koordinaten.ziel, markerOptionZiel).bindPopup("<p>Ziel: Matrei</p><a href='https://de.wikipedia.org/wiki/Matrei_in_Osttirol'>Wikipedia Matrei</a>").addTo(bikegroup);


//const geojson = L.geoJSON(biketourdata).addTo(etappe);

let gpxTrack = new L.GPX("data/etappe21.gpx", {
    async: true
}).addTo(myMap);
gpxTrack.on("loaded", function(evt) {
    let track = evt.target;
    console.log('Traillänge:', track.get_distance().toFixed(0))
    console.log('Niedrigster Punkt:', track.get_elevation_min().toFixed(0))
    console.log('Höchster Punkt:', track.get_elevation_max().toFixed(0))
    console.log('Aufstieg:', track.get_elevation_gain().toFixed(0))
    console.log('Abstieg: ', track.get_elevation_loss().toFixed(0))
   
    myMap.fitBounds(track.getBounds());

    let gesamtlaenge=track.get_distance().toFixed(0);
    document.getElementById('gesamtlaenge').innerHTML=gesamtlaenge;

    let lowpoint=track.get_elevation_min().toFixed(0);
    document.getElementById('lowpoint').innerHTML=lowpoint;

    let highpoint=track.get_elevation_max().toFixed(0);
    document.getElementById('highpoint').innerHTML=highpoint;

    let aufstieg=track.get_elevation_gain().toFixed(0);
    document.getElementById('aufstieg').innerHTML=aufstieg;

    let abstieg=track.get_elevation_loss().toFixed(0);
    document.getEle
    mentById('abstieg').innerHTML=abstieg;

    
});


/*gpxTrack.bindPopup(function(layer){
    const props = layer.feature.properties;
    const popupText = `<h2>${props.name}</h2>
    <p>Windegg - Matrei</p>`
    return popupText;

});

*/