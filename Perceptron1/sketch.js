var width = 500;
var height = 500;
var points = new Array(100);
function setup() {
	createCanvas(500, 500);
	var p = new Perceptron(2, 0.001);
	for (var i =0; i< points.length;i++) {
		points[i] = new Point();
	}
	
	var inputs = [-1, 0.5];
	var guess = p.guess(inputs);
	console.log(guess);
	
}

function draw() {
	//background(255);
	stroke(0);
	line(0,0,width, height);
	points.forEach(function(p) {
		p.show();
	}) 
}