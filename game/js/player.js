var player = {
		x: 0,
		y: 250,
		width: 50,
		height: 50,
		lane: 0
	}
	
	player.draw = function(x) {
		var img = new Image();
		if(x==0){
			img.src='images/playerbot.png'
		} else if(x==1){
			img.src='images/playerleft.png'
		} else if(x==2){
			img.src='images/playertop.png'
		} else if(x==3){
			img.src='images/playerright.png'
		}
    	ctx.drawImage(img,this.x,this.y);
		if (player.x == win.x && player.y == win.y) {
			win.x = player.x
			win.y = player.y
			win.draw()
			gamer.win()
		}
	}
	player.update = function() {
	}