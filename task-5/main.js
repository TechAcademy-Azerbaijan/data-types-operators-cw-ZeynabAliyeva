const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    var number = parseInt(result.input); 
    console.log(number);
  
});
