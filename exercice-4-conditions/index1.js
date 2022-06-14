let nombre1 = 143;
let nombre2 = 219;
let texte = "";
if (nombre1 > nombre2) {
  document.querySelector("#number-1").innerHTML = "bonjour";
  console.log((texte.innerHTML = "Vous etes pas rentrer"));
} else {
  document.querySelector("#number-1").innerHTML = "bonjour a tous";
  console.log((texte.innerHTML = "Vous etes rentrer"));
}

let limit = 50;
let score = 64;

if (score >= limit) {
  document.querySelector("#number-2").innerHTML =
    "le score est supéerieur a limite";
} else {
  document.querySelector("#number-2").innerHTML = "score est inféerieur";
}

let password = "azerty";

if (password.length > 5){
    console.log("The password is secure")
}else{
    console.Log("The password is Not secure")
}

if (score == limit && password.length > 5) {
    console.log("Everything is good")
}else if (score <= limit || password.length > 5 ){
    console.log("Something is good")
}else {
    console.log("Nothing is good")
}

let min = 1;
let max = 6;

let random = Math.floor(Math.random() * (max - min + 1) + min  )

if (random === 6){
    console.log("Yes I win !" , "sa fait" , random )
}else{
    console.log("So close..." , 'merde sa fait pas 6 mais' , random)
}

let month = 'April'
let timeMonth = [{ 
    winter : 'Winter',
    spring : "Spring",
    summer: "Summer",
    fall: 'Fall',
}]


switch(month){
    case 'January': 
    console.log(timeMonth[0].winter)
    break;
    case 'August': 
    console.log(timeMonth[0].summer)
    break;
    case 'April' : 
    console.log(timeMonth[0].spring)
    break;
    case 'September' : 
    console.log(timeMonth[0].fall)
    default : console.log('aucune valeur correspond')
}

switch(month) {
    case time[0] : 
    console.log( time[0]);
    break;
    case time[1] : 
    console.log( time[1]);
}


let centOne = 200;

switch (centOne ) {
  case 150:
    console.log("pas bon score");
    break;
  case 200:
    console.log("score exact", centOne);
    break;
}


class Utilsateur {
  constructor(name, age, accountLevel) {
    (this.name = name), (this.age = age), (this.accountLevel = accountLevel);
  }
}

let firstUser = new Utilsateur("Will Alexander", 25, "normal");
let secondUser = new Utilsateur("Jojo Mani", 35, "premium");
let threeUser = new Utilsateur("Micheal John", 15, "mega-premium");

let utilsateurs = [firstUser, secondUser, threeUser];

if (firstUser.accountLevel === "normal") {
  console.log("Ils sont normal");
} else {
  console.log("ils sont pas normal du tout");
}

switch (secondUser.accountLevel) {
  case "normal":
    console.log("ils sont normal");
    break;

  case "premium":
    console.log("Ils sont premium");
    break;

  case "mega-premium":
    console.log("Ils sont mega premium");
}
