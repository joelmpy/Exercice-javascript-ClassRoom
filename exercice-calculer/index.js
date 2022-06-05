
function calcul () {
    var num1 = parseInt(document.querySelector("#numberOne").value);
    var num2 = parseInt(document.querySelector("#numberTwo").value);
    var operation = document.querySelector("#operators").value

    if(operation === '+'){
        document.querySelector("#result").value = num1 + num2
    }

    if(operation === '-'){
        document.querySelector("#result").value = num1 - num2
    }
    if(operation === '/'){
        document.querySelector("#result").value = num1 / num2
    }
    if(operation === 'x'){
        document.querySelector("#result").value = num1 * num2
    }
}


