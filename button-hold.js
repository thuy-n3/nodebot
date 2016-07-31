//6

var five = require("johnny-five"); 
var board = new five.Board();

board.on('ready',function(){
	var led = new five.Led(11)
	var button = new five.Button(2);

	button.on('press', function(){
		led.on();
		console.log('Button Press!!');
	});
	button.on('hold', function(){
		led.blink(50);
	})
	button.on('release', function(){
		
		led.off();
		console.log('Button Release!!');
	});

	// this.repl.inject({
	// 	led:led
	// });
});


