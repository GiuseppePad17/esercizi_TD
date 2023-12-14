let littleBottle = prompt("Inserisci il numero di bottiglie minori o uguali a 1L");
let bigBottle = prompt("Inserisci il numero di bottiglie maggiori di 1L");

let money = (0.10*littleBottle)+(0.25*bigBottle);

window.alert("ecco a te i tuoi soldi : "+money+"$")