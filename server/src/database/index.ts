import { Sequelize } from "sequelize-typescript";

import User from "@models/user";
import Post from "@models/post";

const models = [User, Post];

const { DEV_DATABASE_URL } = process.env;

const sequelize: Sequelize = new Sequelize(DEV_DATABASE_URL, {
  dialect: "postgres",
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
