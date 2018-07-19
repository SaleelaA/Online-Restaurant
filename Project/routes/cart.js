var express = require('express');
var router = express.Router();
var fs = require('fs');

var config = require("../public/javascripts/config.js");



router.post('/cart', function (req, res) {
    var response = {};
    //check if the user is logged in or not
    if (req.session.loginAs) {
        var currentUser = req.session.loginAs;
        var data = JSON.parse(fs.readFileSync(config.dataFolder + "/order.json", 'utf8').trim());
        var isCurrentUser = false;
        for (var i = 0; i < data.length; i++) {
            var delivery = {
                date: "uygygy",
                status:"not",
                item: JSON.parse(JSON.stringify(req.body.item))

            };
            //Check if your current user has ever placedorder already
            if (currentUser == data[i].name) {
                isCurrentUser = true;
                data[i].purchasedfood.push(delivery);
                fs.writeFileSync(config.dataFolder + "/order.json", JSON.stringify(data), 'utf8');
                response = { message: "You are there" };
                res.send(response);
            }
        }
        if (isCurrentUser == false) {
            var newData = {
                name: req.session.loginAs,
                purchasedfood: [{
                    date: "uygygy",
                    status: "not",
                    item: JSON.parse(JSON.stringify(req.body.item))}]
            }
            data[data.length] = newData;
        }
        fs.writeFileSync(config.dataFolder + "/order.json", JSON.stringify(data), 'utf8');
        response = { message: "New user's order" };
        res.send(response);
    }

    else {
        response = { message: "Helloo, please atleast login man" };
        res.send(response);
            }
});
router.get('/OrderData', function (req, res) {
    var config = require("../public/javascripts/config.js");
    var subOrder = JSON.parse(fs.readFileSync(config.dataFolder + "/order.json", 'utf8').trim());
    var OrderData = JSON.parse(subOrder);
    var LastOrder = [];
    var History = [];
    for (var i = 0; i < OrderData.length; i++) {
        if (OrderData[i].name == req.session.loginAs) {
            History = OrderData[i].purchasedfood;
            for (var i = 0; i < purchasedfood.length; i++) {
                if (purchasedfood[i].status == "no") {
                    LastOrder = purchasedfood[i].item;
                }
            }
        }
    }
    res.send(JSON.stringify(LastOrder));
});
function writeFile(obj) {
    fs.writeFileSync(config.dataFolder + "/order.json", JSON.stringify(delivery),'utf8')
}
    
module.exports = router;
