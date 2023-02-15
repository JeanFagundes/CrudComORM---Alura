const db = require("../models");

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      console.log("entrou");

      const todasAsTurmas = await db.Turmas.findAll();
      console.log(todasAsTurmas);
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      const pegarUmaTurma = await db.Turmas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(pegarUmaTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaTurma(req, res) {
    const criaNovaTurma = req.body;

    try {
      const criarTurma = await db.Turmas.create(criaNovaTurma);
      return res.status(200).json(criarTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaTurma(req, res) {
    const { id } = req.params;
    const atualizaTurma = req.body;

    try {
      await db.Turmas.update(atualizaTurma, {
        where: {
          id: id,
        },
      });
      return res.status(200).send("Turma atualizado com sucesso");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaTurma(req, res) {
    const { id } = req.params;

    try {
      await db.Turmas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).send("Turma excluido com sucesso");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;
