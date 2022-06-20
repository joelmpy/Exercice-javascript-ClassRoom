let somme = 0

for (let i = 5; i <= 10; i++){
    somme += i * i
}

// ### 02 - Comptons
// Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000
// Résultat attendu: 128

let count = 0

for(let i = 100; i <= 1000; i++){
    if(i % 7 === 0){
        count++
    }
}

let max = 6;
let min = 1;
let sum = 0;

// ### 03 - Chanceux
// Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5 

for (let i = 1; i <= 20; i++){
    let dice = Math.floor(Math.random() * (max - min + 1) + min);
    if (dice >= 5){
        sum += dice;
    }
}

var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);