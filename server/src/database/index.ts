import { Sequelize } from "sequelize-typescript";

import User from "@models/user";
import Post from "@models/post";

const models = [User, Post];

const { DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;

const sequelize: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

sequelize.addModels(models);

sequelize.sync({ force: true });

const database = {
  models: sequelize.models,
  sequelize,
  Sequelize,
};

export default database;
