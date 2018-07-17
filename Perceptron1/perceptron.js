function sign(n) {
	if (n >= 0) {
		return 1;
	} else {
		return -1;
	}
}

class Perceptron {
	constructor(n, c) {
		this.weights = [];
		for (var i = 0; i < n; i++) {
			var rand = Math.random() * 2 - 1;
			if (rand != 0) {
				rand = sign(rand) * rand;
			}
			this.weights.push(rand);
		}
		
		this.c = c; // learning rate
	}
	
	guess(inputs) {
		//console.log(this.weights);
		var sum = 0;
		for (let i = 0; i < this.weights.length; i++) {
			sum += inputs[i] * this.weights[i];
		}
		var output = sign(sum);
		return output;
	}
	
	train(inputs, target) {
		var guess = this.guess(inputs);
		var error = target - guess;
		
		//tuning weights using supervised learning
		for (var i = 0; i < this.weights.length; i++) {
			this.weights[i] += error * inputs[i] * this.c;
		}
		//this.c = Math.max(0.1, this.c * 0.9);
	}
	
	
	guessY(x) {
		var w0 = this.weights[0];
		var w1 = this.weights[1];
		var w2 = this.weights[2];
		
		return -(w2/ w1) - (w0/w1) * x;
	}
}