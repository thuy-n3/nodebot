
var five = require("johnny-five");
var board = new five.Board();
var keypress = require("keypress");

// board.on("ready", function() {
//   var left = new five.Servo({pin: 11, type: "continuous"});
//   var right = new five.Servo({pin: 12, type: "continuous", invert: true});
//   var servos = new five.Servos([left, right]);

//   var commands = {
//     left: function() { left.cw();right.ccw(); },
//     right: function() { left.ccw();right.cw(); },
//     fwd: function(speed) { servos.cw(speed); },
//     rev: function(speed) { servos.ccw(speed); },
//     stop: function() { servos.stop(); }
//   };

//   this.repl.inject(commands);

// });


// > fwd();

// > stop();

// > rev(0.5);

// > stop();

// > left();

// > stop();



board.on("ready", function() {
  var left = new five.Servo({pin: 11, type: "continuous"});
  var right = new five.Servo({pin: 12, type: "continuous", invert: true});
  var servos = new five.Servos([left, right]);

  var commands = {
    left: function() { left.cw();right.ccw(); },
    right: function() { left.ccw();right.cw(); },
    fwd: function(speed) { servos.cw(speed); },
    rev: function(speed) { servos.ccw(speed); },
    stop: function() { servos.stop(); }
  };

  keypress(process.stdin);

   process.stdin.on("keypress", function(ch, key) {
    if (!key) return;
    if (key.name === "up") commands.fwd();
    if (key.name === "down") commands.rev();
    if (key.name === "left") commands.left();
    if (key.name === "right") commands.right();
    if (key.name === "space") commands.stop();
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();

   this.repl.inject(commands);

});


//space bar for stop!
