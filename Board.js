class Board{
	constructor(w,h,c){
		this.w=w
		this.h=h
		this.c=c
	}

	draw(){
		push()
		noStroke()
		fill(this.c)
		rect(0,0,this.w,this.h)
		stroke('white')
		strokeWeight(10)
		line(floor(this.w/2),0,floor(this.w/2),this.h)
		pop()
	}

}