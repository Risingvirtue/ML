function sign(n) {
	if (n >= 0) {
		return 1;
	} else {
		return -1;
	}
}

class Perceptron {
	constructor(n, c) {
		this.weights = new Array(n);
		for (let i = 0; i < n; i++) {
			var rand = Math.random() * 2 - 1;
			if (rand != 0) {
				rand = rand / (Math.abs(rand));
			}
			this.weights[i] = rand;
			
		}
		
		this.c = c; // learning rate
	}
	
	guess(inputs) {
		console.log(this.weights);
		var sum = 0;
		for (let i = 0; i < this.weights.length; i++) {
			sum += inputs[i] * this.weights[i];
		}
		var output = sign(sum);
		return output;
	}
}