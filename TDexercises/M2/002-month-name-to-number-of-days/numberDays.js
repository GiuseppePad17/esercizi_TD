const month = prompt("inserisci un mese").toLowerCase(); 
// rendi il mese in lettere minuscole per un confronto case-insensitive

switch (month) {
    
        
    case "febbraio":
        window.alert(month+"è un anno bisestile e può avere 28 o 29 giorni");
    break;

    case "gennaio":
    case "marzo":
    case "maggio":
    case "luglio":
    case "ottobre":
    case "agosto":
    case "dicembre":
        window.alert(month+"ha 31 giorni");
    break;
    
        
    case "settembre":
    case "giugno":
    case "novembre":
    case "aprile":
        window.alert(month+"ha 30 giorni");
    break;
}