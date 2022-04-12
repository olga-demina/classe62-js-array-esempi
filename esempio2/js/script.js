
// 2. Chiediamo all'utente un numero e stampiamo il numero dell'utente e quello successivo

// Chiedere un numero con prompt
const userNumber = parseInt(prompt("Dimmi un numero"));
console.log(userNumber);

// Incremento di uno il numero
const nextNumber = userNumber + 1;

// Stampo  numero dell'utente
console.log("Hai inserito numero", userNumber);

// Stampo il numero incrementato
console.log("Numero successivo è", nextNumber);