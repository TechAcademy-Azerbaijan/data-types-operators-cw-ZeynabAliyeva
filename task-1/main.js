const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input;
    let n = input.split(',');
    let a = parseInt(n[0]);
    let b = parseInt(n[1]);
    let c = parseInt(n[2]);
    let cvb = a**b ;
    console.log(cvb);
  
});
