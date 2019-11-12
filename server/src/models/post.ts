import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  BelongsTo
} from "sequelize-typescript";

import User from '@models/user';

// post can be liked by

export interface IPost {
  id?: string;
  photoSrc: string[];
  author: User;
  likedBy: User[];
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
    type: DataType.TEXT,
  })
  public photoSrc: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
    defaultValue: '',
  })
  public description: string;

  // @BelongsTo(() => User, 'author')
  // public author: User;

  @CreatedAt
  public createdAt: Date;
}
