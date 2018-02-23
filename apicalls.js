var express = require('express');
var app = express();
	    
   var sql = require("mysql");

    // config for your database
    var config = sql.createPool( {
        user: 'root',
        password: 'butterfly',
        host: '35.205.189.63', 
        database: 'plant_data' 
    });

config.getConnection(function(err, connection) {              // The server is either down
     if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
    }                                     // to avoid a hot loop, and to allow our node script to
                                     // process asynchronous requests in the meantime.
app.get('/allData', function (req, res) {    

        // query to the database and get the records
        config.query('select * from pidata', function (err, recordset, fields) {
            
        if (err) console.log(err)

           res.send(JSON.stringify(recordset));
        });
},);

app.get('/top', function (req, res) { 
        // query to the database and get the records
        config.query('select * from pidata order by time_value desc LIMIT 1', function (err, r, fields) {
            
        if (err) console.log(err)

            res.send(JSON.stringify(r));
        });
},);

 connection.end();
});

var server = app.listen(8080, function () {
    console.log('Server is running..');
});
