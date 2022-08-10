const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
 let n = result.input; 
 let cvb = parseInt(n/10);
 console.log(cvb);

});
