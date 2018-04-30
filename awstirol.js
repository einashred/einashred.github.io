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
    const Hafelekar = [47.312079, 11.383623]; 
    const HoheMundeGipfel = [47.346295, 11.080385];
    const HoheMundeWindstation = [47.346612, 11.083694]; 
    const NassereithWannig = [47.336922, 10.862333]; 
    const NassereitherAlm = [47.344376, 10.849554]; 
    const Puitegg = [47.394844, 11.152817]; 
    const Rauthhuette = [47.345909, 11.104943]; 
    const RosshuetteWindstation = [47.342025, 11.227903]; 
    const Seegrube = [47.3063819943737, 11.3779335010812]; 
    const Dalfazkamm = [47.448514, 11.751511]; 
    const Erfurterhuette = [47.441861, 11.762127]; 
    const Agetwoad = [47.069889, 10.862306]; 
    const BreiterGrieskogelSchneestation = [47.0839527777778, 11.0273833333333]; 
    const BreiterGrieskogelWindstation = [47.1010555555556, 11.0230388888889]; 
    const Falkaunsalpe = [47.071488, 10.76282]; 
    const FranzSennHuetteHorntalerSpitzl = [47.099611, 11.15541667]; 
    const FranzSennHuetteKlHorntal = [47.0960000187559, 11.1623888694066]; 
    const LampenspitzeSchneestation = [47.153491, 11.120722]; 
    const LampenspitzeWindstation = [47.156075, 11.095642]; 
    const RoterSchrofen = [47.04, 10.7181]; 
    const SchlickerAlm = [47.154432, 11.303207]; 
    const SeirloecherKogel = [47.0339, 10.8528]; 
    const Laemmerbichlalm = [47.181266, 11.751717]; 
    const RastkogelWindstation = [47.192132, 11.767481]; 
    const Sonntagskoepfl = [47.2750109996958, 11.7520860028295]; 
    const SonntagskoepflWindstation = [47.271989, 11.755802]; 
    const TuxerjochSchneestation = [47.093149, 11.648053]; 
    const TuxerjochWindstation = [47.089717, 11.648987]; 
    const WandspitzeSchneestation = [47.121858, 11.661969]; 
    const WandspitzeWindstation = [47.120752, 11.658062]; 
];

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