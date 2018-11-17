const array = [
	{
		username:"jhon",
		team:"red",
		score:5,
		items: ["ball","book","pen"]
	},
	{
		username:"becky",
		team:"blue",
		score:10,
		items: ["tape","backpake","pen"]
	},
	{
		username:"susy",
		team:"red",
		score:55,
		items: ["ball","eraser","pen"]
	},
	{
		username:"tyson",
		team:"green",
		score:1,
		items: ["book","pen"]
	}
];
//foreach
const arrayPush = [];
const newArray = array.forEach(arr => {
	arrayPush.push(arr.username+"!");
})
//map
const maping = array.map((arr, i) => {
	return arr.username + i;
})
//filter
const fil = array.filter((arr) => arr.team === "red");

//reduce
const red = array.reduce((acc,num) => {
	return (num.score + acc)
}, 0);
