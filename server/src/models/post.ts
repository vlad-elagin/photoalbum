import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";

import User from '@models/user';

export interface IPost {
  id: string;
  photoSrc: string;
  description: string;
  author: User;
  createdAt: Date;
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
    type: DataType.TEXT,
  })
  public photoSrc: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
    defaultValue: '',
  })
  public description: string;

  @CreatedAt
  public createdAt: Date;

  @ForeignKey(() => User)
  public authorId: string;

  @BelongsTo(() => User)
  public author: User;
}
