const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs'); //dizendo que a view engine motor de html que quero ultilizar usar o ejs como view engine.
app.use(express.static('public')); //página estatica arquivos estaticos css js front end img etc
app.use(bodyParser.urlencoded({extended: false}));
//permite que a pessoa envie os dados do formulario e o body parser vai traduzir
//esses dados em uma estrutura javascript para que consigamos usar dentro do projeto
//vai decodificar os dados enviados pelo usuario~
app.use(bodyParser.json()); //permite ler dados enviados pelo form via json 

//Rotas
app.get('/',(req, res) => {
  res.render('index');
});
app.get('/perguntar', (req, res) => {
   res.render('perguntar'); //renderize a views perguntar.ejs
});
app.post('/salvarpergunta', (req, res) => {
   let titulo = req.body.titulo; //nome que demos pro input do perguntar
   let descricao = req.body.descricao;
   res.send(`Formulario recebido <br> titulo: ${titulo} <br> descrição:${descricao}`);
});

 
app.listen(3333,() => {
 console.log('BackEnd started 🚀');
});