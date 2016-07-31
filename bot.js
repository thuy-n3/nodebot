

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var left = new five.Servo({pin: 11, type: "continuous"});
  var right = new five.Servo({pin: 12, type: "continuous", invert: true});

  var servos = new five.Servos([left, right]);

  servos.cw();

  this.wait(5000, function() {
    servos.stop();
  });
});