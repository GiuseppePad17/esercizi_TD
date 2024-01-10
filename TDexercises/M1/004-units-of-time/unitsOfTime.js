//L'utente inserisce i dati che verrano convertiti in secondi
let days = parseInt(prompt("Inserisci il numero di giorni"));
let hours = parseInt(prompt("Inserisci il numero di ore"));
let minutes = parseInt(prompt("Inserisci il numero di minuti"));
let seconds = parseInt(prompt("Inserisci il numero di secondi"));

//Formula dei secondi totali
let resul = (86400*days)+(3600*hours)+(60*minutes)+seconds;

window.alert("ci sono "+resul+" secondi");

let h3 = document.getElementById("seconds");
h3.innerText=h3.innerText+" "+resul
console.log(h3)
