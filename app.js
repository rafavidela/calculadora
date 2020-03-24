const calculadora = require('./calculadora.js');
const fs=require("fs");
const logsJSON=fs.readFileSync('./historial.json','utf-8');
const logs=JSON.parse(logsJSON);
const [,,operacion,...operandos]=process.argv;


var operandosNum=operandos.map(function(value){return Number(value)});

switch (operacion) {
    case "sumar":
        let resultado=calculadora.sumar(...operandosNum);
        console.log(resultado);            
        break;

    case "restar":
        console.log(calculadora.restar(...operandosNum));
        break;
    case "multiplicar":
        console.log(calculadora.multiplicar(...operandosNum));
        break;
    case "dividir":
        console.log(calculadora.dividir(...operandosNum));
        break;
    case "historial":
        calculadora.historial();
        break;
        case "borrar":
            calculadora.borrar();
            break;
     default:
        console.log("no se entiende la operación");
        break;

}