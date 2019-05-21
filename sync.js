//비동기 함수
var fs = require('fs');
console.log('A');

var result = fs.readFileSync('./example.txt', 'utf8');
console.log(result);
console.log('C');