function f(x) {
	//y - mx + b
	return -0.3*x - 0.2;
}


class Point {
	
	constructor(x ,y) {
		if (typeof x != "undefined" && typeof y != "undefined") {
			this.x = x;
			this.y = y;
		} else {
			this.x = Math.random() * 2 - 1;
			this.y = Math.random() * 2 - 1;
		}
		this.b = 1;
		var lineY = f(this.x);
		
		
		this.label = this.y > lineY ? -1 : 1;
		
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
		ellipse(px, py, 18, 18);
	}
}