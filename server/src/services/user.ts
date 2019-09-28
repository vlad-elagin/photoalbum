import db from "@server/database";
import { IUser } from "@models/user";

const { User } = db.models;

class UserService {
  public getUser(id: string): Promise<IUser> {
    return User.findByPk(id);
  }
}

export default UserService;
