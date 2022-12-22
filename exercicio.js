const calculadora = (number1, number2, op) => {

    let resultado 

    switch (op) {
        case "+":
            resultado = number1 + number2
            break;
        case "-":
            resultado = number1 - number2
            break;
        case "/":
            resultado = number1 / number2
            break;
        case "*":
            resultado = number1 * number2
            break;
        default:
            resultado = number1 + number2
            break;
    
    
    }
    return resultado
}



console.log(calculadora(2,5, '*'))