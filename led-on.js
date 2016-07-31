//1

var five = require("johnny-five"); 
var board = new five.Board();

board.on('ready',function(){
	var led = new five.Led(11);
	led.on();
});


//the light attachment: one short and one long leg/ long is postive 
//to run and test if the light : node led-on.js
//the 11 is referencing the port on the bread board. 
//so you have to plug into port 11 on bread board for the light to work 