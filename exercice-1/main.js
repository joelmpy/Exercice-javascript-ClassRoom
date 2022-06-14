// first exercice
let hard = "c'est magnifique";
let change = hard.replace("magnifique", "hard");
let control = document.querySelector("#info");

let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;

let totalShowTime =
  (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons;
console.log(totalShowTime);
control.innerHTML = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season ${totalShowTime} total episode`;

// seconde exercice

const integer = 102;
const float = 13.9;
let basic = 34;
let stringified = basic.toString()
console.log( typeof(stringified));
console.log(Math.floor(float));

let num = 1.5
let rounded = Math.floor(num);
console.log(rounded)

let test = 12;
let bis = valeur = 5

console.log(test += bis)
console.log(test -= bis)
console.log(test *= bis)




// cree les const 
const heure = 24;
const minute = 60;
const seconde = 60;
//  reupere tout les element de l'html dans des variables
let dayInput = document.querySelector("#day-input");
let listenButton = document.querySelector("#total");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#secondes");
let secondes = document.querySelector("#minutes");

// l'evenement onClick 
listenButton.addEventListener("click", () => {
  // cree le calcul
  let days = dayInput.value;
  let totalHeure = days * heure;
  let totalMinute = totalHeure * minute;
  let totalSeconde = totalMinute * seconde;
  // declare tes variables recupere de la haut
  hours.innerHTML = `${totalHeure} heures`;
  minutes.innerHTML = `${totalMinute} minutes`;
  secondes.innerHTML = `${totalSeconde} secondes`;
});
