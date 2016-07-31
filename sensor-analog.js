//7 

var Barcli = require("barcli"); 
var five = require("johnny-five"); 

var board = new five.Board(); 

board.on("ready", function(){
	var range = [0, 1024]; 
	var graph = new Barcli({
		label: "Potentiometer",
		range: range,
	});

	var rotary = new five.Sensor("A0");

	rotary.scale(0,1024).on('change', function(){
		graph.update(this.value);
	});	
});