var b4_sueldoBruto
var b4_obraSocial
var b4_jubilacion
var b4_ley
var b4_sueldoNeto
​
b4_sueldoBruto = window.prompt("Ingrese sueldo bruto: ");
​
b4_obraSocial = parseFloat(b4_sueldoBruto) * 0.03;
b4_jubilacion = parseFloat(b4_sueldoBruto) * 0.11;
b4_ley = parseFloat(b4_sueldoBruto) * 0.03;
b4_sueldoNeto = parseFloat(b4_sueldoBruto) - (parseFloat(b4_sueldoBruto) * 0.17);
​
console.log("Sueldo bruto: " + parseFloat(b4_sueldoBruto))
console.log("Obra social: " + parseFloat(b4_obraSocial))
console.log("Jubilacion: " + parseFloat(b4_jubilacion))
console.log("Ley 19032: " + parseFloat(b4_ley))
console.log("Neto a pagar: " + parseFloat(b4_sueldoNeto))