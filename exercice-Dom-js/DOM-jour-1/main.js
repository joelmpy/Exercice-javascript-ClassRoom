const important = document.getElementsByClassName("important");
const article = document.getElementsByTagName("article");
const liItem = document.querySelector("article ul.important > li");

let mainParent = document.getElementById("main");
mainParent.innerHTML = "<ul><li>Jour 1</li><li>Jour 2</li></ul>";

const newDiv = document.createElement("nav");
mainParent.appendChild(newDiv).innerHTML = "<ul><li>Bonjour</li></ul>";
newDiv.style.backgroundColor = "black";
newDiv.style.textAlign = "center";
newDiv.style.color = "white";

console.log(mainParent);

// exercice create element//

const newParagraphe = document.createElement("p");
mainParent.appendChild(newParagraphe);
newParagraphe.innerHTML = "Mon <strong>grand</strong> contenu";
newParagraphe.classList.add("important");
newParagraphe.style.color = "green";

// exercice evenement //

let button = document.querySelectorAll("#clock");
for (let i = 0; i < button.length; i++) {
  let allButton = button[i];
  allButton.addEventListener("click", function () {
    allButton.style.display = "none";
  });
}

// Exercice counter //

let parent = document.getElementById("parent");
let child = document.getElementById("child");
let countParent = document.getElementById("parent-count");
let countChild = document.getElementById("child-count");

let countP = 0;
let countC = 0;
parent.addEventListener("click", () => {
  countParent.innerHTML = countP++ + "";
});

child.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  countChild.innerHTML = countC++ + "";
});


