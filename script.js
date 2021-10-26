// 1) Partendo dalla seguente struttura dati ,
//    mostriamo in pagina tutte le icone disponibili come da layout.
// 2) Coloriamo le icone per tipo.
// 3) Creiamo una select con i tipi di icone e usiamola per filtrare 
//    le icone.


// Array originale di icone (name/prefix/type/family)
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
// type        color   hex      rgba
// animal    = blue    #0000ff  rgba(0,0,255,255)
// vegetable = orange  #ffa500  rgba(255,165,0,255) 
// user      = purple  #800080  rgba(128,0,128,255)

// .querySelector -> seleziono l'elemento del DOM dove metterò l'array di icone
const domArrayIcone = document.querySelector(".container");

// Ciclo For (classico) -> stampare tutte le icone dell'array originale
for (let i = 0; i < arrayIcone.length; i++) {
    // Prendo l'indice dall'array per ciclare
    const iconaI = arrayIcone[i];
    // .innerHTML -> "inietto" l'html con gli oggetti ciclati tramite l'indice
    domArrayIcone.innerHTML += `<div class="col text-center">    
                                    <i class="${iconaI.family} ${iconaI.prefix}${iconaI.name}"></i>
                                    <p>${iconaI.name}</p>
                                </div>`
};




