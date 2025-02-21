// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
    {
        name: 'One',
        weight: 5
    },
    {
        name: 'Two',
        weight: 7
    },
    {
        name: 'Three',
        weight: 10
    },
    {
        name: 'Four',
        weight: 12
    },
    {
        name: 'Five',
        weight: 3
    }
]

let minorWeight = 200
let minorBike = null

for (let i = 0; i < bikes.length; i++) {

    if (bikes[i].weight <= minorWeight) {
        minorWeight = bikes[i].weight
        minorBike = bikes[i].name
    }
}

console.log(minorBike);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

