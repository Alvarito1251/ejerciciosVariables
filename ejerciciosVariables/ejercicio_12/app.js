var edad;
var nombre;
var nacimiento;
const año = 2021;

nombre = window.prompt("ingrese su nombre");
edad = window.prompt("ingrese su edad cumplida este año");

nacimiento = parseInt(año) - parseInt(edad);

console.log("Hola " + nombre + ", usted nacio en: " + nacimiento);
alert("Hola " + nombre + ", usted nacio en: " + nacimiento);