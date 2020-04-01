class Pelota{
	
	constructor(x,y,c,tw,th,id){
		
		this.x=x
		this.y=y
		this.c=c
		this.tw=tw
		this.th=th
		this.id=id
		this.speedX= 2 * this.direction()
		this.speedY= 2 * this.direction()
	}


	draw(){
		push()
		noStroke()
		fill(this.c)

		ellipse(this.x,this.y,40,40)
		pop()
	}

	move(){
		if (this.x <= 0) {
			this.speedX=this.speedX*-1
		}else if (this.x >= this.tw) {
			this.speedX=this.speedX*-1
		}

		if (this.y <= 0) {
			this.speedY=this.speedY*-1
		}else if (this.y >= this.th) {
			this.speedY=this.speedY*-1
		}



		
		this.x+=this.speedX
		this.y+=this.speedY
	}

	cambiarDireccion(){
		this.speedX=this.speedX*-1
		this.speedY=this.speedY*-1
	}

	

	direction(){
		
		return floor(random(2))* 2 - 1

	}

	//gets

	get getspeedX(){

	}
	get posX() {
    	return this.x;
  	}

  	get posY() {
    	return this.y;
  	}

  	get getId() {
    	return this.id;
  	}

  	get color() {
    	return this.c;
  	}
}