const person = {
	firstName: "John",
	lastName: "Doe",
	Age: 25
	};
function getfullName(person){
	
		return `"firstName: ${person.firstName}, lastName: ${person.lastName}, Age: ${person.Age}"` 
		
	}

console.log(getfullName(person));