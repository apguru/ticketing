import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  req.session = null;
  res.send({});
});

// eslint-disable-next-line import/prefer-default-export
export { router as signOutRouter };
