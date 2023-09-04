/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Collego l'elemento della dom a una variabile

const gridEl = document.querySelector(".field");

const button = document.getElementById("generate");
let numberOfSquare;
bombNumber = 16;



//Genero un ciclo per stampare in pagina tramite il bottone la griglia tramite eventListener e un ciclo for
button.addEventListener("click", function (ev) {
    ev.preventDefault();


    const difficultyDOM = document.getElementById("difficulty");
    console.log(difficultyDOM.value);

    if (difficultyDOM.value === "difficulty1") {
        numberOfSquare = 100;
        generateField(gridEl, 100)
    } else if (difficultyDOM.value === "difficulty2") {
        numberOfSquare = 81;
        generateField(gridEl, 81)
    } else if (difficultyDOM.value === "difficulty3") {
        numberOfSquare = 49
        generateField(gridEl, 49)
    }

})








//creo una funzione per generare il campo di battaglia
function generateField(DOMelement, numberOfSquare) {

    const bombs = bombGeneretor(16)

    let points = 0

    console.log(bombs);


    for (let i = 0; i < numberOfSquare; i++) {
        const fieldEl = document.createElement("div");
        fieldEl.classList = "text-center col_10 border cell ";
        squareNumber = i + 1;
        fieldEl.append(squareNumber)
        gridEl.append(fieldEl)

        fieldEl.addEventListener("click", function () {
            checkBomb(squareNumber, bombs, fieldEl)

        })
    }
}

// creo una funzione che controlli le bombe presenti nel campo
function checkBomb(squareNumber, bombs, DOMelement) {

    let points = 0;

    if (bombs.includes(squareNumber)) {

        DOMelement.classList.add('bg_red')

    } else {

        DOMelement.classList.add('bg_active')

        points++;

    }
    console.log(points);

    document.getElementById('result').innerHTML = points;

    return points;

}



//Creare generatore di bombe
/**
 * 
 * @param {number} bombNumber  
 * @returns {number} 
 */
function bombGeneretor(bombNumber) {
    bombNumber = 16;
    const bombs = [];
    let bomb;

    for (let i = 0; i < bombNumber; i++) {

        bomb = Math.floor(Math.random() * numberOfSquare);

        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        } else {
            i--;
        }

    }


    return bombs
}
