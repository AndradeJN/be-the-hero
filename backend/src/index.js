/**
 * Semana OmniStack 11.0
 * Jose Andrade
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // "./" para arquivo, "../" para voltar uma pasta

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Busca/listar uma informação do back-end
  * POST: Cria uma nova informação no back-end
  * PUT: Quando queremos alterar uma informação
  * DELETE: Quando precisamos deletar algo no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o simbolode de "?"", geralemte servem como (Filtros , paginação)
   * Route Params: Parâmetros ultilizados para identificar recursos
   * Request Body: Corpo da requisição, usado para alterar ou criar recursos
   */

   /**
    * BAncos de dados:
    * 
    * SQL: MySQL, SQLite, Oracle etc.
    * NoSQL: MongoDB, CouchDB, etc.
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


app.listen(3333);
