class Animal{
	constructor(name, type, color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mamal extends Animal{
	constructor(name, type, color){
		super(name, type, color)
	}
	sound(){
		console.log(`Hi my name is ${this.name}, ${this.type}, ${this.color} `);
	}
}

const mamal1 = new Mamal('Ray','Panggang', 'Coklat');