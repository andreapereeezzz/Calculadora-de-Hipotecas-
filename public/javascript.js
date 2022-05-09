// jshint esversion:6

// valido el formulario antes de enviarselo al server
var botonEnviar = document.querySelector(".botonEnviar");
botonEnviar.addEventListener("click", function() {
  let tipoCasa = formulario.tipoVivienda.value;
  let annos = formulario.annos.value;
  let interes = formulario.interes.value;

  if ((tipoCasa == "...") || (annos == "...") || (interes == "...")) {
    // aviso del error y termino sin enviar al server
    alert("El formulario está incompleto");
    return false;
  }

  // envio el formulario por que esta incompleto
  formulario.submit();
}); //fin del addEventListener

// voy a poner a escuhar los cambios que realize el usuario en la lista del tipo de vivienda para cambiar la foto
var tipoVivienda = formulario.tipoVivienda;
tipoVivienda.addEventListener("change", function() {

  // cambiamos la foto de la vivienda
  var nuevaVivienda = formulario.tipoVivienda.value;
  var foto = document.querySelector(".fotoCasa");

  // cambio la imagen de la foto
  switch (nuevaVivienda) {
    case "piso":
      foto.src = "../imagenes/piso.jpg";
      break;
    case "chalet":
      foto.src = "../imagenes/chalet.jpeg";
      break;
    case "duplex":
      foto.src = "../imagenes/duplex.png";
      break;
  }
});
