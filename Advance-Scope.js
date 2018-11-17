//scope
var fun = 5;

function funFunction(){
	var fun = "Hellloooooo";
	console.log(1,fun);
}
function funerFunction(){
	var fun = "Byee";
	console.log(2,fun);
}
function funesFunction(){
	fun = "Ahhhhhh";
	console.log(3,fun);
}
console.log("window",fun);
funFunction();
funerFunction();
funesFunction();