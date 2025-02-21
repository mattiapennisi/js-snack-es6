// Snack 1

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
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        name: 'Milan',
        score: 0,
        fouls: 0
    },
    {
        name: 'Barcelona',
        score: 0,
        fouls: 0
    },
    {
        name: 'Liverpool',
        score: 0,
        fouls: 0
    },
    {
        name: 'Psg',
        score: 0,
        fouls: 0
    },
    {
        name: 'Bayern',
        score: 0,
        fouls: 0
    }
]

function generatesRandomNumber(n) {
    let randomNumber = Number(Math.floor(Math.random() * n + 1))

    return randomNumber
}

for (let i = 0; i < teams.length; i++) {
    teams[i].score = generatesRandomNumber(10)
    teams[i].fouls = generatesRandomNumber(10)
}

console.log(teams)  

let teamsLessScore = []

for (let i = 0; i < teams.length; i++) {
    let teamsLessScoreObject = {
        name: teams[i].name,
        fouls: teams[i].fouls
    }

    teamsLessScore.push(teamsLessScoreObject)
}

console.log(teamsLessScore)