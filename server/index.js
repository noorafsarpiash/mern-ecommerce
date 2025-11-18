import express from "express";
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/product", (req, res) => {
  res.send("Product Page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
