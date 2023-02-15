module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Turmas",
      [
        {
          data_inicio: "2020-02-01",
          nivel_id: 4,
          docente_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: "2020-02-01",
          nivel_id: 5,
          docente_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: "2020-02-01",
          nivel_id: 6,
          docente_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data_inicio: "2020-07-01",
          nivel_id: 6,
          docente_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Turmas", null, {});
  },
};
