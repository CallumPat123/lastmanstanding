import { Sequelize, Sequelize as SequelizeType } from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require("./config")[env];
// If you have a configuration file or other models, ensure to use ES6 imports.
// import config from './config'; // Example for config if needed
// import User from '../models/user'; // Adjust path as necessary

let sequelize: SequelizeType;

if (config.use_env_variable) {
  // Assert that process.env[config.use_env_variable] is a string
  const dbUrl: string = process.env[config.use_env_variable] as string;
  if (!dbUrl) {
    console.error(
      `Environment variable ${config.use_env_variable} is not set.`
    );
    process.exit(1); // Exit the application if the environment variable is not set
  }
  sequelize = new Sequelize(dbUrl, { dialect: "postgres" });
} else {
  // Assert that the individual config properties are strings
  const { database, username, password, host } = config;
  if (!database || !username || !host) {
    console.error("Database configuration is incomplete.");
    process.exit(1); // Exit the application if any required config is missing
  }
  sequelize = new Sequelize(database, username, password ?? "", {
    host,
    dialect: "postgres",
  });
}

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

// Use ES6 export syntax
export default sequelize;
