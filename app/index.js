// Main program execution app/index.js
var Gpio = require('onoff').Gpio,
  sensor = new Gpio(17, 'in', 'both');    //#A
  var instance = 0 ;

sensor.watch(function (err, value) { //#B
  if (err) exit(err);
  console.log('\033[2J');
  if(value) instance++;
  console.log(value ? 'Flame Detected, Instance :: '+instance : 'No Flame Detected');
});

function exit(err) {
  if (err) console.log('An error occurred: ' + err);
  sensor.unexport();
  console.log('Bye, bye!')
  process.exit();
}
process.on('SIGINT', exit);
