//let + const
let a ="test";
const b = true;
const c = 789;
a = "test2";

//Destructuring
const person = {
	firstName : "john",
	lastName : "Doe",
	age :50,
	eyeColor:"blue"
};

const{firstName,lastName,age,eyeColor} = person;

//Object properties
let a = "test";
const b = true;
const c = 789;

const okObj{a,b,c};

//Template string
const message = `Hello ${firstName} have i`;

//deafult argument
const isValidAge = (age = 10) => age; // => simbol untuk return 

//arrow function
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!":
    }
}
