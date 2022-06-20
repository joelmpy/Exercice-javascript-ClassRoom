// function first (number1, number2) {
//     console.log('la valeur1 >>>>>' , number1)
//     console.log('la valeur2 >>>>>' , number2)
// }

// first('je suis Joel', 'Je suis Bruno')

var classeA = [
  { nom: "Marc", moyenne: 16 },
  { nom: "Sonia", moyenne: 8 },
  { nom: "Cecilla", moyenne: 4 },
  { nom: "Matheo", moyenne: 14 },
  { nom: "Ange", moyenne: 12 },
];

var classeB = [
  { nom: "Joel", moyenne: 17 },
  { nom: "Jeff", moyenne: 18 },
  { nom: "Rodrigue", moyenne: 2 },
  { nom: "Anais", moyenne: 9 },
  { nom: "Britney", moyenne: 16 },
];

var classeC = [
  { nom: "Yanis", moyenne: 12 },
  { nom: "Mohamed", moyenne: 13 },
  { nom: "Bastien", moyenne: 7 },
  { nom: "Math", moyenne: 6 },
  { nom: "Mbappe", moyenne: 10 },
];

// function student (eleve){
//   for (let i = 0; i < eleve.length; i++){
//    let eleves = eleve[i]

//    if(eleves.moyenne >= 10){
//     console.log('il a la moyenne', eleve[i])
//    }else {
//     console.log('il a pas la moyenne dommage', eleve[i])
//    }
//   }
// }

// student(classeA)
// student(classeB)
// student(classeC)

// function checkIfEven (num) {
//   if (num % 2 === 0){
//       console.log('il est pair')
//   }else{
//     console.log('il est impair')
//   }
// // }

// checkIfEven(2);
// checkIfEven(5);

// function compare (num1, num2){
// if (num1 > num2){
//   document.querySelector('#nombre').innerHTML = `${num1} est plus grand que ${num2}`
// }else if (num1 < num2){
//   document.querySelector('#nombre2').innerHTML = `${num1} est plus petit que  ${num2}`
// }
// else {
// document.getElementById('egaux').innerHTML = `${num1} et ${num2} sont egaux`
// }
// }

// compare(17, 15)
// compare(10,25)
// compare(12, 12)


// 05 - Add Up //

function addUp (num) {
  let sum = 0

  for (let i = 1; i <= num; i++){
    sum += i 
  }
  return sum
}
let result = addUp(12);
console.log(result)

// 06 - Time //

function format (num) {

}

