import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasMany
} from "sequelize-typescript";
import bcrypt from 'bcrypt';
import Post from '@models/post';

export interface IUser {
  id: string;
  nickname: string;
  password: string;
  name: string;
  about: string;
  posts: Post[];
  createdAt: Date;
  updatedAt: Date;
  checkPassword(password: string): Promise<boolean>;
}

@Table({
  modelName: "User",
  tableName: "users",
})
export default class User extends Model<User> {
  @Column({
    allowNull: false,
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  public id: string;

  @Column({
    allowNull: false,
    type: DataType.STRING(255),
  })
  public nickname: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  public password: string;

  @Column({
    defaultValue: "",
    type: DataType.STRING(255),
  })
  public name: string;

  @Column({
    defaultValue: "",
    type: DataType.STRING(511),
  })
  public about: string;

  @HasMany(() => Post)
  public posts: Post[];

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

  public checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
