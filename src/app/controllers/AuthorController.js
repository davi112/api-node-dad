const AuthorRepository = require('../repositories/AuthorRepository');

class AuthorController {

  async index(request, response){
    const authors = await AuthorRepository.findAll();
    return response.json(authors);
  }

  show(request, response){
    response.send('ok - show');
  }

  async store(request, response){
    const { nome, biografia } = request.body;

    let erros = [];
    if(!nome){
      erros.push('Nome: campo obrigatório não informado');
    }

    if(!biografia){
      erros.push('Biografia: campo obrigatório não informado');
    }

    if(erros.length > 0){
      return response.status(400).json({errors: erros});
    }

    const author = await AuthorRepository.create({
      nome, biografia
    });

    response.status(201).json(author);
  }

  update(request, response){
    response.send('ok - update');
  }

  delete(request, response){
    response.send('ok - delete');
  }
}

module.exports = new AuthorController();