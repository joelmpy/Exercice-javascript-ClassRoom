// let passagers = ["joel", "jo", "ro", "pause", "errors"];

// for (let i in passagers) {
//   console.log("premiere façon de faire", passagers[i]);
// }
// console.log("-----------");

// for (let i = 0; i < passagers.length; i++) {
//   console.log("Deuxieme façon de faire", passagers[i]);
// }

// Exercice //

let movie = document.querySelector("#titleMovie");
let episode1 = document.querySelector("#first-episode-info");
let episode2 = document.querySelector("#two-episode-info");
let episode3 = document.querySelector("#three-episode-info");

class Episode {
  constructor(title, minutes, hasBeenWatched) {
    this.title = title;
    this.minutes = minutes;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode("Matrix", 50, true);
let secondeEpisode = new Episode("Matrix2", 45, false);
let threeEpisode = new Episode("Matrix", 70, true);

episode1.innerHTML = `${firstEpisode.title} ${firstEpisode.minutes}min ${
  firstEpisode.hasBeenWatched ? "Mortel" : "Pas mortel"
}`;
episode2.innerHTML = `${secondeEpisode.title} ${secondeEpisode.minutes}min ${
  secondeEpisode.hasBeenWatched ? "Mortel" : "Pas mortel"
}`;
episode3.innerHTML = `${threeEpisode.title} ${threeEpisode.minutes}min ${
  threeEpisode.hasBeenWatched ? "Mortel" : "Pas mauvais"
}`;

class Serie {
  constructor(title, duration, hasBeen) {
    this.title = title;
    this.duration = duration;
    this.hasBeen = hasBeen;
  }
}

let serie1 = document.querySelector("#serie1");
let serie2 = document.querySelector("#serie2");
let serie3 = document.querySelector("#serie3");

let tabEpisode = [
  new Serie("Raven", 80, true),
  new Serie("Breaking Bad", 80, true),
  new Serie("Gomourra", 50, false),
];

for (let i in tabEpisode){
    tabEpisode.hasBeen = false
    console.log(tabEpisode.hasBeen)
}

for (let i = 0 ; i < tabEpisode.length; i++){
    tabEpisode[i].hasBeen = true
    console.log(tabEpisode[i].hasBeen)
}

serie1.innerHTML = `${tabEpisode[0].title} ${tabEpisode[0].duration}min ${
  tabEpisode[0].hasBeen ? "Il est tres bien" : "Il est mauvais"
}`;
serie2.innerHTML = `${tabEpisode[1].title} ${tabEpisode[1].duration}min ${
  tabEpisode[1].hasBeen ? "Il est tres bien" : "Il est mauvais"
}`;
serie3.innerHTML = `${tabEpisode[2].title} ${tabEpisode[2].duration}min ${
  tabEpisode[2].hasBeen ? "Il est tres bien" : "Il est mauvais"
}`;


let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges