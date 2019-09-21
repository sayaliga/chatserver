const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chatapp"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;