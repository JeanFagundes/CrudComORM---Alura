"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Jean Fagundes",
          ativo: true,
          email: "Jean@hotmail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Amanda Scolaro",
          ativo: false,
          email: "Amanda@hotmail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Nelson Scolaro",
          ativo: true,
          email: "Nelson@hotmail.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Lucia Scolaro",
          ativo: false,
          email: "Lucia@hotmail.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  },
};
