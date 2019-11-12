const uuid = require('uuid/v4');
const fs = require('fs');
const path = require('path');

module.exports = {
  up: async (queryInterface) => {
    const users = await queryInterface.sequelize.query(
      "SELECT id, nickname FROM users;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    ).reduce((acc, user) => {
      acc[user.nickname] = user.id;
      return acc;
    }, {});

    const photo1 = fs.readFileSync(path.resolve(
      __dirname, '../../photo-sources/1.jpg')
    );
    const photo2 = fs.readFileSync(path.resolve(
      __dirname, '../../photo-sources/2.jpg')
    );

    return queryInterface.bulkInsert('posts', [
      {
        id: uuid(),
        photoSrc: `data:image/jpg;base64;${Buffer.from(photo1).toString('base64')}`,
        author: users['john-doe'],
        likedBy: null,
        description: 'Oh my...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        photoSrc: `data:image/jpg;base64;${Buffer.from(photo2).toString('base64')}`,
        author: users['john-doe'],
        likedBy: null,
        description: 'Soft kitty warm kitty little ball of fur',
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