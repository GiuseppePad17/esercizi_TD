let letter = prompt("Inserisci una lettera");

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        window.alert("La lettera inserita è una VOCALE");
        break;

    case "y":
        window.alert("La lettera inserita può essere VOCALE o CONSONANTE");
        break;

    default:
        window.alert("La lettera inserita è una CONSONANTE");
        break;
}