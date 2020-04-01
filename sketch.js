let board
let p1
let p2
let pelota
let pecol
let colicion
let color
let id=0
var lista=[];
let bg

function setup() {
	bg = loadImage('img/fondo.jpg')
	createCanvas(windowWidth, windowHeight);
	board = new Board(windowWidth, windowHeight, '#1c1605')
	let pw = 30
	let ph = 100
	let py = floor(windowHeight / 2) - floor(ph / 2)
	p1 = new Paddle(0, py, pw, ph, 'red')
	p2 = new Paddle(windowWidth - pw, py, pw, ph, 'blue')
	
	
}

function draw() {
	//sboard.draw()
	p1.draw()
	p2.draw()
	
	background('orange')
	
	lista.forEach(function(i){
    	pecol=i;
    	pecol.draw();
    	pecol.move();
    	
    	lista.forEach(function(i){


			colicion=i;

			if (pecol.getId != colicion.getId) {
				
				if ((pecol.posX>=colicion.posX && pecol.posX<=colicion.posX+20) && (pecol.posY>=colicion.posY && pecol.posY<=colicion.posY+20)) {
    				pecol.cambiarDireccion();
    				colicion.cambiarDireccion()
    				console.log('coliciono id= '+ pecol.getId + 'con id= ' + colicion.getId)
    				console.log('coliciono x= '+ pecol.posX + 'con y= ' + pecol.posY + '//// x= '+ colicion.posX + 'con y= ' + colicion.posY)
    			
    			}else{

    			}
			}else{

			}
    		
    	
    	
		});
    	
	});
}

function keyPressed () {
	if(keyCode === 87) {
		p1.moveUp()

	} else if(keyCode === 83) {
		p1.moveDown()
	} else if(keyCode === UP_ARROW) {
		p2.moveUp()
	}  else if(keyCode === DOWN_ARROW) {
		p2.moveDown()
	}
	
	
}

function mousePressed () {
	
	pelota = new Pelota(floor(mouseX),floor(mouseY),getRandomColor(),floor(windowWidth),floor(windowHeight ),id)
	lista.push(pelota);
	
	id+=1
	
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}