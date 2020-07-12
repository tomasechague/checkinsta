// requerimos los paquetes instalados
const express = require('express');
const ig = require('instagram-node').instagram();

// creamos la app con express
var app = express();

// especificamos a node la ruta
app.use(express.static(__dirname + '/public'));

// especificamos que utilizaremos ejs como motor de vistas
app.set('view engine', 'ejs');

// creamos la ruta
app.get('/', function (req, res) {

   ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
     // render the home page and pass in the popular images
     res.render('pages/index', { grams: medias });
  });
});

// configure instagram app with your access_token
ig.use({
    access_token: 'YOUR_ACCESS_TOKEN',
  });


// especificamos el puerto
app.listen(8080);
console.log('Escuchando en el puerto 8080');





/*
http://instagram.pixelunion.net/
Ir a esta pagina porque deprecaron la API de instagram hasta el 29 de junio

https://www.npmjs.com/package/instagram-node
En esta pagina es donde estan todas las funciones que podemos usar con instagram, para ver lo seguidores, etc
*/