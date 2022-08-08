const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    var input = result.input;
    var input_data = input.split(',');
    var n = parseInt(input_data[0]);
    var massiv = input_data[1].split(' ');
    console.log(input_data);
  
});
