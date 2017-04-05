

function Pet(name, breed, color) {
	this.name = name;
	this.breed = breed;
	this.color = color;
}

Pet.prototype.showInfo = function() {
	console.log("Zwierz na obrazku to " + this.name + " , domownik rasy " + this.breed + ", a jego kolor to " + this.color + " w odcieniu alfa." );                                                                                                                                                           
}

var Pies = new Pet("Stefan", "postrach kotow", "czarny braz");
var Kot = new Pet("Jarek", "kot egzotyczny", "szaro-bury");

Pies.showInfo();
Kot.showInfo();






