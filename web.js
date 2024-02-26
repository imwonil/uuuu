const express = require("express")
const app = express();
const bodyParser = require('body-parser'); 
var store = require('store')
app.set("views",  "./src/views") 
 
app.set("view engine" , "ejs")

app.use(express.static(__dirname+'/src/public'));



app.use(express.json());
app.use(express.urlencoded({extended: true}));
const home = require("./src/routers/home")
const kokoserver = require("./src/routers/home/kokoserver")
const inspect= require("./src/routers/home/inspect")
app.use("/", home);
app.use("/", kokoserver)
app.use("/", inspect)

app.listen(8001, (req, res) =>{
     console.log("succession")
})








 module.exports = app;