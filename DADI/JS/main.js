// variabili
const bottone = document.getElementById("push");
let numeroUser, numeroPC;

let messaggioUser = "Il numero generato per l'utente è = "; 
let messaggioPC = "Il numero generato per il pc è = ";

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

    // mostro in output  i due numeri generati con il messaggio
    document.getElementById('userNumber').innerHTML = messaggioUser + numeroUser;
    document.getElementById('pcNumber').innerHTML = messaggioPC + numeroPC;
    
    // creo condizione
    if (numeroUser > numeroPC) {
        risultato = "Il vincitore è l'utente";
        console.log(risultato);
    
    } else if (numeroUser === numeroPC) {
        risultato = "PAREGGIO";
        console.log(risultato);
    
    } else {
        risultato = "Il vincitore è il PC";
    }

    // mostro il risultato finale in output
    document.getElementById("risultatoFinale").innerHTML = `${risultato}`;

}




