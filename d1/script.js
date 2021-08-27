// let names = [
// 				['kevin', 'joey', 'noel'], 
// 				['joshua', 'arick', 'john'],
// 				['aly', 'ian', 'therese']
// 			];

// for (let i = 0; i < names.length; i++) {
// 	console.log(names[i]);	//Output is: 
// }

// console.log(names[0][1]);	//Output is: joey

// for (let arrayPosition = 0; arrayPosition < names.length; arrayPosition++) {
// 	for (let arrayElement = 0; arrayElement < names[arrayPosition].length; arrayElement++) {
// 		console.log(names[arrayElement]/*[arrayElement]*/);
// 	}
// }

// let nums = [1. 2. 3]; //length is 3

// for (let i = 0; i < nums.length; i++) {
// 	console.log(nums[i]);
// }

// Arrays
// let grades = [98, 87, 85];

// JS Objects
// Key-value pairs
// let myGrades = {
// 	english: 98, 
// 	math: 87, 
// 	science:95
// };

// console.log(myGrades.english)

let person = {
	lastName: 'Doe',	//property
	firstName: 'John',
	math: 98,
	eng: 89,
	sci: 95,
	location: {
		city: 'Tokyo',
		country: 'Japan'
	},
	emails: ['john@mail.com', 'jd@gmail.com'],
	sayHi: function() {		//method
		console.log('hi guys!')
	},
	displayName: function() {		//method
		return this.lastName + ", " + this.firstName;	//this - used to target anything to narrow down the options
	},
	giveAverage: function() {		//method
		return (this.math + this.eng + this.sci)/3;
	}
};

let ave = person.giveAverage();	//94
console.log('The average is ' + ave);

function passOrFail(num1) {
	if(num1 > 75) {
		alert('Passed');
	}
	else {
		alert('Fail');
	}
}

passOrFail(ave);



//				object.property
// console.log(person.location.country);
// console.log(person.emails);

// methods
// person.sayHi();
// person.displayName();
// person.giveAverage();

// let movie = {
// 	title: 'Pulp Fiction',
// 	genre: 'action',
// 	director: 'Quentin Tarantino',
// 	rating: 5,
// 	length: 120,
// 	// cast = [{}, {}, {}]
// 	comments: [
// 		{
// 			name: "Stan Lee",
// 			comment: "Great!",
// 			reply: [
// 				{},
// 				{},
// 				{}
// 			]
// 		},
// 		{
// 			name: "Stanle Kubrick",
// 			comment: "Awesome film!"
// 		}
// 	]
// }

// console.log(movie.comments[0].name);
