let myMap = L.map("mapdiv"); 
//spricht leaflet bib an erstellt variable myMap, da ist der link zur bib drin, erstellt neue Karte link auf html div //

let myLayers = {
    
    osm : L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ),
    geolandbasemap : L.tileLayer(
        "https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png" , {
        subdomains : ["maps","maps2","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href='https://www.basemap.at'>basematp.at</a>"
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

let myMapControl = L.control.layers({
    "Openstreetmap" : myLayers.osm,
    "Basemap Orthofoto" : myLayers.bmaporthofoto30cm,
    "Basemap Grau" : myLayers.bmapgrau,
    "Basemap hidpi" : myLayers.bmaphidpi,
    
},{
    "Basemap Overlay" : myLayers.bmapoverlay,
})
myMap.addControl(myMapControl);


myMap.setView([47.267,11.383],11);
//fuegt koordinaten ein, für die variablen//