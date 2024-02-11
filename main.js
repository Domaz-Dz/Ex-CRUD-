const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postRouter = require("./router/post");
const port = process.env.PORT || 3000;
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => console.log(`Connected to DB`));
app.use("/", postRouter);
app.listen(port, () => console.log(`Server is running on port ${port}`));
