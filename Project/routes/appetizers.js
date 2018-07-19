var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(fetchUserRecords());
});
function fetchUserRecords() {
    var ab = "";
    var config = require("../public/javascripts/config.js");
    var json = fs.readFileSync(config.dataFolder + "/menu.json", "utf8").trim();
    json = JSON.parse(json);
    var b = json[0];
    var appetizers = b.appetizers;
    return appetizers;
}


module.exports = router;