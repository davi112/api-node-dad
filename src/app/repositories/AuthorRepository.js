const db = require('../../database');

class AuthorRepository {

  async findAll(orderBy)
  {
    const rows = await db.query(`SELECT * FROM autor ORDER BY nome`);
    return rows;
  }

  async findById(id) {

  }

  async create({nome, biografia}){
    const [ row ] = await db.query(`
          INSERT INTO autor (nome, biografia)
          VALUES ( $1, $2)
          RETURNING *
      `, [nome, biografia]);
    return row;
  }

  async update(id, {
    titulo, sinopse, numPaginas, anoLancamento, autor
  }){

  }

  async delete(id){
    const deleteOp = await db.query('DELETE FROM autor WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new AuthorRepository();