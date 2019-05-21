var express = require("express"),
app = express();
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// app.get('/weather', function(req, res){
//     var request = require('request');
//     var parseString = require('xml2js').parseString;

//     request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function(error, response, body){
//         //console.log('error', error);
//         //console.log('statusCod: ', response && response.statusCode);
//         //console.log('body: ', body);

//         parseString(body, function(err, result){
//             res.send(result.rss.channel[0].item[0].description[0].body[0].location[0].city[0]);
//         });
    
//     });

// });

app.get("/sayHello", function (request, response) {
	var user_name = request.query.user_name;
	response.end("Hello " + user_name + "!");
});

app.get("/mysql", function (req, res){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '@w15973062',
        database: 'fintech'
    });

    connection.query('SELECT * FROM fintech.user', function (error, results, fields) {
        if (error) throw error;
        res.send(results[0]);
    });
})

app.get("/ejsTest", function(req, res){
    res.render('main');

})


app.listen(port);
console.log("Listening on port ", port);
