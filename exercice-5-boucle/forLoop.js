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


var nombres = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

// TODO: ÉTAPE 1
// À l'aide d'une boucle for, afficher dans la console toutes les valeurs
// contenues dans le tableau `nombres`, une par une.

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// TODO: ÉTAPE 2
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, sauf les deux premières.
for (let i = 2; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// TODO: ÉTAPE 3
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, sauf les trois dernières.

for (let i = 0; i < nombres.length - 3; i++) {
  console.log(nombres[i])
}

// TODO: ÉTAPE 4
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, mais en commençant par la dernière
// valeur et en terminant par la première.

for (let i = nombres.length - 1; i >= 0; i--) {
    console.log(nombres[i]);
}

// TODO: ÉTAPE 5
// Avec une autre boucle for, afficher dans la console uniquement les
// valeurs du tableau `nombres` ayant un indice pair (0, 2, 4, etc.),
// une par une.

for (let i = 0; i < nombres.length; i++) {
  if (2 % i === 0) {
    console.log('ils sont pair' + ' ---> ', nombres[i]);
  } else {
    console.log('ils sont pas pair', nombres[i]);
  }
}

var prenoms = ['Ali', 'Nour', 'Jean', 'Carole', 'Ibrahim', 'Alma'];

// TODO: ÉTAPE 6
// À l'aide d'une boucle for, afficher dans la console des messages
// qui saluent chaque prénom contenus dans le tableau `prenoms`.
// Par exemple : "Bonjour Joseph"

let lengthPrenoms = prenoms.length;

for (let i = 0; i < lengthPrenoms; i++) {
//   console.log('Bonjour', prenoms[i]);
}

// TODO: ÉTAPE 7
// Avec une autre boucle for, afficher dans la console uniquement
// le premier prénom contenant plus de 4 lettres.

for (let i = 0; i < lengthPrenoms; i++) {
  let groupe = prenoms[i];
  if (groupe.length > 4) {
    console.log(groupe);
  }
}

let text = ""
for (let i = 0; i < lengthPrenoms; i++) {
    text = text + prenoms[i] + ","
    console.log(text);
  }
