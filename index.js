const express = require('express');

const app = express();

app.set('view engine','ejs'); //dizendo que a view engine motor de html que quero ultilizar usar o ejs como view engine.

app.get('/',(req, res) => {
  res.render('index') //render desenhar algo na tela index da pasta views
});

app.listen(3333,() => {
 console.log('BackEnd started 🚀');
});