function setup() {
	createCanvas(200, 200);
	var p = new Perceptron(2, 0.001);
	var inputs = [-1, 0.5];
	var guess = p.guess(inputs);
	console.log(guess);
	
}

function draw() {
	
}