const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');

const { SALT } = process.env;

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [{
      id: uuid(),
      nickname: 'john-doe',
      password: bcrypt.hashSync('john-doe-password', parseInt(SALT, 10)),
      name: 'John Doe',
      about: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', {
      nickname: 'john-doe',
    });
  }
};