"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          us_fullname: "Fioreza Radhin Naufal",
          us_username: "reza1902",
          us_email: "fioreza@example.com",
          us_phonenumber: "085282810339",
          us_password: bcrypt.hashSync("12345678", 10),
          us_role: "ADMIN",
          us_active: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
