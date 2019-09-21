const db = require("./db");

module.exports = (username, password, callback) =>
    db.query(`select * from user where user = '${username}' && password = '${password}'`, callback)