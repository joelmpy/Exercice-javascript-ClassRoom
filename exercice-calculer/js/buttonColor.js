const firstButton = document.getElementById('first-color');
const secondButton = document.getElementById('second-color');
const endButton = document.getElementById('end-color');
const changeColorBody = document.getElementById('container-color');
const text = document.getElementById('mot');

console.log(text)


firstButton.addEventListener('click',() => {
    // changeColorBody.classList.toggle('colorMainBlack');
    changeColorBody.style.backgroundColor = "black"
    text.style.color = "white"
 
})

secondButton.addEventListener('click', () => {
    // changeColorBody.classList.toggle('colorMainBlue');
    changeColorBody.style.backgroundColor = "blue"
    text.style.color = "red"
})

endButton.addEventListener('click', () => {
    // changeColorBody.classList.toggle('colorMainRed')
    changeColorBody.style.backgroundColor = "red"
    text.style.color = "green"
})