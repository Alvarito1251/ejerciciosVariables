var nombre;
var cumplidos;
var años;
const año = 2021;

nombre = window.prompt("Ingrese su nombre");

cumplidos = window.prompt("Cuantos años cumplio o esta por cumplir este año?");
var cumplidos = parseInt(cumplidos);

años = año - cumplidos;
console.log("Hola " + nombre+ ". Usted nacio en " + años);
alert("Hola " + nombre+ ". Usted nacio en " + años);