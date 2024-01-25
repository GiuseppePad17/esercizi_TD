//inserire il numero totale di pane da acquistare
let bread = parseInt(prompt("quante pagnotte vuoi comprare?"));

//prezzo normale senza sconto
let regularPrice = bread * 3.49;

//prezzo scontato del 60%
let discount = (60/100)*regularPrice;

let totalPrice = regularPrice-discount;

//stampo tutto in console

console.log("bread = "+bread);
console.log("Regular price: "+regularPrice+"€");
console.log("Discount: "+discount+"€");
console.log("Total price: "+totalPrice+"€");

