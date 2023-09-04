/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Collego l'elemento della dom a una variabile


const gridEl = document.querySelector(".field");
const button = document.getElementById("generate");
const limit = 100;


//Genero un ciclo per stampare in pagina tramite il bottone la griglia tramite eventListener e un ciclo for
button.addEventListener("click", function (ev) {
    gridEl.innerHTML = ""
    for (let i = 0; i < limit; i++) {
        const fieldEl = document.createElement("div")
        fieldEl.classList = "text-center col_10 border cell "
        fieldEl.append(i + 1)
        gridEl.append(fieldEl)


        fieldEl.addEventListener("click", function () {
            fieldEl.classList.toggle("bg_active")
            fieldEl.classList.toggle("active_color")
            console.log(`Cella ${i + 1} cliccata`)
        })
    }

    ev.preventDefault()
})



// creare ciclo per aggiungere le bombe alla tabella
/*
for (let i = 0; i < ; i++) {
    const element = array i];
    
}
*/

//Creare generatore di bombe
const bombs = []
function bombGeneretor() {
    const bomb = Math.floor(Math.random() * 16) + 1;
    bombs.append(bomb)
    return bombs
}

console.log(bombs)