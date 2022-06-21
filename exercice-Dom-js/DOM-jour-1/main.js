let mainContent = document.getElementById("main-content");
let important = document.getElementsByClassName("important");
let article = document.getElementsByTagName("article");
const liItem = document.querySelector("article ul.important > li");

let elt = document.getElementById("main");
elt.innerHTML =
  "<ul><li>Elément 1</li><li>Elément 2</li></ul><ul><li>Bonjour jour 1</li><li>Bonjour 2</li></ul>";

const div = document.createElement('div');
div.className = 'foo';
div.classList.remove('foo');
div.classList.add('item-list')
console.log(div.outerHTML)

elt.style.color = "#fff";   
elt.style.backgroundColor = "#000";
elt.style.fontWeight = "bold";

elt.setAttribute('')