import { Sequelize } from "sequelize-typescript";
// @ts-ignore
import configs from '@server/database/config.js';

import User from "@models/user";
import Post from "@models/post";

const models = [User, Post];

const env = process.env.NODE_ENV || 'development';
const dbUrl = configs[env].url;

const sequelize: Sequelize = new Sequelize(dbUrl, {
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
