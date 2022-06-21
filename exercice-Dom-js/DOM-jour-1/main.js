const mainContent = document.getElementById("main-content");
const important = document.getElementsByClassName("important");
const article = document.getElementsByTagName("article");
const liItem = document.querySelector("article ul.important > li");

let mainParent = document.getElementById("main");
mainParent.innerHTML = "<ul><li>Jour 1</li><li>Jour 2</li></ul>";

const newDiv = document.createElement('nav')
mainParent.appendChild(newDiv).innerHTML = "<ul><li>Bonjour</li></ul>"
newDiv.style.backgroundColor = "black";
newDiv.style.textAlign = "center";
newDiv.style.color = "white"

console.log(mainParent)

// exercice //

const newParagraphe = document.createElement('p');
mainParent.appendChild(newParagraphe);
newParagraphe.innerHTML = "Mon <strong>grand</strong> contenu"
newParagraphe.classList.add('important');
newParagraphe.style.color = 'green'
