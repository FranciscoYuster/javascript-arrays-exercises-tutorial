let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	let fechaactual = new Date();
	let edad = fechaactual.getFullYear() - person.birthDate.getFullYear();
	let cumple = new Date(fechaactual.getFullYear(), person.birthDate.getMonth(), person.birthDate.getDate());
	if (fechaactual < cumple){
		edad = edad - 1;
	}

	return "Hello, my name is " + person.name + " and I am " + edad + " years old"
};

console.log(people.map(simplifier));
