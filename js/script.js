// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generatore1
var numRandomUser = Math.floor(Math.random() * 6 + 1);
document.getElementById("numero_player").innerHTML = "il TUO numero è : " + numRandomUser;


// generatore2
var numRandomBot = Math.floor(Math.random() * 6 + 1);
document.getElementById("numero_bot").innerHTML = "il numero del tuo AVVERSARIO è : " + numRandomBot;


// PAREGGIO
document.getElementById ("esito").innerHTML = " OOOH NOOO! PAREGGIO!";

// stabilire chi vince in base al punteggio alto
if (numRandomUser > numRandomBot) {
    document.getElementById ("esito").innerHTML = " HAI VINTO!";
} else if (numRandomBot > numRandomUser) {
    document.getElementById ("esito").innerHTML = " HAI PERSO!";
}