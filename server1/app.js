const express = require("express");
const app = express();
const port = 5000;

app.set('view engine', 'ejs')
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "The definition of life",
      snippets: "The definition of life is 42",
    },
    {
      title: "Alpha is Mega",
      snippets: "Why is this phenomenon universally true to us all? ",
    },
    {
      title: "Health is not wealth",
      snippets: "The real meaning is that health is more than wealth",
    },
  ]
  res.render('index', {title: 'Home', blogs})
});
app.get("/about", (req, res) => {
  res.render('about', {title: "About", })
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.get('/blogs/create', (req, res)=>{
  res.render('create', {title: 'Create', })
})

app.use((req, res) => {
  res.render('404', {title: '404'})
});
app.listen(port);
