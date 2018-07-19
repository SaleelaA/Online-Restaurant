var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res) {
    var ab = "";
    var config = require("../public/javascripts/config.js");
    var json = fs.readFileSync(config.dataFolder + "/menu.json", "utf8").trim();
    json = JSON.parse(json);
    var b = json[0];
    var entre = b.starters;
    res.send(json);
});

router.get('/starters', function (req, res) {
    var ab = "";
    var config = require("../public/javascripts/config.js");
    var json = fs.readFileSync(config.dataFolder + "/menu.json", "utf8").trim();
    json = JSON.parse(json);
    var b = json[0];
    var entre = b.starters;

   

    res.send(entre);
   
});

router.get('/appetizers', function (req, res) {
    var ab = "";
    var config = require("../public/javascripts/config.js");
    var json = fs.readFileSync(config.dataFolder + "/menu.json", "utf8").trim();
    json = JSON.parse(json);
    var b = json[1];
    var appetizers = b.appetizers;
    res.send(appetizers);

});
router.get('/dessert', function (req, res) {
    var ab = "";
    var config = require("../public/javascripts/config.js");
    var json = fs.readFileSync(config.dataFolder + "/menu.json", "utf8").trim();
    json = JSON.parse(json);
    var b = json[2];
    var dessert = b.dessert;
    res.send(dessert);
});


module.exports = router;