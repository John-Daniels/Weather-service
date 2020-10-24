const path = require("path");
const express = require("express");
const hbs = require("hbs");
const request = require("request");
const forecast = require("./utils/forecast");
//const geocode = require("./utils/geocode");

const app = express();
const port = process.env.PORT || 3000;

//directories
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialsDir = path.join(__dirname, "../templates/partials");
// const helpDir = path.join(__dirname, '../public')

// setup hbs engine and views Dir
app.set("view engine", "hbs");
app.set("views", viewsDir);
hbs.registerPartials(partialsDir);

//setup static dir to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "HINIX STUDIO's",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    name: "HINIX STUDIO's",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help Page!",
    name: "HINIX STUDIO's",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an Address term",
    });
  }
  forecast(req.query.address, (error, forecastData) => {
    if (error) {
      return res.send({ error });
    }

    res.send([
      {
        forecast: forecastData,
      },
    ]);
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    err: "Help Article Not Found",
    name: "HINIX STUDIO's",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    err: "Page Not Found",
    name: "HINIX STUDIO's",
  });
});
//some code
app.listen(port, () => {
  console.log(`server is up on port ${port}.`);
});
