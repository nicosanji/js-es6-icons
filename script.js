// 1) Partendo dalla seguente struttura dati ,
//    mostriamo in pagina tutte le icone disponibili come da layout.
// 2) Coloriamo le icone per tipo.
// 3) Creiamo una select con i tipi di icone e usiamola per filtrare 
//    le icone.


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
console.log(arrayIcone);

// .querySelector -> seleziono l'elemento del DOM dove metterò l'array di icone
const domArrayIcone = document.querySelector(".row");

// Array di Object -> type icone = colore HEX
const coloreType = { animal: "#0000ff", vegetable: "#ffa500", user: "#800080" };
console.log(coloreType);

// Ciclo For (classico) -> realizzo le icone e assegno ad ogni icona le sue proprietà con destructuring
for (let i = 0; i < arrayIcone.length; i++) {
    const icona = arrayIcone[i];
    // Destructuring -> posso "prendere" le proprietà di ogni icona (in ordine) dell'Array originale
    const { name, prefix, family, type } = icona;
    const colore = coloreType[type];
    // Assegno le proprietà da una funzione esterna alle nuove costanti
    innerIcone(name, prefix, family, colore);
};


// Function -> passo le singole proprietà per realizzare l'icona e il testo
// pr1 = name / pr2 = prefix / pr3 = family / pr4 = color                 
function innerIcone(pr1, pr2, pr3, pr4) {
    domArrayIcone.innerHTML += `<div class="col-3 text-center p-2">                                                    
                                    <h3 style="color:${pr4}"><i class="${pr3} ${pr2}${pr1}"></i></h3> 
                                    <h5 style="text-transform:uppercase">${pr1}</h5>
                                </div>`
};




