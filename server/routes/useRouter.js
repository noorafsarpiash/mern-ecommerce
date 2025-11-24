import express from "express";

const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  res.send("User Page");
});

export default userRouter;
