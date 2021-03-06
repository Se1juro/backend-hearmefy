import "reflect-metadata";
import { useContainer as routeContainer } from "routing-controllers";
import { Container } from "typeorm-typedi-extensions";
import app from "./app";
import { AppDataSource } from "./config/db";

const main = async () => {
  try {
    routeContainer(Container);
    await AppDataSource.initialize();
    console.log("Database connected");
    app.listen(process.env.HOST_PORT);
    console.log("Server listening on port", process.env.HOST_PORT);
  } catch (error) {
    console.log("An error happened");
    console.log(error);
  }
};

main();
