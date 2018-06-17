class Point {
	
	constructor() {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		
		this.label = this.x > this.y ? 1 : -1;
	}
	
	show() {
		stroke(0);
		if (this.label == 1) {
			fill(255);
		} else {
			fill(0);
		}
		
		ellipse(this.x, this.y, 8,8);
	}
}