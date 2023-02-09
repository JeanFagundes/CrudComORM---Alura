const db = require("../models");
const pessoas = require("../models/pessoas");

class PessoaController {
  static async getAllPersons(req, res) {
    try {
      const todasAsPessoas = await db.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOnePeople(req, res) {
    const { id } = req.params;
    try {
      const onePeople = await db.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(onePeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPeople(req, res) {
    const newPeople = req.body;

    try {
      const newPeopleCreate = await db.Pessoas.create(newPeople);
      return res.status(200).json(newPeopleCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteOnePeople(req, res) {
    const { id } = req.params;

    try {
      const deletePeople = await db.Pessoas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).send("excluido com sucesso");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePeople(req, res) {
    const { id } = req.params;
    const updatePerson = req.body;

    try {
      const updatePersonDB = await db.Pessoas.update(updatePerson, {
        where: {
          id: id,
        },
      });
      return res.status(200).send("Usuario atualizado com sucesso");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
