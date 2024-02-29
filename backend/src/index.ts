import express from "express";
import cors from "cors";
import morgan from "morgan";
import sequelize from "./config/database";

const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(morgan("combined"));

const PORT: number | string = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
