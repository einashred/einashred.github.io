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


// Leaflet Karte initialisieren
let karte = L.map("divKarte");

// Gruppe für GeoJSON Layer definieren
let geojsonGruppe = L.featureGroup().addTo(karte);

// Grundkartenlayer definieren
const grundkartenLayer = {
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
    bmapoverlay: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
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
    bmaphidpi: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
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
}

// Map control mit Grundkarten und GeoJSON Overlay definieren
let kartenAuswahl = L.control.layers({
    "Openstreetmap": grundkartenLayer.osm,
    "basemap.at Grundkarte": grundkartenLayer.geolandbasemap,
    "basemap.at grau": grundkartenLayer.bmapgrau,
    "basemap.at Orthofoto": grundkartenLayer.bmaporthofoto30cm,
}, {
    "GeoJSON Layer": geojsonGruppe,
});
karte.addControl(kartenAuswahl);

// Grundkarte "grau" laden
karte.addLayer(grundkartenLayer.bmapgrau)

// Maßstabsleiste metrisch hinzufügen
L.control.scale({
    maxWidth: 200,
    imperial: false,
}).addTo(karte);

// asynchrone Funktion zum Laden eines GeoJSON Layers
async function ladeGeojsonLayer(url) {
    const response = await fetch(url);
    const response_json = await response.json();

    // GeoJSON Geometrien hinzufügen und auf Ausschnitt zoomen
    const geojsonObjekt = L.geoJSON(response_json);
    geojsonGruppe.addLayer(geojsonObjekt);
    karte.fitBounds(geojsonGruppe.getBounds());
}

wienDatensaetze.sort(function(a,b){ 
    if(a.titel < b.titel) {
        return -1;
    } else if (a.titel > b.titel){
        return 1;
    } else {
        return 0;
    }

})
//durch diese Commands wird das drop down menü alphabetisch geordnet

// den GeoJSON Layer für Grillplätze laden
// vorschleife sorgt dafür dass alle datenstze hinzugefügt werden

ladeGeojsonLayer(wienDatensaetze[0].json);
let layerAuswahl = document.getElementById("layerAuswahl"); //zugriff auf select als variable

for (datensatz of wienDatensaetze){
    layerAuswahl.innerHTML +=  `<option value="${datensatz.json}">${datensatz.titel}</option>` //backtips um variablen ersätzen zu können mit $ und {}klammern
    console.log(datensatz.titel)
}
layerAuswahl.onchange = function(evt) {
    geojsonGruppe.clearLayers();
    ladeGeojsonLayer(evt.target.value);

} //wenn sich bei der layer auswahl was ändert dann mach eine funktion