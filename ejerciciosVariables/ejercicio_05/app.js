var metros;
var conversionPie;
var conversionCenti;
var conversionPulga;

const pie = 3.28084;
const centimetros= 100;
const pulgada = 39.3701;

metros = window.prompt("Ingrese una medida en metros");
metros = parseInt(metros);

conversionPie = (metros * pie);
console.log("La conversion en pies es: " + conversionPie);

conversionCenti = (metros * 100);
console.log("La conversion en centimetros es: " + conversionCenti);

conversionPulga = (metros * pulgada);
console.log("La conversion en pulgadas es: " + conversionPulga);


