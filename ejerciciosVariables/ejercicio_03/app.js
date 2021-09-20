const balance = 15800; 
var retirar;
var Nbalance;

alert("su balance es de: " + balance);
retirar = window.prompt("Cuanto desea retirar?");
retirar = parseInt(retirar);

Nbalance = balance - retirar;

console.log("su nuevo balance es de: " + Nbalance);
alert("su nuevo balance es de: " + Nbalance)
