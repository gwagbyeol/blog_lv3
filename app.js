const express = require("express");
const cookiParser = require("cookie-parser");
const app = express();
const port = 3000;

const usersRouter = require("./router/users.js");
const postsRouter = require("./router/posts.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiParser());
app.use("/api", [usersRouter, postsRouter]);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요");
});
