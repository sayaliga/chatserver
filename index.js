const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const getUser = require("./queries");

app.use(cors());
app.use(bodyParser.json());

app.post("/", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    getUser(username, password, (err, result) => {
        if (err) throw err;

        if (result.length) {
            res.status(200).json({ loggedin: "true"});
        }
        res.status(200).json({ error: "Invalid login credentials"});
    });
});

io.on("connection", (client) => {
  io.emit("connected");
});

http.listen(8000, function(){
    console.log('listening on *:8000');
});