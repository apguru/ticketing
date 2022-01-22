import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("hi there");
});

// eslint-disable-next-line import/prefer-default-export
export { router as currentUserRouter };
