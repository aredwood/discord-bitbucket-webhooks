//requirements
let express = require("express");
let Discord = require("discord.js");
let morgan = require("morgan");
let config = require("./config");


//instantiations
let app = express();

//middleware
app.use(morgan("tiny"));






app.get("/",(req,res) => {
    res.sendStatus(200);
});









app.listen(process.env.port_no || 3000);










