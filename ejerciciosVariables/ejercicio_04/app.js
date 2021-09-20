var nota1;
var nota2;
var nota3;
var promedio;

nota1 = window.prompt("Ingrese la primer nota");
nota1 = parseInt(nota1);

nota2 = window.prompt("Ingrese la segunda nota");
nota2 = parseInt(nota2);

nota3 = window.prompt("Ingrese la tercer nota");
nota3 = parseInt(nota3);

promedio = ( nota1 + nota2 + nota3) / 3;

console.log("El promedio es de: " + promedio);