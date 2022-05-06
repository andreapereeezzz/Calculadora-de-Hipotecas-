// jshint esversion:6

// inicializo módulos

// 1.Express
const express = require("express");
const app = express();
app.use(express.static("public"));

// 2.body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

// área enrutamientos
app.get("/", function(req, res) {
  // muestro el index
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // recojo los datos del formulario
  // var edad = req.body.;
  // var familiar = req.body.;


}); //fin del app.post

// pongo a escuchar el server
app.listen(3000, function() {
  console.log("Estoy activo ;)");
});
