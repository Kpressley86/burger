// Set up MySQL connection.
var mysql = require("mysql");
var connection
= mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
   password: "pasword",
   database: "burgers_db"
 });

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;