const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');

const { SALT } = process.env;

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        id: uuid(),
        nickname: 'john-doe',
        password: bcrypt.hashSync('john-doe-password', parseInt(SALT, 10)),
        name: 'John Doe',
        about: 'hi i am john',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        nickname: 'jane-doe',
        password: bcrypt.hashSync('jane-doe-password', parseInt(SALT, 10)),
        name: 'Jane Doe',
        about: 'hi i am jane',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', {
      nickname: 'john-doe',
    });
  }
};