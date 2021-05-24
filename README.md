
<h1 align="center">Guia Perguntas</h1>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- Bootstrap
- JavaScript
- Ejs
- NodeJs
- Mysql
- Express
- Sequelize


## 💻 Projeto
<p align="justify">Projeto simples de Perguntar e Responder tipo o yahoo.</p>

<h3 align="center">Demonstração</h3>

![Animação](https://user-images.githubusercontent.com/48605830/119292269-730dde80-bc26-11eb-80b8-4ca802c3a581.gif)

#Executar o projeto
```
npm install 
npm run dev 
```
#Exemplo de conexão com o mysql para funcionar o projeto 
database/database.js
```
const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','suaSenhaMysql',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
```

