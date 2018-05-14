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


let myMap = L.map("map"); 

const etappe = L.featureGroup();

let myLayers = {
     osm: L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            subdomains: ["a", "b", "c"],
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ),
    geolandbasemap: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    elektronischekartesummer: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_base_summer/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80",{
        minZoom: 0,
        maxZoom: 18,
        attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    elektronischekartewinter: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_base_winter/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80",{
        minZoom: 0,
        maxZoom: 18,
        attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    elektronischekarteortho: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_ortho/GoogleMapsCompatible/{z}/{x}/{y}.jpeg80",{
        minZoom: 0,
        maxZoom: 18,
        attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    }
    myMap.addLayer(myLayers.osm);

    myMap.addLayer(etappe);


let myMapControl = L.control.layers({ 
    "Openstreetmap": myLayers.osm,
    "basemap.at Grundkarte": myLayers.geolandbasemap,
    "Elektronische Karte Tirol Sommer": myLayers.elektronischekartesummer,
    "Elektronische Karte Tirol Winter": myLayers.elektronischekartewinter,
    "Elektronische Karte Tirol Ortho": myLayers.elektronischekarteortho,
    
},{
    "Etappe 21": etappe,
   
},{
    collapsed: false 
}).addTo(myMap);


let myMapScale = L.control.scale( 
    {
    metric: true, 
    imperial: false, 
    maxWidth: 200
} 
).addTo(myMap);

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

L.marker(SZ_Koordinaten.start, markerOptionStart).bindPopup("<p>Start: Windegg</p><a href='https://de.wikipedia.org/wiki/Windegg'>Wikipedia Windegg</a>").addTo(etappe);
L.marker(SZ_Koordinaten.ziel, markerOptionZiel).bindPopup("<p>Ziel: Matrei</p><a href='https://de.wikipedia.org/wiki/Matrei_in_Osttirol'>Wikipedia Matrei</a>").addTo(etappe);

const geojson = L.geoJSON(biketourdata).addTo(etappe);

geojson.bindPopup(function(layer){
    const props = layer.feature.properties;
    const popupText = `<h2>${props.name}</h2>
    <p>Windegg - Matrei</p>`
    return popupText;

});

myMap.fitBounds(biketour.getBounds());
