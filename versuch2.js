let myMap = L.map("map"); //"http://leafletjs.com/reference-1.3.0.html#map-l-map"
const dataEtappe21 = L.featureGroup().addTo(myMap);

//spricht leaflet bib an erstellt variable myMap, da ist der link zur bib drin, erstellt neue Karte link auf html div //
let markerGroup = L.featureGroup(); 
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
        "http://wmts.kartetirol.at/wmts/gdi_base_summer/GoogleMapsCompatible/{z}/{y}/{x}.jpeg80",{
            attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    elektronischekartewinter: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_base_winter/GoogleMapsCompatible/{z}/{y}/{x}.jpeg80",{
            attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    elektronischekarteortho: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_ortho/GoogleMapsCompatible/{z}/{y}/{x}.jpeg80",{
            attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    }
    yMap.addLayer(myLayers.osm);
//http://leafletjs.com/reference-1.3.0.html#map-addlayer


let myMapControl = L.control.layers({ //http://leafletjs.com/reference-1.3.0.html#control-layers
    "Openstreetmap": grundkartenLayer.osm,
    "basemap.at Grundkarte": grundkartenLayer.geolandbasemap,
    "Elektronische Karte Tirol Sommer": grundkartenLayer.elektronischekartesummer,
    "Elektronische Karte Tirol Winter": grondkartenLayer.elektronischekartewinter,
    "Elektronische Karte Tirol Ortho": grundkartenLayer.elektronischekarteortho,
    
},{
    "Etappe 21": dataEtappe21
   
},{
    collapsed: false //http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed
})
myMap.addControl(myMapControl);


//myMap.setView([16.381940283134707,48.20785995958346],11);
//fuegt koordinaten ein, für die variablen http://leafletjs.com/reference-1.3.0.html#map-setview

let myMapScale = L.control.scale( //http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
    {metric: true, //http://leafletjs.com/reference-1.3.0.html#control-scale-metric
    imperial: false, //http://leafletjs.com/reference-1.3.0.html#control-scale-imperial
    maxWidth: 200} //http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
    //automatisch links unten - optinal befehl position: bottomleft
).addTo(myMap);

//alter teil
// Leaflet Karte initialisieren
let myMap = L.map("map");

// Gruppe für GeoJSON Layer definieren
let dataEtappe21 = L.featureGroup().addTo(myMap);

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
    elektronischekartesummer: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_base_summer/GoogleMapsCompatible/{z}/{y}/{x}.jpeg80",{
            attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    elektronischekartewinter: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_base_winter/GoogleMapsCompatible/{z}/{y}/{x}.jpeg80",{
            attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    ),
    elektronischekarteortho: L.tileLayer(
        "http://wmts.kartetirol.at/wmts/gdi_ortho/GoogleMapsCompatible/{z}/{y}/{x}.jpeg80",{
            attribution: "Datenquelle: <a href='http://wmts.kartetirol.at/wmts'>Elektronische Karte Tirol</a>"
        }
    )
    },


// Map control mit Grundkarten und GeoJSON Overlay definieren
let myMapControl = L.control.layers({
    "Openstreetmap": grundkartenLayer.osm,
    "basemap.at Grundkarte": grundkartenLayer.geolandbasemap,
    "Elektronische Karte Tirol Sommer": grundkartenLayer.elektronischekartesummer,
    "Elektronische Karte Tirol Winter": grondkartenLayer.elektronischekartewinter,
    "Elektronische Karte Tirol Ortho": grundkartenLayer.elektronischekarteortho,
}, {
    "GeoJSON Layer": geojsonGruppe,
});
map.addControl(kartenAuswahl);


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



