//1.1 Types simples

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)
//variable déclarée avec const peut pas etre redéclarée
age += 1
useless = 14

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()
//on push banana dans le 1er tableau et en enleve tomato dans le 2e tableau
console.log(fruits, vegetables)

//----------------------//
//1.2 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)
//Une const est une valeur qui ne peut pas être modifiée. Elle ne peut être modifiée avec une réaffectation ou une redéclaration.
savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)