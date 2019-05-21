var fs = require('fs');

function callbackFunc(callback){
    fs.readFile('./example.txt', 'utf8', function(err, result){
        if(err){
            console.log(err);
            throw err;
        }
        else{
            console.error("두번째 기능");
            callback(result);
        }
    });
}

console.log("A");
callbackFunc(function(data){
    console.log(data);
    console.log("C");
})