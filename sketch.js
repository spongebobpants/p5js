let star = [];
let r = 150;
let circles;

let font, fontsize;

function preload() {
	//   img = loadImage('image/star.png');
	//   font = loadFont('NanumBarunGothic.ttf');
	ha = loadImage('image/ha.jpeg');

	circles = new Group();
	circles.addAni('default', 'image/star_01.png', 1); //150px
	circles.ani.frameDelay = floor(random(120, 240));

	circles.addAni = 'circle';
	circles.diameter = 150;
	circles.direction = () => random(0, 360);
	circles.speed = () => random(2, 6);
	circles.scale = () => random(0.2, 1);
	
}

function setup() {
	createCanvas(480, 720);
	for (let i = 0; i < 10; i++) {
		star[i] = new Star(random(100, width - 100), random(100, height - 100), random(-3, 3), random(-3, 3));
	}

	for (let i = 0; i < 10; i++) {
		// new circle with a random position on the screen
		let circle = new circles.Sprite(random(0, width), random(0, height));
		// mass determines the force exchange in case of bounce
		circle.mass = circle.scale;
	}
	//   textFont(font);


	circles.bounciness = 0.9;
	circles.friction = 0;
}

function draw() {
	background(255, 8, 0);
	// for (let i = 0; i < star.length; i++) {
	// 	star[i].bounce();
	// 	star[i].display();

	// 	for (var j = 0; j < star.length; j++) {
	// 		if (i != j && star[i].intersects(star[j])) {
	// 			star[i].move();
	// 			star[j].move();
	// 		}
	// 	}
	// }

	drawWords(width * 0.75)

	for (let s of allSprites) {
		// if (s.collided(allSprites)) {
		// 	background(255);
		// 	//play sound
		// } else {
		// 	background(0);
		// }
		s.scale = 1;
		if (s.x < 0) {
			s.x = 1;
			s.vel.x = abs(s.vel.x);
		}

		if (s.x > width) {
			s.x = width - 1;
			s.vel.x = -abs(s.vel.x);
		}

		if (s.y < 0) {
			s.y = 1;
			s.vel.y = abs(s.vel.y);
		}

		if (s.y > height) {
			s.y = height - 1;
			s.vel.y = -abs(s.vel.y);
		}


	}

	// if (circles.collided(allSprites)) {
	// 	background(0);
	// } else {
	// 	background(255);
	// }

	allSprites.debug = mouse.pressing();

}

function drawWords() {
	fill(255, 255, 255);
	
	textSize(40);
	text('2009년 7월 30일 대개봉', 40, 60);
	text('우리는 대한민국 \n국가대표다!', 40, r);
	textStyle(BOLD);
	textSize(80);
	text('국가대표', 40, r*2);
	textSize(40);
	text('國家代表, Take Off', 40, r*2+80);
	textSize(30);
	
	text('감독 김용화 | 하정우 | 성동일 |\n김지석 | 김동욱 | 최재환', 40, r*4);
}

class Star {
	constructor(x, y, xSpeed, ySpeed, r) {
		this.x = x; //도형의 x 좌표 
		this.y = y; // 도형의 y좌표 
		this.xSpeed = 5;
		this.ySpeed = 5;
		this.r = 50;
		this.c = color(255, 8, 0);
	}

	display() {
		// image(img, this.x, this.y, r,r);
		fill(this.c);
		ellipse(this.x, this.y, r, r);
	}

	bounce() {
		this.x += this.xSpeed;
		if (this.x < 0 + r / 2 || this.x > width - r / 2) {
			this.xSpeed *= -1;
		}

		this.y += this.ySpeed;
		if (this.y < 0 + r / 2 || this.y > height - r / 2) {
			this.ySpeed *= -1;
		}
	}

	intersects(other) {
		var d = dist(this.x, this.y, other.x, other.y);

		if (d < (this.r + other.r)) {
			this.c = color(255, 0, 0);
			return true;
		} else {
			this.c = color(255);
			return false;
		}
	}

	move() {
		this.xSpeed *= -1;
		this.ySpeed *= -1;
	}
}