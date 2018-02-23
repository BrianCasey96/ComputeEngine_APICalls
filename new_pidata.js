var express = require('express');
var app = express();

app.get('/allData', function (req, res) {
   
    var sql = require("mysql");

    // config for your database
    var config = sql.createConnection( {
        user: 'root',
        password: 'butterfly',
        host: '35.205.189.63', 
        database: 'plant_data' 
    });


    // connect to your database
    config.connect(function (err) {
    
        if (err) console.log(err);

        // create Request object
       // var request = new sql.Request();
           
        // query to the database and get the records
        config.query('select * from pidata', function (err, recordset, fields) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
        });
    });
});

var server = app.listen(8080, function () {
    console.log('Server is running..');
});
