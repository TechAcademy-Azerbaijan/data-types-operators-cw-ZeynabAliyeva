const { listenerCount } = require('process');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
 var input = result.input;
 var number = input.split(',')
 var n = parseInt(number[0]);
 var m = parseInt(number[1]);
 var cvb = n**m
 console.log(cvb)
 
  
});
