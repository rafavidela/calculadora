
let fs = require("fs");
let operacionActual;
function sumar(...operandos) {
    let resultado= operandos.reduce((res, elem) => { return res + elem; });
    operacionActual = operandos.reduce((prev, elem) => {return prev+" + "+elem;})+" = "+resultado;
    agregarAHistorial(operacionActual)
    return operacionActual;
}
function restar(...operandos) {
    let resultado= operandos.reduce((res, elem) => { return res - elem; });
    operacionActual = operandos.reduce((prev, elem) => {return prev+" - "+elem;})+" = "+resultado;
    agregarAHistorial(operacionActual)
    return operacionActual;
}
function multiplicar(...operandos) {
    let resultado= operandos.reduce((res, elem) => { return res * elem; });
    operacionActual = operandos.reduce((prev, elem) => {return prev+" * "+elem;})+" = "+resultado;
    agregarAHistorial(operacionActual)
    return operacionActual;
}
function dividir(...operandos) {
    let resultado= operandos.reduce((res, elem) => { return res / elem; });
    operacionActual = operandos.reduce((prev, elem) => {return prev+" / "+elem;})+" = "+resultado;
    agregarAHistorial(operacionActual)
    return operacionActual;
}
function leerLog() {
    let historialObj = JSON.parse(fs.readFileSync('./historial.json', 'utf-8'))
    return historialObj;
}
function escribirLog(log) {
    fs.writeFileSync('./historial.json', JSON.stringify(log, null, 4));

}

function mostrarHistorial() {
    let historial = leerLog();
    console.log(historial);
    historial.forEach((element, index) => {
        console.log(index + ": " + element);
    });
}

function agregarAHistorial() {
    let log = leerLog();
    log.push(operacionActual);
    // console.log(log);
    escribirLog(log);
}

function borrarHistorial(log) {
    fs.writeFileSync('./historial.json', "[]");
}


module.exports.sumar = sumar;
module.exports.restar = restar;
module.exports.multiplicar = multiplicar;
module.exports.dividir = dividir;
module.exports.historial = mostrarHistorial;
module.exports.borrar = borrarHistorial;