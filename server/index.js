import express from "express";
import "dotenv/config";
import dbConnect from "./config/mongodb.js";
import userRouter from "./routes/useRouter.js";
const app = express();

const port = 8000;
dbConnect();

console.log(process.env);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/product", (req, res) => {
  res.send("Product Page");
});

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
