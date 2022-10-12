const { application } = require("express");

let cofigViewEngine=()=>{
    app.use(express.static("./src/public"));
    app.set("view engine","ejs");
    app.set("views","./src/views")
}
module.exports= configViewEngine;