var mysql = require('mysql');

var config = mysql.createConnection({
	host: 'sql2.freemysqlhosting.net', 
    user: 'sql2202637',
    password: 'aI7%wK3%',
    database: 'sql2202637' 
});
// connect to your database
config.connect(function (err) {
    if (err) throw err;
    // create Request object
  //  var request = new sql.Request();
    // query to the database and get the records
    config.query('select * from Date_and_Value', function (err, result, fields) {
        if (err) throw err;
        // send records as a response
        console.log(result);
    });
});
