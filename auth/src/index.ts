import "express-async-errors";
import mongoose from "mongoose";

import app from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    // eslint-disable-next-line no-console
    console.log("Connected to MongoDb");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log("Listening on port 3000!");
  });
};

start();
