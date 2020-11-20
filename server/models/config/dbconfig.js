var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost:3306',
  user            : 'root',
  password        : 'Tripathi31!',
  database        : 'users'
});

 