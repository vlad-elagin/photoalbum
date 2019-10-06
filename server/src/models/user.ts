import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
} from "sequelize-typescript";

export interface IUser {
  id?: string;
  nickname: string;
  name?: string;
  about?: string;
  createdAt?: Date;
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

  @CreatedAt
  public createdAt: Date;
}
