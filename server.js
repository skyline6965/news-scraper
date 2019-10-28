// set up
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var PORT = 8080;

var app = express();

// middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/news-scraper", {useNewUrlParser: true});

// routes

// GET route for scraping website


// Get route for getting all articles from db


// Get route for grabbing certain articles by id and loading its comment


// Post route for saving/updating article's comments



// start server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});