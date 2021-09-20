var nombre;
var temperaturaC;
var temperaturaF;

nombre = window.prompt("Ingrese su nombre");
temperaturaF = window.prompt("ingrese la temperatura en °F");

temperaturaC = (temperaturaF - 32) / 1.8;

alert("Hola "+ nombre + ", la temperatura en °C es; " + temperaturaC);