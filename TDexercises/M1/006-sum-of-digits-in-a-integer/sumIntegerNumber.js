window.alert("Inserisci un numero e sommerò le sue singole cifre mostrandoti il totale");
// l'utente inserisce un numero
let number = prompt(("inserisci un numero"));
 //creo un arrey per dividere il numero
 let singleNumbers=[];
 let total = 0;

/*ciclo il numero in formato stringa e casto in intero i valori che vengono inseriti manmano
 nell'array andandoli a sommare al totale */ 
for(i=0; i<number.length; i++){
    singleNumbers.push(parseInt(number[i]))

    total += singleNumbers[i]
}

//stampo in console
console.log(singleNumbers);
console.log(total);
