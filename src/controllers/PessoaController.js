const db = require("../models");

class PessoaController {
  static async getAllPersons(req, res) {
    try {
      const todasAsPessoasl = await db.Pessoas.findAll();
      return res.status(200).json(todasAsPessoasl);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
