const express = require('express');
const app = express();

app.set('view engine','ejs'); //dizendo que a view engine motor de html que quero ultilizar usar o ejs como view engine.
app.use(express.static('public')) //página estatica arquivos estaticos css js front end img etc
app.get('/',(req, res) => {
  res.render('index');
});
app.get('/perguntar', (req, res) => {
   res.render('perguntar'); //renderize a views perguntar.ejs
});

app.listen(3333,() => {
 console.log('BackEnd started 🚀');
});