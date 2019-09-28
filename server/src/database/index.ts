import { Sequelize } from "sequelize-typescript";

import User from "@models/user";

const models = [User];

const { DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;

const sequelize: Sequelize = new Sequelize({
  database: DB_NAME,
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
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
