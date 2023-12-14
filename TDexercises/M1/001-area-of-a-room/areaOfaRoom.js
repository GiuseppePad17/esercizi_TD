// Chiedi all'utente di inserire la lunghezza della stanza
let lunghezza = prompt("Inserisci la lunghezza della stanza:");

// Chiedi all'utente di inserire la larghezza della stanza
let larghezza = prompt("Inserisci la larghezza della stanza:");

// Converte le stringhe inserite in numeri
lunghezza = parseFloat(lunghezza);
larghezza = parseFloat(larghezza);

// Verifica se le lunghezze inserite sono numeri validi
if (isNaN(lunghezza) || isNaN(larghezza) || lunghezza <= 0 || larghezza <= 0) {
  console.log("Inserisci lunghezza e larghezza valide.");
} else {
  // Calcola l'area della stanza rettangolare
  let area = lunghezza * larghezza;

  // Stampa l'area
  console.log("L'area della stanza è: " + area);
}
