const car = {
	make: "Toyota",
	model: "Camry",
	year: 2021,
    };

function getProperties(car){
	for(const keys in car){
		console.log(keys + ": " + car[keys]);
	}
}
getProperties(car)
