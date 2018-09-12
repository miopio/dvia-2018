//this code was adapted by a coding train video challenge https://www.youtube.com/watch?v=E4RyStef-gY

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES); // this is specific to an arc 
}

function draw() {
	background('rgb(248, 244, 220)');
	translate(200, 200);
	rotate(-90);

	let hr = hour();
	let mn = minute();
	let sc = second();

	// Below is the white outer arc 
	strokeWeight(20);
	stroke('rgb(208, 63, 37)');
	noFill();
	let end1 = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, end1); 

	stroke('rgb(50, 98, 160)');
	let end2 = map(mn, 0, 60, 0, 360); // this is mapping the minutes
	arc(0, 0, 250, 250, 0, end2); // changed the size to make it smaller than seconds arc

	stroke('rgb(220, 184, 56)');
	let end3 = map(hr % 12 , 0, 12, -90, 360); // this is mapping the hours 
	arc(0, 0, 200, 200, 0, end3); 

	// this is a simple digital clock 
	//fill(255);
	//noStroke();
	//text(hr + ':' + mn + ':' + sc, 10, 200);


}