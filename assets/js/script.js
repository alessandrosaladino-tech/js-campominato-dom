/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
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

        generateField(gridEl, 100);

    } else if (difficultyDOM.value === "difficulty2") {

        numberOfSquare = 81;

        generateField(gridEl, 81);

    } else if (difficultyDOM.value === "difficulty3") {

        numberOfSquare = 49;

        generateField(gridEl, 49);
    }

})








//creo una funzione per generare il campo di battaglia e aggiungo l'eventlistener al click
function generateField(DOMelement, numberOfSquare) {

    const bombs = bombGeneretor(16)

    let points = 0

    console.log(bombs);


    for (let i = 0; i < numberOfSquare; i++) {

        const fieldEl = document.createElement("div");

        fieldEl.classList = "text-center col_10 border cell ";

        const squareNumber = i + 1;

        fieldEl.append(squareNumber);

        gridEl.append(fieldEl);


        fieldEl.addEventListener("click", function generate() {

            if (bombs.includes(squareNumber)) {
                fieldEl.classList.add ("bg_red");

                const resultDOM =  document.getElementById("result");

                resultDOM.classList.add("end_square");

                document.getElementById("result").innerHTML = `&#9940 You lose! Current Points: ${points}. RESET AND RETRY !`

                fieldEl.removeEventListener("click", generate);
            } else {
                fieldEl.classList.add ("bg_active");

                fieldEl.removeEventListener("click", generate);

                ++points;

                document.getElementById("result").innerHTML = points;

                console.log(squareNumber);
            }

        })
    }
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


document.getElementById('reset').addEventListener('click', function () {
    location.reload();
})