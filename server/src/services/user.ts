import bcrypt from 'bcrypt';
import uuidv4 from 'uuid/v4';

import db from "@server/database";
import { IUser } from "@models/user";

const { User } = db.models;
const { SALT } = process.env;

class UserService {
  public getUser(id: string): Promise<IUser> {
    return User.findByPk(id);
  }

  public getUserByNickname(nickname: string): Promise<IUser> {
    return User.findOne({ where: { nickname } });
  }

  public async register(nickname: string, password: string) {
    const [newUser, created] = await User.findOrCreate({
      where: { nickname },
      defaults: {
        id: uuidv4(),
        nickname,
        password: bcrypt.hashSync(password, parseInt(SALT, 10)),
        name: '',
        about: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });


    if (!created) {
      return Promise.reject('This nickname is already taken.');
    }

    return Promise.resolve(newUser);
  }

  // TEST ONLY, remove later
  public getAll() {
    return User.findAll();
  }
}

export default new UserService();
