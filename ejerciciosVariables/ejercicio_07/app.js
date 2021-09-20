var minutos;
var segundos;
const unMinuto = 60;

minutos = window.prompt("Ingrese la cantidad de minutos");
minutos = parseInt(minutos);

segundos = minutos * unMinuto;
segundos = parseInt(segundos);

console.log(minutos + " minutos son: " + segundos + " segundos");

