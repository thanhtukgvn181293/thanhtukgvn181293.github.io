var boss = {
		x: 400,
		y: 450,
		width: 50,
		height: 50,
		lane: 0
	}
	
	boss.draw = function(x) {
		var img = new Image();
		if ((this.x + this.y) % 100 != 0){
			if(x==0){
				img.src='images/bossbot.png'
			} else if(x==1){
				img.src='images/bossleft.png'
			} else if(x==2){
				img.src='images/bosstop.png'
			} else if(x==3){
				img.src='images/bossright.png'
			}
		}else if ((this.x + this.y) % 100 == 0){
			if(x==0){
				img.src='images/bossbotb.png'
			} else if(x==1){
				img.src='images/bossleftb.png'
			} else if(x==2){
				img.src='images/bosstopb.png'
			} else if(x==3){
				img.src='images/bossrightb.png'
			}
		}
    	ctx.drawImage(img,this.x,this.y)
		if (player.x == boss.x && player.y == boss.y) {
			lose.x = player.x
			lose.y = player.y
			lose.draw()
			gamer.lose()
		}
	}
	boss.update = function() {
	}
	
	var lose = {
		x: 0,
		y: 0,
		width: 50,
		height: 50
	}
	
	lose.draw = function() {
		var img = new Image();
		img.src='images/lost.png'
    	ctx.drawImage(img,this.x,this.y);
	}
	
	var win = {
		x: 450,
		y: 100,
		width: 50,
		height: 50
	}
	
	win.draw = function() {
		var img = new Image();
		img.src='images/winright.png'
    	ctx.drawImage(img,this.x,this.y);
	}
	win.update = function() {
	}
	
	var wall = {
		x: [[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]],
		y : [[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,0,0,0,0,0],
				[0,0,1,1,0,1,0,0,0,0]]
	}
	game.play = function () {
		window.onkeydown = function(e) { game.processInput(e) }
		game.init()
	}
	game.play()