const express = require('express')
const path = require('path')
const axios = require('axios');
const Datastore = require('nedb');
const bodyParser = require("body-parser");

const app = express();
app.use('/',express.static(path.join(__dirname,'static')))
app.use(express.json());

const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const db = new Datastore('login.db');
const db2 = new Datastore('favorites.db');
db.loadDatabase();
db2.loadDatabase();

var port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../trails/build")));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../trails/build', 'index.html'));
});

app.post('/register', (req,res)=> {
    const store = req.body
    console.log(req.body);
    db.insert(store)
    res.send({message: "Successfully created account. Please Log in!" });
})

app.post('/login',(req,res)=> {
    const emaile = req.body.email
    const passworde = req.body.password
    db.find({email: emaile }, {password: passworde}, function (err, result) {
        console.log(result.length)
        if (result.length > 0) {
            res.send({message: "Logged In! Successful Input" });
        } else {
            res.send({message: "Login Authentication Fail. Invalid Email/or Password"});
        }
      });
})

app.post('/add', (req,res)=> {
    const store = req.body
    console.log(req.body);
    db2.insert(store)
})

app.get("/favorite", function (req, res) {
    db2.find({ }, function (err, info) {
      res.send(info);
    });
  });
  

app.listen(port);
console.log("Server listening on port " + port);