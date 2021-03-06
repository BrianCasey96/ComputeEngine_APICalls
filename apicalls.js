var express = require('express');
var app = express();
var con = require('./../config');
var sql = require("mysql");

    // config for your database
    var config = sql.createPool( {
        user: con.user,
        password: con.passwd,
        host: '35.205.189.63', 
        database: con.db 
    });

config.getConnection(function(err, connection) {              
     if(err) {                                     
      console.log('error when connecting to db:', err);
    }                                    
                                   
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
