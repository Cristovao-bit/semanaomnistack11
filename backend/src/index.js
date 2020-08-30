const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
* Rota / Recurso
*/

/**
* MÉTODOS HTTP
*
* GET: buscar/listar uma informação no backend
* POST: criar uma informação no backend
* PUT: alterar uma informação no backend
* DELETE: deletar uma informação no backend
*/

/**
* TIPOS DE PARAMETROS
*
* QUERY PARAMS: parametros nomeados enviados na rota após "?" (filtros, paginação)
* ROUTES PARAMS: parametros utilizados para identificar recursos
* REQUEST BODY: corpo da requisição, utilizado para criar ou alterar recursos
*
*/

/**
 * SQL: MySQl, sqlite, PostgreSQl, Oracle, Microsoft SQL server
 * NoSQL: MongoDB, CouchDB...  
 */

 /**
  * Comunicação com o banco de dados
  * 
  * DRIVER: SELECT * FROM users
  * Query Builder: table ('users').select('*').where();
  * 
  * Query Builder = knex.js
  */

app.listen(3333);