import uuid from "uuid";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("posts", [
      {
        id: uuid.v4(),
        photoUrl: "",
        createdAt: new Date(),
      },
      {
        id: uuid.v4(),
        photoUrl: "",
        createdAt: new Date(),
      },
      {
        id: uuid.v4(),
        photoUrl: "",
        createdAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
