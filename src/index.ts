import "reflect-metadata";
import {
  createConnection,
  getConnectionOptions,
  useContainer as typeOrmContainer,
} from "typeorm";
import { useContainer as routeContainer } from "routing-controllers";
import { Container } from "typedi";
import app from "./app";

const main = async () => {
  try {
    typeOrmContainer(Container);
    routeContainer(Container);
    const options = await getConnectionOptions();
    await createConnection(options);
    console.log("Database connected");
    app.listen(process.env.HOST_PORT);
    console.log("Server listening on port", process.env.HOST_PORT);
  } catch (error) {
    console.log("An error happened");
    console.log(error);
  }
};

main();
