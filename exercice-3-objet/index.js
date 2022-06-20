class Episode {
  constructor(title, duration, vrai) {
    this.title = title;
    this.duration = duration;
    this.vrai = vrai;
  }
}

let firstEpisode = new Episode("Matrix", 60, true);
let secondEpisode = new Episode("Matrix 2", 50, false);
let thridEpisode = new Episode("Matrix 3", 40, true);

let episode = [firstEpisode, secondEpisode, thridEpisode];

document.querySelector("#first").innerHTML = `${firstEpisode.title}  ${
  firstEpisode.duration
}min ${firstEpisode.vrai ? "il est bon " : "pas bon"}`;
document.querySelector("#two").innerHTML = `${secondEpisode.title} ${
  secondEpisode.duration
}min ${secondEpisode.vrai ? "il est bon " : "pas bon"}`;
document.querySelector("#three").innerHTML = `${thridEpisode.title} ${
  thridEpisode.duration
}min ${thridEpisode.vrai ? "il est bon " : "pas bon"}}`;

let serie = [];

serie.push(firstEpisode);
serie.push(secondEpisode);
serie.push(thridEpisode);
serie.push(thridEpisode);
serie.pop(thridEpisode);

let numberOfEpisodes = serie.length;
console.log(numberOfEpisodes);
console.log(serie);

var newDiv = document.createElement("div");
var newText = document.createTextNode("Ici c'est Paris");
newDiv.appendChild(newText);
var currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv);

// Array //

let fruits = ["mango", "lemon", "blueberry"];

let ingredients = ["eggs", "milk", "butter"];
let indexIngredients = ingredients.indexOf("butter");

let objects = ["pen", "book", "lamp"];
objects.unshift("chair");
objects.shift();
objects.push("laptop");
objects.shift();

let numbers = [4, 10, 8, 12, 6];
numbers.sort((a, b) => a - b);

// boucle et reverse //

var cat = {
  name: "Garfield",
  age: 3,
  isCute: true
};

if(cat.isCute){
  console.log("So cute ! ")
}else {
  console.log("So ad !!")
}

let cat2 = {
  name : "Linus",
  age : 14, 
  isCute : false
}

let cats = [cat2, cat];

console.log(cats[1].age);
console.log(cats[0].isCute);
console.log(cat2["isCute"]);
console.log("cat2 isCute? 3", cats[1].isCute)
console.log("cat2 isCute? 4", cats[1]["isCute"])

let tableau = ['Rodrigue', 'Rodrigue', 'Joel', 'Anais', 'Jeff', 'Brandon']
let netableau = [... new Set(tableau)]
console.log(netableau)

let enfant = ['Rodrigue', 'Joel', 'Anais', 'Jeff', 'Brandon']
// enfant.forEach(enfants => console.log(enfants))

enfant.map((items) => {
  console.table(items)
})


