//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4]
console.log(a)
console.log(b)
console.log(c)
//a est la 1ere valeur[0] du tableau et , la 2eme valeur [1]
const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age)

//4.2 Application
 Object.values(data).forEach(function(element){
    const {texte, dateDebut, dateFin} = element;
    console.log(texte, dateDebut, dateFin)
})