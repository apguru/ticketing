import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";

import cookieSession from "cookie-session";
import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signUpRouter } from "./routes/signup";
import { signOutRouter } from "./routes/signout";
import errorHandler from "./middlewares/error-handler";
import NotFoundError from "./errors/not-found-error";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

// Routes
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

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
