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





myMap.addLayer(myLayers.geolandbasemap);
//http://leafletjs.com/reference-1.3.0.html#map-addlayer


let myMapControl = L.control.layers({ //http://leafletjs.com/reference-1.3.0.html#control-layers
    "Basemap" : myLayers.geolandbasemap,
    "Orthofoto" : myLayers.bmaporthofoto30cm,
    
    
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


myMap.addLayer(markerGroup);
const markerOptions ={
    opacity: 0.7,
    draggable: true,
};

L.marker(Hafelekar).addTo(markerGroup).bindPopup("Hafelekar" );
L.marker(HoheMundeGipfel).addTo(markerGroup).bindPopup("Hohe Munde Gipfel" );
L.marker(HoheMundeWindstation).addTo(markerGroup).bindPopup("Hohe Munde Windstation" );
L.marker(NassereithWannig).addTo(markerGroup).bindPopup("Nassereith Wannig" );
L.marker(NassereitherAlm).addTo(markerGroup).bindPopup("Nassereither Alm" );
L.marker(Puitegg).addTo(markerGroup).bindPopup("Puitegg" );
L.marker(Rauthhuette).addTo(markerGroup).bindPopup("Rauthhütte" );
L.marker(RosshuetteWindstation).addTo(markerGroup).bindPopup("Rosshütte Windstation" );
L.marker(Seegrube).addTo(markerGroup).bindPopup("Seegrube" );
L.marker(Dalfazkamm).addTo(markerGroup).bindPopup("Dalfazkamm" );
L.marker(Erfurterhuette).addTo(markerGroup).bindPopup("Erfurtherhütte" );
L.marker(Agetwoad).addTo(markerGroup).bindPopup("Agetwoad" );
L.marker(BreiterGrieskogelSchneestation).addTo(markerGroup).bindPopup("Breiter Grieskogel Schneestation" );
L.marker(BreiterGrieskogelWindstation).addTo(markerGroup).bindPopup("Breiter Grieskogel Windstation" );
L.marker(Falkaunsalpe).addTo(markerGroup).bindPopup("Falkaunsalpe" );
L.marker(FranzSennHuetteHorntalerSpitzl).addTo(markerGroup).bindPopup("Franz-Senn-Hütte Horntaler Spitzl" );
L.marker(FranzSennHuetteKlHorntal).addTo(markerGroup).bindPopup("Franz-Senn-Hütte Horntal" );
L.marker(LampenspitzeSchneestation).addTo(markerGroup).bindPopup("Lampenspitze Schneestation" );
L.marker(LampenspitzeWindstation).addTo(markerGroup).bindPopup("Lampenspitze Windstation" );
L.marker(RoterSchrofen).addTo(markerGroup).bindPopup("Roter Schrofen" );
L.marker(SchlickerAlm).addTo(markerGroup).bindPopup("Schlicker Alm" );
L.marker(SeirloecherKogel).addTo(markerGroup).bindPopup("Seirlöcher Kogel" );
L.marker(Laemmerbichlalm).addTo(markerGroup).bindPopup("Lämmerbichlalm" );
L.marker(RastkogelWindstation).addTo(markerGroup).bindPopup("Rastkogel Windstation" );
L.marker(Sonntagskoepfl).addTo(markerGroup).bindPopup("Sonntagsköpfl" );
L.marker(SonntagskoepflWindstation).addTo(markerGroup).bindPopup("Sonntagsköpfl Windstation" );
L.marker(TuxerjochSchneestation).addTo(markerGroup).bindPopup("Tuxerjoch Schneestation" );
L.marker(TuxerjochWindstation).addTo(markerGroup).bindPopup("Tuxerjoch Windstation" );
L.marker(WandspitzeSchneestation).addTo(markerGroup).bindPopup("Wandspitze Schneestation" );
L.marker(WandspitzeWindstation).addTo(markerGroup).bindPopup("Wandspitze Windstation" );


let GehrenspitzeMarker = L.marker(Gehrenspitze).addTo(markerGroup);
let HafelekarMarker = L.marker(Hafelekar).addTo(markerGroup);
let HoheMundeGipfelMarker = L.marker(HoheMundeGipfel).addTo(markerGroup);
let HoheMundeWindstationMarker = L.marker(HoheMundeWindstation).addTo(markerGroup);
let NassereithWannigMarker = L.marker(NassereithWannig).addTo(markerGroup);
let NassereitherAlmMarker = L.marker(NassereitherAlm).addTo(markerGroup);
let PuiteggMarker = L.marker(Puitegg).addTo(markerGroup);
let RauthhuetteMarker = L.marker(Rauthhuette).addTo(markerGroup);
let RosshuetteWindstationMarker = L.marker(RosshuetteWindstation).addTo(markerGroup);
let SeegrubeMarker = L.marker(Seegrube).addTo(markerGroup);
let DalfazkammMarker = L.marker(Dalfazkamm).addTo(markerGroup);
let ErfurterhuetteMarker = L.marker(Erfurterhuette).addTo(markerGroup);
let AgetwoadMarker = L.marker(Agetwoad).addTo(markerGroup);
let BreiterGrieskogelSchneestationMarker = L.marker(BreiterGrieskogelSchneestation).addTo(markerGroup);
let BreiterGrieskogelWindstationMarker = L.marker(BreiterGrieskogelWindstation).addTo(markerGroup);
let FalkaunsalpeMarker = L.marker(Falkaunsalpe).addTo(markerGroup);
let FranzSennHuetteHorntalerSpitzlMarker = L.marker(FranzSennHuetteHorntalerSpitzl).addTo(markerGroup);
let FranzSennHuetteKlHorntalMarker = L.marker(FranzSennHuetteKlHorntal).addTo(markerGroup);
let LampenspitzeSchneestationMarker = L.marker(LampenspitzeSchneestation).addTo(markerGroup);
let LampenspitzeWindstationMarker = L.marker(LampenspitzeWindstation).addTo(markerGroup);
let RoterSchrofenMarker = L.marker(RoterSchrofen).addTo(markerGroup);
let SchlickerAlmMarker = L.marker(SchlickerAlm).addTo(markerGroup);
let SeirloecherKogelMarker = L.marker(SeirloecherKogel).addTo(markerGroup);
let LaemmerbichlalmMarker = L.marker(Laemmerbichlalm).addTo(markerGroup);
let RastkogelWindstationMarker = L.marker(RastkogelWindstation).addTo(markerGroup);
let SonntagskoepflMarker = L.marker(Sonntagskoepfl).addTo(markerGroup);
let SonntagskoepflWindstationMarker = L.marker(SonntagskoepflWindstation).addTo(markerGroup);
let TuxerjochSchneestationMarker = L.marker(TuxerjochSchneestation).addTo(markerGroup);
let TuxerjochWindstationMarker = L.marker(TuxerjochWindstation).addTo(markerGroup);
let WandspitzeSchneestationMarker = L.marker(WandspitzeSchneestation).addTo(markerGroup);
let WandspitzeWindstationMarker = L.marker(WandspitzeWindstation).addTo(markerGroup);




GehrenspitzeMarker.bindPopup("<p>Station: Gehrenspitze </br> Temperatur: 0.6 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png' alt='Gehrenspitze' />");
HafelekarMarker.bindPopup("<p>Station: Hafelekar </br> Temperatur: 1.6 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png' alt='Hafelekar' />");
HoheMundeGipfelMarker.bindPopup("<p>Station: Hohe Munde Gipfel </br> Temperatur: </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/woche/hohemunde.png' alt='Hohe Munde' />");
HoheMundeWindstationMarker.bindPopup("<p>Station: Hohe Munde Windstation </br> Temperatur: - 4.1 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png' alt='Hohe Munde Windstation' />");
NassereithWannigMarker.bindPopup("<p>Station: Nassereith Wanning </br> Temperatur: -1.2 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png' alt='Nassereith Wanning' />");
NassereitherAlmMarker.bindPopup("<p>Station: Nassereither Alm </br> Temperatur: 4.0 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png' alt='Nassereither Alm' />");
PuiteggMarker.bindPopup("<p>Station: Puitegg </br> Temperatur: 5.3 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png' alt='Puitegg' />");
RauthhuetteMarker.bindPopup("<p>Station: Rauthhütte </br> Temperatur: 11.7 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png' alt='Rauthhütte' />");
RosshuetteWindstationMarker.bindPopup("<p>Station: Rosshütte Windstation </br> Temperatur: 4.1 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rosshuette.png' alt='Rosshütte Windstation' />");
SeegrubeMarker.bindPopup("<p>Station: Seegrube </br> Temperatur: 3.1 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png' alt='Seegrube' />");
DalfazkammMarker.bindPopup("<p>Station: Dalfazkamm </br> Temperatur: 0.4 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png' alt='Dalfazkamm' />");
ErfurterhuetteMarker.bindPopup("<p>Station: Erfurterhütte </br> Temperatur: 2.4 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png' alt='Erfurterhütte' />");
AgetwoadMarker.bindPopup("<p>Station: Agetwoad </br> Temperatur: 1.5 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/agetwoad.png' alt='Agetwoad' />");
BreiterGrieskogelSchneestationMarker.bindPopup("<p>Station: Breiter Grieskogel Schneestation </br> Temperatur: 1.1 </br> Datum: 2018-04-26</p><img style='width:300px'src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png' alt='Breiter Grieskogel Schneestation' />");
BreiterGrieskogelWindstationMarker.bindPopup("<p>Station: Breiter Grieskogel Windstation </br> Temperatur: -3.4 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png' alt='Breiter Grieskogel Windstation' />");
FalkaunsalpeMarker.bindPopup("<p>Station: Falkaunsalpe </br> Temperatur: 2.2 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png' alt='Falkaunsalpe' />");
FranzSennHuetteHorntalerSpitzlMarker.bindPopup("<p>Station: Franz-Senn-Hütte Horntaler Spitzl </br> Temperatur: 4.3 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png' alt='Franz-Senn-Hütte' />");
FranzSennHuetteKlHorntalMarker.bindPopup("<p>Station: Franz-Senn-Hütte Kl Horntal </br> Temperatur: 5.5 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png' alt='Franz-Senn-Hütte' />");
LampenspitzeSchneestationMarker.bindPopup("<p>Station: Lampsenspitze Schneestation </br> Temperatur: 1.7 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png' alt='Lampsenspitze' />");
LampenspitzeWindstationMarker.bindPopup("<p>Station: Lampsenspitze Windstation </br> Temperatur: -0.8 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png' alt='Lampsenspitze Windstation' />");
RoterSchrofenMarker.bindPopup("<p>Station: Roter Schrofen </br> Temperatur: -1 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png' alt='Roter Schrofen' />");
SchlickerAlmMarker.bindPopup("<p>Station: Schlicker Alm </br> Temperatur: 6.5 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/schlickeralm.png' alt='Schlicker Alm' />");
SeirloecherKogelMarker.bindPopup("<p>Station: Seirlöcher Kogel </br> Temperatur: 0 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seirloecherkogel.png' alt='Seirlöcher Kogel' />");
LaemmerbichlalmMarker.bindPopup("<p>Station: Lämmerbichlalm </br> Temperatur: 3 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png' alt='Lämmerbichl Alm' />");
RastkogelWindstationMarker.bindPopup("<p>Station: Rastkogel Windstation </br> Temperatur: 0.1 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png' alt='Rastkogel Windstation' />");
SonntagskoepflMarker.bindPopup("<p>Station: Sonntagsköpfl </br> Temperatur: 1.2 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png' alt='Sonntagsköpfl' />");
SonntagskoepflWindstationMarker.bindPopup("<p>Station: Sonntagsköpfl Windstation </br> Temperatur: 3.3 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png' alt='Sonntagsköpfl Windstation' />");
TuxerjochSchneestationMarker.bindPopup("<p>Station: Tuxerjoch Schneestation </br> Temperatur: 6 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png' alt='Tuxerjoch Schneestation' />");
TuxerjochWindstationMarker.bindPopup("<p>Station: Tuxerjoch Windstation </br> Temperatur: 1.5 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png' alt='Tuxerjoch Windstation' />");
WandspitzeSchneestationMarker.bindPopup("<p>Station: Wandspitze Schneestation </br> Temperatur: 1.3 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png' alt='Wandspitze' />");
WandspitzeWindstationMarker.bindPopup("<p>Station: Wandspitze Windstation </br> Temperatur: -0.3 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png' alt='Wandspitze' />");







myMap.fitBounds(markerGroup.getBounds());







