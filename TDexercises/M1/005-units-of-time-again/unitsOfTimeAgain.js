function convertiSecondi(secondi) {
    var giorni = Math.floor(secondi / (24 * 60 * 60));
    var ore = Math.floor((secondi % (24 * 60 * 60)) / (60 * 60));
    var minuti = Math.floor((secondi % (60 * 60)) / 60);
    var restantiSecondi = secondi % 60;
  
    // Aggiungi uno zero davanti se il valore è inferiore a 10
    giorni = giorni < 10 ? "0" + giorni : giorni;
    ore = ore < 10 ? "0" + ore : ore;
    minuti = minuti < 10 ? "0" + minuti : minuti;
    restantiSecondi = restantiSecondi < 10 ? "0" + restantiSecondi : restantiSecondi;
  
    return giorni + ":" + ore + ":" + minuti + ":" + restantiSecondi;
  }
  
  var inputSecondi = prompt("Inserisci il numero di secondi:");
  var secondi = parseInt(inputSecondi);
  
  if (isNaN(secondi) || secondi < 0) {
    console.log("Inserisci un numero valido di secondi.");
  } else {
    var risultato = convertiSecondi(secondi);
    console.log("Il formato DD:HH:MM:SS è: " + risultato);
  }
  
