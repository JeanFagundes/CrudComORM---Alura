/* eslint-disable no-undef */
const db = require('../models');

class PessoaController {
  static async pegaPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await db.Pessoas.findAll();
      return res.status(200).json(pessoasAtivas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllPersons(req, res) {
    try {
      const todasAsPessoas = await db.Pessoas.scope('todos').findAll();
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
      return res.status(200).send('Usuario atualizado com sucesso');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteOnePeople(req, res) {
    const { id } = req.params;

    try {
      await db.Pessoas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).send('excluido com sucesso');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {
      await db.Pessoas.restore({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} restaurado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await db.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      return res.status(200).json({ mensagem: `id ${matriculaId} restaurado` });
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
    const novaMatricula = {
      ...req.body,
      estudante_id: Number(estudanteId),
    };
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
    const { matriculaId } = req.params;
    try {
      await db.Matriculas.destroy({ where: { id: Number(matriculaId) } });
      return res.status(200).json({ mensagem: `id ${matriculaId} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const pessoa = await db.Pessoas.findOne({ where: { id: Number(estudanteId) } });

      //pegando função do model pessoas para trazer apenas as que estão com matriculas confirmadas
      const matriculas = await pessoa.getAulasMatriculadas();

      return res.status(200).json(matriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegaMatriculaPorTurma(req, res) {
    const { turmaId } = req.params;
    try {
      const todasAsMatriculas = await db.Matriculas.findAndCountAll({
        where: {
          turma_id: Number(turmaId),
          status: 'confirmado',
        },
      });
      return res.status(200).json(todasAsMatriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegaTurmasLotadas(req, res) {
    const lotacaoTurma = 2;
    try {
      const turmasLotadas = await db.Matriculas.findAndCountAll({
        where: {
          status: 'confirmado',
        },
        attributes: ['turma_id'],
        group: ['turma_id'],
        having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`),
      });
      return res.status(200).json(turmasLotadas.count);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
