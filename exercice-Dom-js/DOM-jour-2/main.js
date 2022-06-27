// Exercice change //

let selctChange = document.querySelector("#ice-cream");

selctChange.addEventListener("change", (event) => {
  let result = document.querySelector(".result");
  if(!event.target.value){
    alert('please selct option')
  }else{
    result.textContent = `Tu aime bien ${event.target.value}`;
  }

});



// Exercice 

let input = document.getElementById('input');

input.addEventListener('input', (event) => {
  let lettre = document.getElementById('lettre');
  lettre.innerHTML = event.target.value
})