var request = require('request');
var parseString = require('xml2js').parseString;

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function(error, response, body){
    console.log('error', error);
    console.log('statusCod: ', response && response.statusCode);
    //console.log('body: ', body);

    parseString(body, function(err, result){
        console.dir(result.rss.channel[0].item[0].description[0].body[0].location[0].city);
    });
    
});




