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
  var tipoVivienda = req.body.tipoVivienda;
  var annos = req.body.annos;
  var interes=Number(req.body.interes);

  var precioVivienda;

    switch (tipoVivienda) {
      case "piso":
        precioVivienda=180000;
        break;
      case "chalet":
        precioVivienda=300000;
        break;
      case "duplex":
        precioVivienda=220000;
        break;
    } //fin  del switch

var meses=annos*12;
// calculo la cuota mensual
var cuota= (precioVivienda/((1-Math.pow(1+interes,-meses))/interes)).toFixed(2);

// envio el resultado al navegador
res.send("<h1>La cuota mensual es: " + cuota + "€</h1>");
}); //fin del app.post

// pongo a escuchar el server
app.listen(3000, function() {
  console.log("Estoy activo ;)");
});
