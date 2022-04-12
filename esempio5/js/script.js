// 5. Chiediamo all'utente che cosa vorrebbe comprare e verifichiamo se c'è questo prodotto nella lista del negozio

const products = ["pomodoro", "latte", "caffè", "mela"];

// Chiedere all'utente con prompt un prodotto che cerca
const search = prompt("Quale prodotto stai cercando?");
console.log('utente cerca', search);

// verificare se questo prodotto c'è nella lista
let productFound = false;
for (let i = 0; i < products.length; i++) {
    const thisProduct = products[i];
    if (thisProduct === search) {
        productFound = true;
    }
    console.log(thisProduct, "Ho trovato?", productFound);
}


console.log("Risultato finale: ", productFound);
// OUTPUT
// dire all'utente l'esito della ricerca
if ( productFound === true ) {
    console.log("Abbiamo trovato il prodotto, Vuoi procede al pagamento?");
} else {
    console.log("Ci dispiace, ma non abbiamo il prodotto che stai cercando.");
}