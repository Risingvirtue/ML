var width = 500;
var height = 500;
var points = new Array(100);
var p;
var trainingIndex = 0;
function setup() {
	createCanvas(500, 500);
	p = new Perceptron(2, 1);
	for (var i =0; i< points.length;i++) {
		points[i] = new Point();
	}
	
	var inputs = [-1, 0.5];
	var guess = p.guess(inputs);
	//console.log(guess);
	
}

function draw() {
	//background(255);
	stroke(0);
	line(0,0,width, height);
	points.forEach(function(point) {
		point.show();
	})
	
	points.forEach(function(point) {
		var inputs = [point.x, point.y];
		var target = point.label;
		//p.train(inputs, target);
		
		var guess = p.guess(inputs);
		if (guess == target) {
			fill(0,255,0);
			
		} else {
			fill(255,0,0);
		}
		noStroke();
		ellipse(point.x, point.y, 4,4);
		
	})
	
	if(trainingIndex < points.length) {
		var point = points[trainingIndex];
		p.train([point.x, point.y], point.label);
		trainingIndex++;
	}
	
	
	
	
}
/*
function mousePressed() {
	points.forEach(function(point) {
		var inputs = [point.x, point.y];
		var target = point.label;
		p.train(inputs, target);
	});
}
*/