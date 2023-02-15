const db = require("../models");

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await db.Niveis.findAll();
      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const pegarUmNivel = await db.Niveis.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(pegarUmNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body;

    try {
      const criarNivel = await db.Niveis.create(novoNivel);
      return res.status(200).json(criarNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaNivel(req, res) {
    const { id } = req.params;
    const atualizarNivel = req.body;

    try {
      await db.Niveis.update(atualizarNivel, {
        where: {
          id: id,
        },
      });
      return res.status(200).send("Nivel atualizado com sucesso");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params;

    try {
      await db.Niveis.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).send("Nivel excluido com sucesso");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;
