import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
} from "sequelize-typescript";

export interface IPost {
  id?: string;
  photoUrl: string;
  createdAt?: Date;
}

@Table({
  modelName: "Post",
  tableName: "posts",
})
export default class Post extends Model<Post> {
  @Column({
    allowNull: false,
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  public id: string;

  @Column({
    allowNull: false,
    type: DataType.STRING(511),
  })
  public photoUrl: string;

  @CreatedAt
  public createdAt: Date;
}
