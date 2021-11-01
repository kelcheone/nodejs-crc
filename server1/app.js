const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
app.listen(port);
