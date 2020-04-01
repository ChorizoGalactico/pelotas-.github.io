class Paddle{
	
	constructor(x,y,w,h,c){
		this.x=x
		this.y=y
		this.w=w
		this.h=h
		this.c=c
		this.speed=2
	}

	draw(){
		push()
		noStroke()
		fill(this.c)
		rect(this.x,this.y,this.w,this.h)
		pop()
	}

	moveUp(){
		this.y-=this.speed
	}

	moveDown(){
		this.y+=this.speed
		
	}
}