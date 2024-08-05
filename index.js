const express = require('express');
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

app.engine("ejs",ejsMate);

app.get("/",(req,res)=>{
   res.render("listings/home.ejs");
});

app.listen(8080,(req,res)=>{
    console.log('server is running on port 8080');
})