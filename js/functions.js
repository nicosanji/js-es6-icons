
// Function -> creare ogni elemento del nuovo Array con i colori
function innerIconeColor(arrayIcone) {
    // Variabile "vuota" per aggiungere l'html 
    let domIconeColor = "";
    // Ciclo .forEach -> eseguo la funzione per ogni elemento dell'array
    arrayIcone.forEach(icona => {
        domIconeColor += `<div class="col-3 text-center p-2">
                            <h2><i class="fas fa-${icona.name}" style="color:${icona.color}"></i></h2> 
                            <h5 style="text-transform:uppercase">${icona.name}</h5>
                        </div>`
    });
    // .innerHTML -> "inietto" nel mio html
    domArrayIcone.innerHTML = domIconeColor;
};
// Dichiaro la funzione con il nuovo array per mostrarlo da subito
innerIconeColor(arrayIconeColor);
