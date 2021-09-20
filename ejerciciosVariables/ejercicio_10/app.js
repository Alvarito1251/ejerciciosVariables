var monto;
var descuentoPorciento; 
var descuento;
var precioFinal;

monto = window.prompt("Ingrese un monto");
monto = parseInt(monto);

descuentoPorciento = window.prompt("Ingrese un descuento");

descuento = (descuentoPorciento * monto) / 100;
descuento = parseInt(descuento);

precioFinal = monto - descuento;
precioFinal = parseInt(precioFinal);

alert(precioFinal);