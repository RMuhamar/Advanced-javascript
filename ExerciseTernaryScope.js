//if
function xperiencePoint(){
	if(winBattle()){
		return 10;
	}else{
		return 1;
	}
}


//ternary scope
function winBattle(value){
	return value;
}
var xperiencePoints = winBattle(true) ? 10:1;