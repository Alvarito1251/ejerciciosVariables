var dias;
var años;
var sDias;
var sAños;

años = window.prompt("Ingrese la cantidad de años que desea pasar a segundos");
dias = window.prompt("Ingrese la cantidad de dias que desea pasar a segundos");

sAños = parseInt(años) * 31536000;
sDias = parseInt(dias) * 86400;

console.log(años + " años equivalen a " + sAños + " segundos");
console.log(dias + " dias equivalen a " + sDias + " segundos");
