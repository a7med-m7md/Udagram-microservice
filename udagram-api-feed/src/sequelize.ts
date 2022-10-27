import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';


export const sequelize = new Sequelize({
  'username': 'postgres',//config.username,
  'password': '123456789',//config.password,
  'database': 'postgres',//config.database,
  'host': 'database-2.cgvhrhqc3qgx.us-east-1.rds.amazonaws.com',//config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
