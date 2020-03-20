
function sumar (numero1,numero2){
    agregarAHistorial()
    console.log(numero1 + " + " + numero2 + " = " + calculadora.sumar(numero1, numero2));;
}
function restar (numero1,numero2){
    return Number(numero1)-Number(numero2);
}
function multiplicar (numero1,numero2){
    return Number(numero1)*Number(numero2);
}
function dividir (numero1,numero2){
    return Number(numero1)/Number(numero2);
}
function leerHistorial (){
    historialJSON=JSON.parse(fs.readFileSync('./historial.json','uts-8'))
    console.log (historialJSON);

}
function escribirHistorial (){
    return Number(numero1)/Number(numero2);
}
function mostrarHistorial (){
    return Number(numero1)/Number(numero2);
}

function agregarAHistorial (){
    return Number(numero1)/Number(numero2);
}




module.exports.sumar = sumar;
module.exports.restar = restar;
module.exports.multiplicar = multiplicar;
module.exports.dividir = dividir;
module.exports.historial = mostrarHistorial;