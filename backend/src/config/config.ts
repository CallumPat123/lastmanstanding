require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  test: {
    // ...your test configs
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
};
