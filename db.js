const mysql = require("mysql2")

var db = mysql.createConnection({
    host: "localhost",
    database: "resume_schema",
    user: "root",
    password: "]3u#_AshZ4@vTW5fUrK:"
})

module.exports = db;