const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const publicRoutes = require("./routes/public");
const authRoutes = require("./routes/auth");
const { auth } = require("./middlewares/auth");

const app = express();
const port = process.env.PORT ?? 8080;
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
  })
);

app.use("/", publicRoutes);

app.use(auth);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
