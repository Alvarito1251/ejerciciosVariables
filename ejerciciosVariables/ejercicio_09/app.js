var lado;
var altura;
var area;

lado = window.prompt("Ingrese el valor de los lados del triangulo");
lado = parseInt(lado);

altura = (Math.sin((60)*(Math.PI/180))) * lado;

area = (lado * altura) / 2;

console.log("El area del triangulo es: " + area);
alert("El area del triangulo es: " + area);
