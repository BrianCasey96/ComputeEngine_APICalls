var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mysql");

    // config for your database
    var config = sql.createConnection( {
        user: 'sql2202637',
        password: 'aI7%wK3%',
        host: 'sql2.freemysqlhosting.net', 
        database: 'sql2202637' 
    });

    // connect to your database
    config.connect(function (err) {
    
        if (err) console.log(err);

        // create Request object
       // var request = new sql.Request();
           
        // query to the database and get the records
        config.query('select * from Date_and_Value', function (err, recordset, fields) {
            
            if (err) console.log(err)

	    res.setEncoding('utf8');
            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(8080, function () {
    console.log('Server is running..');
});
