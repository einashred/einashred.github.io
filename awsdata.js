





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
L.marker(Sonntagskoepfl).addTo(markerGroup).bindPopup("Sonntagsköpfl" );
L.marker(SonntagskoepflWindstation).addTo(markerGroup).bindPopup("Sonntagsköpfl Windstation" );
L.marker(TuxerjochSchneestation).addTo(markerGroup).bindPopup("Tuxerjoch Schneestation" );
L.marker(TuxerjochWindstation).addTo(markerGroup).bindPopup("Tuxerjoch Windstation" );
L.marker(WandspitzeSchneestation).addTo(markerGroup).bindPopup("Wandspitze Schneestation" );
L.marker(WandspitzeWindstation).addTo(markerGroup).bindPopup("Wandspitze Windstation" );


let GehrenspitzeMarker = L.marker(Gehrenspitze).addTo(markerGroup);
//gehrenspitzeMarker.bindPopup("<p>Gehrenspitze</p><p>Temperatur: 0.6</p><p>Datum: 2018-04-26 T08:00:00+02:00</p><p>Link: https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png</p>")

GehrenspitzeMarker.bindPopup("<p>Station: Gehrenspitze </br> Temperatur: 0.6 </br> Datum: 2018-04-26</p><img style='width:300px' src='https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png' alt='Gehrenspitze' />");
let awsdata = [


Nassereither Alm","temperatur":"4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png"},
Puitegg","temperatur":"5.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png"},
Rauthhütte","temperatur":"11.7","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png"},
Rosshütte Windstation","temperatur":"4.1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rosshuette.png"},
Seegrube","temperatur":"3.1","datum":"2018-04-26T08:10:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png"},
Dalfazkamm","temperatur":"0.4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png"},
Erfurterhütte","temperatur":"2.4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png"},
Agetwoad","temperatur":"1.5","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/agetwoad.png"},
Breiter Grieskogel Schneestation","temperatur":"1.1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png"},
Breiter Grieskogel Windstation","temperatur":"-3.4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png"},
Falkaunsalpe","temperatur":"2.2","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png"},
Franz-Senn-Hütte Horntaler Spitzl","temperatur":"4.3","datum":"2018-04-25T20:40:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png"},
Franz-Senn-Hütte Kl Horntal","temperatur":"5.5","datum":"2018-04-25T20:40:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png"},
Lampsenspitze Schneestation","temperatur":"1.7","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png"},
Lampsenspitze Windstation","temperatur":"-0.8","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png"},
Roter Schrofen","temperatur":"-1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png"},
Schlicker Alm","temperatur":"6.5","datum":"2018-04-26T07:50:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/schlickeralm.png"},
Seirlöcher Kogel","temperatur":"0","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seirloecherkogel.png"},
Lämmerbichlalm","temperatur":"3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png"},
Rastkogel Windstation","temperatur":"0.1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png"},
Sonntagsköpfl","temperatur":"1.2","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png"},
Sonntagsköpfl Windstation","temperatur":"3.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png"},
Tuxerjoch Schneestation","temperatur":"6","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png"},
Tuxerjoch Windstation","temperatur":"1.5","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png"},
Wandspitze Schneestation","temperatur":"1.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png"},
Wandspitze Windstation","temperatur":"-0.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png"}


let awsdata = [
    {"lat":"47.387131","lng":"11.133717","name":"Gehrenspitze","temperatur":"0.6","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png"},
    {"lat":"47.312079","lng":"11.383623","name":"Hafelekar","temperatur":"1.6","datum":"2018-04-26T08:10:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png"},
    {"lat":"47.346295","lng":"11.080385","name":"Hohe Munde Gipfel","temperatur":"","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/woche/hohemunde.png"},
    {"lat":"47.346612","lng":"11.083694","name":"Hohe Munde Windstation","temperatur":"-4.1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png"},
    {"lat":"47.336922","lng":"10.862333","name":"Nassereith Wannig","temperatur":"-1.2","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png"},
    {"lat":"47.344376","lng":"10.849554","name":"Nassereither Alm","temperatur":"4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/nassereith.png"},
    {"lat":"47.394844","lng":"11.152817","name":"Puitegg","temperatur":"5.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/puitegg.png"},
    {"lat":"47.345909","lng":"11.104943","name":"Rauthhütte","temperatur":"11.7","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rauthhuette.png"},
    {"lat":"47.342025","lng":"11.227903","name":"Rosshütte Windstation","temperatur":"4.1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/rosshuette.png"},
    {"lat":"47.3063819943737","lng":"11.3779335010812","name":"Seegrube","temperatur":"3.1","datum":"2018-04-26T08:10:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seegrube.png"},
    {"lat":"47.448514","lng":"11.751511","name":"Dalfazkamm","temperatur":"0.4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png"},
    {"lat":"47.441861","lng":"11.762127","name":"Erfurterhütte","temperatur":"2.4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/erfurterhuette.png"},
    {"lat":"47.069889","lng":"10.862306","name":"Agetwoad","temperatur":"1.5","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/agetwoad.png"},
    {"lat":"47.0839527777778","lng":"11.0273833333333","name":"Breiter Grieskogel Schneestation","temperatur":"1.1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png"},
    {"lat":"47.1010555555556","lng":"11.0230388888889","name":"Breiter Grieskogel Windstation","temperatur":"-3.4","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/breiter_grieskogel.png"},
    {"lat":"47.071488","lng":"10.76282","name":"Falkaunsalpe","temperatur":"2.2","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png"},
    {"lat":"47.099611","lng":"11.15541667","name":"Franz-Senn-Hütte Horntaler Spitzl","temperatur":"4.3","datum":"2018-04-25T20:40:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png"},
    {"lat":"47.0960000187559","lng":"11.1623888694066","name":"Franz-Senn-Hütte Kl Horntal","temperatur":"5.5","datum":"2018-04-25T20:40:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/franz_senn_huette.png"},
    {"lat":"47.153491","lng":"11.120722","name":"Lampsenspitze Schneestation","temperatur":"1.7","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png"},
    {"lat":"47.156075","lng":"11.095642","name":"Lampsenspitze Windstation","temperatur":"-0.8","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/lampsenspitze.png"},
    {"lat":"47.04","lng":"10.7181","name":"Roter Schrofen","temperatur":"-1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/falkaunsalpe.png"},
    {"lat":"47.154432","lng":"11.303207","name":"Schlicker Alm","temperatur":"6.5","datum":"2018-04-26T07:50:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/schlickeralm.png"},
    {"lat":"47.0339","lng":"10.8528","name":"Seirlöcher Kogel","temperatur":"0","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/seirloecherkogel.png"},
    {"lat":"47.181266","lng":"11.751717","name":"Lämmerbichlalm","temperatur":"3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png"},
    {"lat":"47.192132","lng":"11.767481","name":"Rastkogel Windstation","temperatur":"0.1","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/laemmerbichlalm.png"},
    {"lat":"47.2750109996958","lng":"11.7520860028295","name":"Sonntagsköpfl","temperatur":"1.2","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png"},
    {"lat":"47.271989","lng":"11.755802","name":"Sonntagsköpfl Windstation","temperatur":"3.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/sonntagskoepfl.png"},
    {"lat":"47.093149","lng":"11.648053","name":"Tuxerjoch Schneestation","temperatur":"6","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png"},
    {"lat":"47.089717","lng":"11.648987","name":"Tuxerjoch Windstation","temperatur":"1.5","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/tuxerjoch.png"},
    {"lat":"47.121858","lng":"11.661969","name":"Wandspitze Schneestation","temperatur":"1.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png"},
    {"lat":"47.120752","lng":"11.658062","name":"Wandspitze Windstation","temperatur":"-0.3","datum":"2018-04-26T08:00:00+02:00","link":"https://lawine.tirol.gv.at/data/grafiken/540/standard/dreitage/wandspitze.png"}
    ];
    