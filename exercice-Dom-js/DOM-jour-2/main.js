// Exercice change //

let selctChange = document.querySelector("#ice-cream");

selctChange.addEventListener("change", (event) => {
  let resultat = document.querySelector(".resultat");
  if(!event.target.value){
    alert('please selct option')
  }else{
    resultat.textContent = `Tu aime bien ${event.target.value}`;
  }

});


// Exercice 

let input = document.getElementById('input');

input.addEventListener('input', (event) => {
  let lettre = document.getElementById('lettre');
  lettre.innerHTML = event.target.value
})

// Exercice Mousevent // 

let inputName = document.getElementById('name')
let gender = document.getElementById('gender');

inputName.addEventListener('input', (event) => {
  let resName = document.getElementById('res-name');
  resName.innerHTML = event.target.value
});

gender.addEventListener('change', (event) => {
  let resGender = document.getElementById('res-gender');
  if(!event.target.value){
    alert('Tu dois selectionne un choix')
  }
  else {
    resGender.innerHTML = event.target.value
  }
})

let result = document.getElementById('result');
let x = document.getElementById('mouse-x');
let y = document.getElementById('mouse-y');

result.addEventListener('mousemove', (event) => {
  const offsetX = event.offsetX
  const offsetY = event.offsetY
  x.innerHTML = offsetX
  y.innerHTML = offsetY
})
