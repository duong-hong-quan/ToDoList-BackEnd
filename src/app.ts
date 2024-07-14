import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify.config";
import mongoose from "mongoose";
import express from "express";
import swaggerUi from "swagger-ui-express";
// Import or define your Swagger document
import * as swaggerDocument from "./swagger.json";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  // Serve Swagger UI
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
});

const MONGO_URL =
  "mongodb+srv://sa:12345@cluster0.qo3l8xt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running. " + error
  );
});

server.build().listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
