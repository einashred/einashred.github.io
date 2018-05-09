let myMap = L.map("mapdiv"); //"http://leafletjs.com/reference-1.3.0.html#map-l-map"
const wiengroup = L.featureGroup().addTo(myMap);

//spricht leaflet bib an erstellt variable myMap, da ist der link zur bib drin, erstellt neue Karte link auf html div //
let markerGroup = L.featureGroup();
let markersCluster = L.markerClusterGroup().addTo(myMap);

let myLayers = {

    osm: L.tileLayer( //http://leafletjs.com/reference-1.3.0.html#tilayer 
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            subdomains: ["a", "b", "c",],
            attribution: "Datenquelle: <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        }
    ),
    geolandbasemap: L.tileLayer(
        "https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            subdomains: ["maps", "maps2", "maps2", "maps3", "maps4"], //http://leafletjs.com/reference-1.3.0.html#tilelayer-subdomains
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>" //http://leafletjs.com/reference-1.3.0.html#control-attribution
        }
    ),
    bmapoverlay: L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
            subdomains: ["maps", "maps2", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
        }
    ),
    bmaphidpi: L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains: ["maps", "maps2", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
        }
    ),
    bmapgrau: L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
            subdomains: ["maps", "maps2", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
        }
    ),
    bmaporthofoto30cm: L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains: ["maps", "maps2", "maps2", "maps3", "maps4"],
            attribution: "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
        }
    ),
}
//neuer layer wird erzeugt und über seite aufgerufen, geschwungen für platzhalter, z zoomstufe 11, x koordinate laengengrad, y breitengrad, s subdomain, //

//let url = "https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.png");





myMap.addLayer(myLayers.osm);
//http://leafletjs.com/reference-1.3.0.html#map-addlayer


let myMapControl = L.control.layers({ //http://leafletjs.com/reference-1.3.0.html#control-layers
    "Openstreetmap": myLayers.osm,
    "Basemap Orthofoto": myLayers.bmaporthofoto30cm,
    "Basemap Grau": myLayers.bmapgrau,
    "Basemap hidpi": myLayers.bmaphidpi,

}, {
        "Basemap Overlay": myLayers.bmapoverlay,
        "Biketour": wiengroup

    }, {
        collapsed: false //http://leafletjs.com/reference-1.3.0.html#control-layers-collapsed
    })
myMap.addControl(myMapControl);


//myMap.setView([16.381940283134707,48.20785995958346],11);
//fuegt koordinaten ein, für die variablen http://leafletjs.com/reference-1.3.0.html#map-setview

let myMapScale = L.control.scale( //http://leafletjs.com/reference-1.3.0.html#control-scale-l-control-scale
    {
        metric: true, //http://leafletjs.com/reference-1.3.0.html#control-scale-metric
        imperial: false, //http://leafletjs.com/reference-1.3.0.html#control-scale-imperial
        maxWidth: 200
    } //http://leafletjs.com/reference-1.3.0.html#control-scale-maxwidth
    //automatisch links unten - optinal befehl position: bottomleft
).addTo(myMap);

// options immer mit geschwungener klammer objekt immer in geschwungene klammer

//const uni = [47.264, 11.385];


myMap.addLayer(markerGroup);
const markerOptions = {
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

//myMap.fitBounds(markerGroup.getBounds());

// man definiert eine constate für die koordinaten
console.log("seppl!");
console.log("Stationen: ", biketour);

async function addGeojson(url) {
    console.log("url ist geladen:", url);
    const response = await fetch(url);
    console.log("Response:", response);
    const wienbikedaten = await response.json();
    const geojson = L.geoJSON(wienbikedaten, {
        style: function (feature) {
            return { color: "#ff0000" };
        },
        pointToLayer: function (geoJsonPoint, latlng) {
            return L.marker(latlng, {
                icon: L.icon({
                    iconUrl: "cycling.png"
                })
            });

        }
    })
    console.log("GeoJson:", biketour);
    //let geojson = L.geoJSON(wiendata);
    markersCluster.addLayer(geojson);
    myMap.fitBounds(markersCluster.getBounds());
    var hash = new L.Hash(myMap); //bindet leaflet.has in popup in html ein zeit koordinaten in htmladresse an

    myMap.addControl(new L.Control.Search({
        layer: markersCluster,
        propertyName: 'STATION'

    })
    );


};
//http://leafletjs.com/reference-1.3.0.html#icon
const url = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:CITYBIKEOGD&srsName=EPSG:4326&outputFormat=json";
addGeojson(url);

myMap.addLayer(wiengroup);
//myMap.fitBounds(wiengroup.getBounds());

//let geojson = L.geoJSON(spaziergang).addTo(wiengroup);
//geojson.bindPopup(function(layer){
//  const props = layer.feature.properties;
//const popupText = `<h1>${props.NAME}</h1>
//<p>Temperatur: ${props.ADRESSE} °C </p>`;

// return popupText;

//});

//myMap.fitBounds(geojson.getBounds());

