let ageMajeur = 18;
let age;
let isControlParentalActive;
const ageInput = document.querySelector("#age");
const button = document.querySelector("#button");
var parentalInput = document.querySelector("#parental").checked;


// message //

const message = document.querySelector("#message");

function accepter() {
  message.innerHTML = "Vous etes autorisé a entrer";
}

function refuser() {
  message.innerHTML = "Vous n'etes pas autorisé a entrer"
}

// pour confirmer le tout

function onConfirm() {
   parentalInput = document.querySelector("#parental").checked;
  console.log(parentalInput)
  age = parseInt(ageInput.value);

  if (isNaN(age)) {
    alert("Ceci n'est pas un nombre");
    return;
  }

  isControlParentalActive = parentalInput;

  if (age < ageMajeur && isControlParentalActive) {
    console.log('refused ', isControlParentalActive)
    refuser();
  } else {
    console.log('acceopter ', isControlParentalActive)

    accepter();
  }
}

ageInput.value = "";

button.addEventListener("click", onConfirm);
