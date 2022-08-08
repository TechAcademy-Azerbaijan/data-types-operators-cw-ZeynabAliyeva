const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    var input = result.input;
    var numbers = input.split(',');
    var x = parseInt(numbers[0]);
    var y = parseInt(numbers[1]);
    var cvb = parseInt(x/y);
console.log(cvb)
  
});
