const db = require("../models");

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

  static async updatePeople(req, res) {
    const { id } = req.params;
    const updatePerson = req.body;

    try {
      await db.Pessoas.update(updatePerson, {
        where: {
          id: id,
        },
      });
      return res.status(200).send("Usuario atualizado com sucesso");
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

  static async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const umaMatricula = await db.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await db.Matriculas.create(novaMatricula);
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;
    try {
      await db.Matriculas.update(novasInfos, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      const MatriculaAtualizada = await db.Matriculas.findOne({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).json(MatriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaMatricula(req, res) {
    const {  matriculaId } = req.params;
    try {
      await db.Matriculas.destroy({ where: { id: Number(matriculaId) } });
      return res.status(200).json({ mensagem: `id ${matriculaId} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
