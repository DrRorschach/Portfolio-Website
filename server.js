const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connection = require("/Users/emrec/Desktop/Meine Projekte/projekt_portfolio/db.js");

const app = express();
app.use(express.urlencoded({extended: false}))

const PORT = 3000;

app.use(express.static(path.join(__dirname,'static')));
app.use(express.static('public'));


/**req = request - res = response*/
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/sql.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/sql.html"));
});

app.get("/impressum.html", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/impressum.html"));
});

app.post("/api", function(req, res){
    console.log(req.body)
    const username = req.body.user;
    console.log(username)
    const password = req.body.password
    console.log(password)
    //Safe against SQL injections because we specify what kind of values to accept.
    connection.query("INSERT INTO  sql_injection (user, password) VALUES (?,?)",
    [username,password],
    (err, result) =>{
        console.log(err);
    }
)})

app.post("/login", function(req, res){
    const username1 = req.body.user1
    const password1 = req.body.password1
        //Unsafe query vulnerable, for example, to "xy' OR 1=1#" attack. 
        connection.query("SELECT * FROM sql_injection WHERE user = '" + req.body.user1 + "' AND password = '" + req.body.password1 + "' ", 
        [username1, password1],
    (err, result) =>{
        if (err){
            res.send({err: err})
        }
        if (result.length > 0){
            res.send({Message: "Logged in"})
            console.log()
        } else {
            res.send({Message: "Wrong username/password"})
        }
    }
     )
})

app.listen(PORT, function(){
    console.log("server is working")
    connection.connect(function(err){
        if(err) throw err;
        console.log("database is working")
    })
})


