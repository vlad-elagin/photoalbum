import db from "@server/database";
import { IUser } from "@models/user";

const { User } = db.models;

class UserService {
  public getUser(id: string): Promise<IUser> {
    return User.findByPk(id);
  }

  public getUserByNickname(nickname: string): Promise<IUser> {
    return User.findOne({ where: { nickname } });
  }

  public async register(nickname: string, password: string) {
    const { newUser, created } = await User.findOrCreate({
      where: { nickname }, defaults: {
        nickname,
        // TODO hash
        password,
      }
    });

    if (!created) {
      // signal that unlucky
    }

    // return newly created user
  }
}

export default new UserService();
