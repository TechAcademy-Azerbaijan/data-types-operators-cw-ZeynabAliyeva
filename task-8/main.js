const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseInt(result.input);
    let b = parseInt(a/10); //12
    let c = parseInt(a%10) //3
    let cvb = c*100 + b*1
    console.log(cvb);
  
});
