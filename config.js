/*
* Modelleertaal WebApp Configuration
*/

var config_js_loaded = true;


var N_default = 1000;		// default waarde voor N (aantal iteraties)
var base_url = 'https://www.tomkooij.nl/b1modellen';

// titelbalk bovenaan
var title = 'Numerieke modellen bij module B1: Trillingen en golven';
var title_link = 'https://coornhert.sharepoint.com/sites/liber/Natuurkunde/B1TrillingenenGolven/B1Trillingenengolven/SitePages/Introductiepagina.aspx';

// definitie van het "profiel", welke knoppen staan aan enz.
var full_webapp = [
            {id: "#model_keuze", action: "show"},
            {id: "#permalink", action: "show"},
            {id: "#open_file_dialog", action: "show"},
            // model blok
            {id: "#continue_dialog", action: "show"},
            {id: "#debugger_dialog", action: "show"},
            // tabel output
          ];

var leerling_versie = [
            // Uitgekleede webapp met zo min mogelijk afleiding
            // bovenste blok
            {id: "#model_keuze", action: "show"},
            {id: "#permalink", action: "hide"},
            {id: "#open_file_dialog", action: "hide"},
            // model blok
            {id: "#continue_dialog", action: "hide"},
            {id: "#debugger_dialog", action: "hide"},
            // tabel output
          ];

var profiellen = [leerling_versie, full_webapp];
var actieve_profiel = 0;  //  het profiel dat als eerste geladen wordt. Telt vanaf 0.
