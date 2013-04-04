// 16. 3. 2011
// Author: philipp gressly freimann (phi@gress.ly)

// Hier sind die Funktionen der Fachklassen definiert.
// Keine Handlers werden hier definiert (aber in "handlers.js")

function rechnen() {
    r1 = readNumberFromFieldViaId("r1");
    r2 = readNumberFromFieldViaId("r2");
    ser = r1 + r2;
    par = (r1 * r2) / (r1 + r2); // Formel für Parallelschaltung
    formattierteAusgabe("r_parallel", "Parallel", par);
    formattierteAusgabe("r_seriell",  "Seriell",  ser);
}

function formattierteAusgabe(id, text, value) {
    var str = "Resultat (" + text + ") = " + value;
    setFirstTextChild(id, str);
}