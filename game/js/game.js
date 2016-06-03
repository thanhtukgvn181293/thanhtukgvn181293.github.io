var canvas, ctx
	
	var game = {
		width: 500,
		height: 500
	}
	var gamer = {
		width: 300,
		height: 100
	}
	
	gamer.win = function() {
		var img = new Image()
		img.src='images/win.jpg'
		ctx.drawImage(img,100,100);
	}
	gamer.lose = function() {
		var img = new Image()
		img.src='images/lose.jpg'
		ctx.drawImage(img,100,100);
	}
	
	var game = {
		width: 500,
		height: 500
	}
	
	game.init = function() {
		canvas = document.getElementById('canvasid')
		ctx = canvas.getContext('2d')
		this.setsize()
		this.loop()
	}
	game.setsize = function() {
		canvas.width = this.width
		canvas.height = this.height
	}
	game.draw = function() {
		ctx.clearRect(0, 0, this.width, this.height)
		ctx.beginPath()
		for (var i = 0; i <= 9; i++) {
			for (var j = 0; j<=9; j++) {
				if (wall.x[i][j] == 1){
					var img = new Image();
					img.src='images/wallx.png'
					ctx.drawImage(img,50*j,50*i)
				}
			}
		}
		
		for (var i = 0; i <= 9; i++) {
			for (var j = 0; j<=9; j++) {
				if (wall.y[i][j] == 1){
					var img = new Image();
					img.src='images/wally.png'
					ctx.drawImage(img,50*j,50*i)
				}
			}
		}
		ctx.strokeStyle = 'white'
		ctx.stroke()
		player.draw(player.lane)
		boss.draw(boss.lane)
		win.draw()
	}
	game.update = function() {
		player.update()
	}
	game.loop = function() {
		this.update()
		this.draw()
		setTimeout(function() { game.loop() }, 100)
	}
	game.processInput = function(e) {
		var keycode = e.keyCode
		var rule = false
		var wallx = player.x/50
		var wally = player.y/50
		if (keycode == 37 && wall.x[wally][wallx] == 0) {
			if( player.x - 50 >=0) {
				if (boss.x < player.x - 100) {
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				} else if (boss.x == player.x - 100 && boss.y >= player.y){
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				} else if (boss.x == player.x - 100 && boss.y <= player.y){
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				}else if (boss.x > player.x) {
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				} else if (boss.x == player.x - 50 && boss.y > player.y) {
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				}else if (boss.x == player.x - 50 && boss.y < player.y) {
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				}else if (boss.x == player.x - 50 && boss.y == player.y) {
					player.x -= 50
					player.lane = 1
					boss.lane = 0
					boss.draw(boss.lane)
				}else if (boss.x == player.x && boss.y > player.y ) {
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				} else if (boss.x == player.x && boss.y < player.y ) {
					player.x -= 50
					player.lane = 1
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				}
			}
		}
		wallx = (player.x+50)/50
		wally = player.y/50
		if (keycode == 39 && wall.x[wally][wallx] == 0){
			if( player.x + 50 <=this.width - 50) {
				if (boss.x > player.x + 100) {
					player.x += 50
					player.lane = 3
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				} else if (boss.x == player.x + 100 && boss.y >= player.y){
					player.x += 50
					player.lane = 3
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				} else if (boss.x == player.x + 100 && boss.y <= player.y){
					player.x += 50
					player.lane = 3
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				}else if (boss.x < player.x) {
					player.x += 50
					player.lane = 3
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				} else if (boss.x == player.x + 50 && boss.y > player.y) {
					player.x += 50
					player.lane = 3
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				}else if (boss.x == player.x + 50 && boss.y < player.y) {
					player.x += 50
					player.lane = 3
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				}else if (boss.x == player.x + 50 && boss.y == player.y) {
					player.x += 50
					player.lane = 3
					boss.lane = 0
					boss.draw(boss.lane)
				}else if (boss.x == player.x && boss.y > player.y ) {
					player.x += 50
					player.lane = 3
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				} else if (boss.x == player.x && boss.y < player.y ) {
					player.x += 50
					player.lane = 3
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				}
			}
		}
		wallx = player.x/50
		wally = player.y/50
		if (keycode == 38 && wall.y[wally][wallx] == 0){
			if( player.y - 50 >=0) {
				if (boss.y < player.y - 100) {
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				} else if (boss.y == player.y - 100 && boss.x >= player.x){
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				} else if (boss.y == player.y - 100 && boss.x <= player.x){
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				}else if (boss.y > player.y) {
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				} else if (boss.y == player.y - 50 && boss.x > player.x) {
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				}else if (boss.y == player.y - 50 && boss.x < player.x) {
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				}else if (boss.y == player.y - 50 && boss.x == player.x) {
					player.y -= 50
					player.lane = 2
					boss.lane = 0
					boss.draw(boss.lane)
				}else if (boss.y == player.y && boss.x > player.x ) {
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				} else if (boss.y == player.y && boss.x < player.x ) {
					player.y -= 50
					player.lane = 2
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				}
			}
		}
		wallx = player.x/50
		wally = (player.y+50)/50
		if (keycode == 40 && wall.y[wally][wallx] == 0){
			if( player.y + 50 <=this.width - 50) {
				if (boss.y > player.y + 100) {
					player.y += 50
					player.lane = 0
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 2
						setTimeout(function() {boss.y -= 50},200)
					}
				} else if (boss.y == player.y + 100 && boss.x >= player.x){
					player.y += 50
					player.lane = 0
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				} else if (boss.y == player.y + 100 && boss.x <= player.x){
					player.y += 50
					player.lane = 0
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.y[wally][wallx] == 0) {
						boss.y -= 50
						boss.lane = 2
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				}else if (boss.y < player.y) {
					player.y += 50
					player.lane = 0
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0 && rule) {
						boss.lane = 0
						setTimeout(function() {boss.y += 50},200)
					}
				} else if (boss.y == player.y + 50 && boss.x > player.x) {
					player.y += 50
					player.lane = 0
					rule = false
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x -= 50
						boss.lane = 1
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				}else if (boss.y == player.y + 50 && boss.x < player.x) {
					player.y += 50
					player.lane = 0
					rule = false
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0) {
						boss.x += 50
						boss.lane = 3
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				}else if (boss.y == player.y + 50 && boss.x == player.x) {
					player.y += 50
					player.lane = 0
					boss.lane = 0
					boss.draw(boss.lane)
				}else if (boss.y == player.y && boss.x > player.x ) {
					player.y += 50
					player.lane = 0
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = boss.x/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 1
						setTimeout(function() {boss.x -= 50},200)
					}
				} else if (boss.y == player.y && boss.x < player.x) {
					player.y += 50
					player.lane = 0
					rule = false
					wallx = boss.x/50
					wally = (boss.y+50)/50
					if (wall.y[wally][wallx] == 0) {
						boss.y += 50
						boss.lane = 0
						rule = true
					}
					boss.draw(boss.lane)
					wallx = (boss.x+50)/50
					wally = boss.y/50
					if (wall.x[wally][wallx] == 0 && rule) {
						boss.lane = 3
						setTimeout(function() {boss.x += 50},200)
					}
				}
			}
		}
	}