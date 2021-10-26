// 1) Partendo dalla seguente struttura dati ,
//    mostriamo in pagina tutte le icone disponibili come da layout.
// 2) Coloriamo le icone per tipo.
// 3) Creiamo una select con i tipi di icone e usiamola per filtrare 
//    le icone.

"use strict";

// Array originale -> icone e testi (name/prefix/type/family)
const arrayIcone = [
    { name: 'cat', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'crow', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'dog', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'dove', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'dragon', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'horse', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'hippo', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'fish', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'carrot', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'apple-alt', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'lemon', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'pepper-hot', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'user-astronaut', prefix: 'fa-', type: 'user', family: 'fas' },
    { name: 'user-graduate', prefix: 'fa-', type: 'user', family: 'fas' },
    { name: 'user-ninja', prefix: 'fa-', type: 'user', family: 'fas' },
    { name: 'user-secret', prefix: 'fa-', type: 'user', family: 'fas' }
];


// .querySelector -> individuo gli elementi html che mi servono tramite la classe
const domArrayIcone = document.querySelector(".row"); // Icone
const domSelect = document.querySelector(".form-select"); // Select


// .map -> inserisco la proprietà "color" in ogni elemento dell'Array originale e genero un nuovo Array
let arrayIconeColor = arrayIcone.map(icona => {
    // Destructuring -> "genero" nuove variabili dagli elementi dell'Array originale
    const { name, prefix, type, family } = icona;
    
    let iconaColor = { name, prefix, type, family };
    // Condizione -> colori in base al type
    if (iconaColor.type === "animal") { iconaColor["color"] = "#0000ff"; };
    if (iconaColor.type === "vegetable") { iconaColor["color"] = "#ffa500"; };
    if (iconaColor.type === "user") { iconaColor["color"] = "#800080"; };

    return iconaColor;
});

// .addEventListener("change", event) -> "apposta" per le select, input ecc...
domSelect.addEventListener("change", function () {
    // .filter -> devo filtrare attraverso la "select" gli elementi del nuovo Array tramite il type 
    let changeType = this.value;
    let filterType = arrayIconeColor.filter