var moles = [];
var
function preload(){

}
function setup(){
	myCanvas = createCanvas(675,675);
	moles.push(new Mole(150,150));
	moles.push(new Mole(300, 150));
	moles.push(new Mole(450, 150));

	moles.push(new Mole(150, 300));
	moles.push(new Mole(300, 300));
	moles.push(new Mole(450, 300));

	moles.push(new Mole(150, 450));
	moles.push(new Mole(300, 450));
	moles.push(new Mole(450, 450));

}
function draw(){

}
function Mole(x, y){
	this.xPos = x;
	this.yPos = y;
	this.state = 0;
	this.timeInState = random(255) + 150;

	this.changeStates = function(){
		if(this.state === 0){
			this.state = 1;
			this.timeInState = random(300) + 150;
		}
		else{
			this.state = 0;
			this.timeInState = random(300) + 150;
		}
	};
	this.display = function(){
		if(this.state === 1){
			ellipse();
			//image(moleImageUp, this.xPos, this.yPos);
		}
		else{
			//image(moleImageDown, this.xPos, this.yPos);
		}
	};
	this.decrementCounter = function(){
		timeInState--;
		if(timeInState === 0){
			this.changeStates();
		}
	};
}