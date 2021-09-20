var b3_kmRecorrer
var b3_velocidad
var b3_tiempo
​
b3_kmRecorrer = window.prompt("Ingrese la cantidad de kilometros que desea recorrer: ");
b3_velocidad = window.prompt("Ingrese la velocidad a la que desea ir en m/s: ");
​
b3_velocidad = parseFloat(b3_velocidad) * 3.6;
​
b3_tiempo = parseFloat(b3_kmRecorrer) / parseFloat(b3_velocidad);
​
console.log("Se tardara en recorrer el trayecto " + parseFloat(b3_tiempo) + " horas")