const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseInt(result.input)
    let b = parseInt(a%10) 
    let c = parseInt((a%100)/10) 
    let d = parseInt((a%1000)/100) 
    let k = parseInt(a/1000) 
    let cvb = ((b*1000)+(c*100)+(d*10)+(k*1))      
    console.log(cvb)  
});
