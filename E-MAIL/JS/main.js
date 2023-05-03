const mail = ['fede@mail.com', 'ciccio@panzo.com', 'anita@hey.it', 'buli@boolean.it', 'alex@karev.com', 'derek@shep.com' ];

let messaggio = "la tua mail NON è valida";
// console.log(messaggio);

let container = document.getElementById('container');

let mailUser = prompt("Inserisci la tua mail");
// console.log(mailUser);


// traversiamo l'array
for (let i = mail.length - 1; i >= 0; i--) {
    
    const itemMail = mail[i]
    // console.log(itemMail);

    // creiamo condizione
    // se la mail inserita è presente nell'array, fornire messaggio conferma invito
    if (mailUser === itemMail) {
        messaggio = "la tua mail è valida";
        
    }
    
    
    
}

const benvenutoMex =document.createElement('h1');
    benvenutoMex.append(messaggio);
    container.append(benvenutoMex);
