function f(x) {
	//y - mx + b
	return 0.3*x +2;
}


class Point {
	
	constructor() {
		this.x = Math.random() * 2 - 1;
		this.y = Math.random() * 2 - 1;
		
		this.label = this.x > this.y ? 1 : -1;
	}
	pixelX() {
		return map(this.x, -1, 1, 0, width);
	}
	
	pixelY() {
		return map(this.y, -1, 1, height, 0);
	}
	
	show() {
		stroke(0);
		if (this.label == 1) {
			fill(255);
		} else {
			fill(0);
		}
		
		var px = this.pixelX();
		var py = this.pixelY();
		ellipse(px, py, 32,32);
	}
}