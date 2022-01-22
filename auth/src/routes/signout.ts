import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  res.send("signout");
});

// eslint-disable-next-line import/prefer-default-export
export { router as signOutRouter };
