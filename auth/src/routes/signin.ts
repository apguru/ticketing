import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.send("signin");
});

// eslint-disable-next-line import/prefer-default-export
export { router as signInRouter };
