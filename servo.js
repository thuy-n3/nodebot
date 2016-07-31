var five = require("johnny-five"); 
var board = new five.Board();

// board.on("ready", function(){
// 	var left = new five.Servo({
// 		type: "continuous", 
// 		pin: "11"
// 	});

// 	var right = new five.Servo({
// 		type: "continuous", 
// 		pin: "12"
// 	});



// 	this.repl.inject({
// 		servo: 
// 	});
// });

board.on('ready', function(){
	var left = new five.Servo({ pin:11 });
	var right = new five.Servo({ pin: 12});
	var servos = new five.Servos([left,right]);

	servos.cw();

	this.wait(3000, function(){
		servos.stop();
	});
});



