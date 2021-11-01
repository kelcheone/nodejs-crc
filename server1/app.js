const express = require("express");
const app = express();
const port = 5000;

app.set('view engine', 'ejs')
app.get("/", (req, res) => {
  res.render('index')
});
app.get("/about", (req, res) => {
  res.render('about')
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.get('/blogs/create', (req, res)=>{
  res.render('create')
})

app.use((req, res) => {
  res.render('404')
});
app.listen(port);
