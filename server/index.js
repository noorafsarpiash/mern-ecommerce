import express from "express";
import "dotenv/config";
import cors from "cors";
import dbConnect from "./config/mongodb.js";
import userRouter from "./routes/userRouter.js";
import productRoute from "./routes/productRoute.js";
const app = express();

const port = 8000;
app.use(cors());
app.use(express.json());
dbConnect();

console.log(process.env);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/product", (req, res) => {
  res.send("Product Page");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
