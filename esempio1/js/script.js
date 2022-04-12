// 1.  Chiediamo un numero all'utente e stampiamo l'elemento che si trova nella posizione indicata dall'utente all'interno dell'array.
const names = ["Alessandro", "Matteo", "Karolina", "Francesco"];
names.push("Davide");

console.log(names);

// Chiedo con propmp un numero da 0 a 3
const lastIndex = names.length - 1;
const userNumber = parseInt(prompt(`Dimmi un numero da 0 a ${lastIndex}`));
console.log(userNumber);

// Stampo l'elemento con l'indice indicato dall'utente se esiste
if (userNumber >= 0 && userNumber <= lastIndex) {
    console.log(names[userNumber]);
} else {
    alert("Numero inserito non è valido")
}