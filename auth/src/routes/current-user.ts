import express from "express";
import currentUser from "../middlewares/current-user";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  return res.send({ currentUser: req.currentUser || null });
});

// eslint-disable-next-line import/prefer-default-export
export { router as currentUserRouter };
