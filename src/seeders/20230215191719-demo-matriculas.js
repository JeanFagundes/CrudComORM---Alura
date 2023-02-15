module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Matriculas",
      [
        {
          status: "confirmado",
          estudante_id: 14,
          turma_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 14,
          turma_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 16,
          turma_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 17,
          turma_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "cancelado",
          estudante_id: 14,
          turma_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "cancelado",
          estudante_id: 15,
          turma_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Matriculas", null, {});
  },
};
