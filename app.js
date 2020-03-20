const calculadora = require('./calculadora.js');
const fs=require("fs");
const logsJSON=fs.readFileSync('./historial.json','utf-8');
const logs=JSON.parse(logsJSON);



let operacion = process.argv[2];
let numero1 = Number(process.argv[3]);
let numero2 = Numberprocess.argv[4]);

switch (operacion) {
    case "sumar":
        console.log(numero1 + " + " + numero2 + " = " + calculadora.sumar(numero1, numero2));
        break;
    case "restar":
        console.log(numero1 + " - " + numero2 + " = " + calculadora.restar(numero1, numero2));
        break;
    case "multiplicar":
        console.log(numero1 + " * " + numero2 + " = " + calculadora.multiplicar(numero1, numero2));
        break;
    case "dividir":
        console.log(numero1 + " / " + numero2 + " = " + calculadora.dividir(numero1, numero2));
        break;
    case "historial":
        console.log(calculadora.historial);
        break;
     default:
        console.log("no se entiende la operación");
        break;

}