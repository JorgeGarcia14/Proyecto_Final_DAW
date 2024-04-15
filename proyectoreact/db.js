import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.DB_URL); //?ssl=true , fuerza la conexion

export default db;

