//#1
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
let dino = '🦕';

console.log(startLine);
console.log(turtle.padStart(10));
console.log(rabbit.padStart(10));
console.log(dino.padStart(10));

//#2
turtle.trim().padEnd(9, '='); // trim() menghapus string kosong

//#3
let obj = {
	my: "name",
	is: "rayza",
	the: "raindeer"
}

let arr = [];
Object.keys(obj).forEach((key, index) => {
arr.push(key, obj[key]);
});

let newArr = arr.join(" ");
console.log(newArr);

//Object.entries(obj).map(value => value.join(" ")).join(' ')