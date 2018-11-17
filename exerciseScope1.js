//#1
function q1(){
	var a = 5;
	if(a > 1){
		a = 3;
	}
	alert(a);
}// output = 3

//#2
var a = 0;
function q2(){
	a = 5;
}
function q22(){
	alert(a);
}// output : q2 = undifined
// output : q22 = 5

//#3
function q3(){
	window.a = "hellooo";
}
function q32() {
	alert(a);
}//output : q3() = undifined
// output :q32() = helloo

//#4
var a = 1;
function q4(){
	var a = "test";
	alert(a);
}// output q4 = test

//#5
var a = 2;
if(true){
	var a = 5;
	alert(a);
}
alert(a);
//output 5 2x