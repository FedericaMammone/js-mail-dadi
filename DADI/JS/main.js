// variabili
const bottone = document.getElementById("push")
let numeroUser, numeroPC

// collego evento al bottone
bottone.addEventListener('click', miaFunzione);

// collego evento alla funzione
function miaFunzione() {

    // genero numero utente
    numeroUser = Math.floor(Math.random() * 6) + 1;
    console.log(numeroUser);

    // genero numero pc
    numeroPC = Math.floor(Math.random() * 6) + 1;
    console.log(numeroPC);

    // mostro in output  i due numeri generati conil messaggio

    // creo condizione


}




