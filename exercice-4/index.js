let number1 = 25;
let number2 = 18;
let age;
const ageInput = document.querySelector("#age");
const button = document.querySelector("#button");
const message = document.querySelector("#message");

function accepter() {
  message.innerHTML = "Vous etes majeur";
}

function refuser() {
    message.innerHTML = "Vous etes pas majeur";
}

function onConfirm() {
  age = parseInt(ageInput.value);
  if (isNaN(age)) {
    alert("Ceci n'est pas un nombre");
    return;
  }

  if(age < number2){
      refuser()
  }else {
      accepter()
  }
}

ageInput.value = "";

button.addEventListener("click", onConfirm);
