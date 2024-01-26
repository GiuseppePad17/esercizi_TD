//Personalized Diet Calculator VALORI PERSONA
const GENDER = prompt("Scrivi M se sei maschio o F se sei femmina").toUpperCase();
let age = parseInt(prompt("inserisci la tua età"));
let height = parseFloat(prompt("inserisci la tua altezza in Cm"));
let weight = parseFloat(prompt("inserisci il tuo peso in Kg"));
let activityLevel = prompt("inserisci  livello di attività fisica scrivi -> sedentario/leggero/moderato/pesante").toUpperCase();
//let foodPrefer = prompt("Scrivi i cibi che preferisci");
//let foodRestrictions = prompt("Scrivi i cibi che non gradisci");

//Valori livelli attività fisica
const SEDENTARIO = 1.2;
const LEGGERO = 1.375;
const MODERATO = 1.55;
const PESANTE = 1.725;

//  MB = metabolismo basale utilizzando l'equazione di Harris-Benedict
let MBf = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
let MBm = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);

let MB = 0.0; //  fabbisogno calorico giornaliero utilizzando l'equazione di Harris-Benedict

if(GENDER=="M"){
    switch(activityLevel) {
        case "SEDENTARIO":
            MB = MBm*SEDENTARIO;
          break;
        case "LEGGERO":
            MB = MBm*LEGGERO;
          break;
        case "MODERATO":
            MB = MBm*MODERATO;
          break;
        case "PESANTE":
            MB = MBm*PESANTE;
          break;
    }
}

if (GENDER == "F") {
    switch(activityLevel) {
        case "SEDENTARIO":
            MB = MBf*SEDENTARIO;
          break;
        case "LEGGERO":
            MB = MBf*LEGGERO;
          break;
        case "MODERATO":
            MB = MBf*MODERATO;
          break;
        case "PESANTE":
            MB = MBf*PESANTE;
          break;
    }
}


console.log("sesso: "+GENDER);
console.log("età: "+age);
console.log("altezza: "+height+"cm");
console.log("peso: "+weight+"Kg");
console.log("livello di attività fisica: "+activityLevel);
console.log("fabisogno calorico energetico giornaliero: "+MB);


