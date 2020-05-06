# React Student Dashboard
Het doel van deze opdracht was het gemakkelijk maken voor Winc docenten om in één overzicht te zien hoe de studenten de opdrachten evalueren. Winc zou graag, per opdracht, de evaluatie van iedere student willen zien in een "Bar Chart".

## Requirements
- [x] Als je de pagina (tool) opent zien we gelijk een staafdiagram met de evaluaties voor alle dagen van alle studenten – Laat een staafdiagram zien van de evaluaties (meting van beide cijfers tegelijk)
- [x] Per student aparte Routing - op deze dedicated pagina's voor studenten krijg je een ander soort grafiek / overzicht te zien
- [x] Als gebruiker van de tool kan je op een aantal manieren de data "slicen en dicen":
    **Kies één van de onderstaande manieren**
    1. [x] Een of beide metingen weergeven (dus óf hoe leuk de opdracht was, óf hoe moeilijk, óf beide!)
    2. [ ] Weergave van de metingen van meerdere mensen (maar niet iedereen) - dus filteren op naam van de studenten die je wilt laten weergeven (van een of n-aantal studenten). 
    ***[Met een checkbox de verschillende studenten selecteren die je wilt weergeven]***
    3. [ ] Gemiddelde cijfer in de vorm van line chart.... 
        - van een student voor alle opdrachten
        - van een opdracht over alle studenten

## Bonus Requirements
- [ ] **Tabel overzicht** van alle data ⇒ dus als een Excel spreadsheet. Je mag hierbij zelf bepalen hoe je de kolommen / rijen wilt structureren:
    - Je kunt nog steeds kan filteren op alle bovenstaande manieren
    - Toevoegen van sorteren per data kolom
- [ ] **Gebruikers profielen**. Door gebruik te maken van de API van [UInames.com](https://uinames.com/api/) kunnen jullie snel en eenvoudig objects ophalen met nep data erin. Voor elke studentenpagina kunnen jullie vervolgens een profiel toevoegen en de fictieve studenten verder verrijken met:
    - Achternaam
    - Leeftijd
    - Telefoonnummer
    - Email adres
    - Photo (URL)
    - ❗Let wel op de rate limiting van deze API – als je te vaak en teveel een call doet wordt je (tijdelijk) geblokkeerd
- [ ] Alles opslaan en beheren in Redux
- [ ] **Sorteren** van de bar charts van opdrachten op gemiddelde cijfer (hoog naar laag of laag naar hoog)
- [ ] **Sorteren** van de studenten op gemiddelde cijfers (hoog naar laag of laag naar hoog)

## `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.