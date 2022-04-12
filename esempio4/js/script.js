// Stampa solo gli elementi dispari di un array
const numbers = [10, 15, 2, 33, 55, 20, 22];

// Leggo tutti i numeri dell'array
    // Per ogni numero:
    // Controllo se è dispari e se lo è lo stampo

for (let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i];
    if ( thisNumber % 2 === 1 ) {
        console.log(thisNumber);
    }
}