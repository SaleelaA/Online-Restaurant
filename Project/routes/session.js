var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
//router.get('/', function (req, res) {
//res.send(users);
//});//
router.get('/', function (req, res) {
    var config = require("../public/javascripts/config.js");
    var json = fs.readFileSync(config.dataFolder + '/users.json', 'utf8').trim();
    var users = JSON.parse(json);
    res.send(users);
});

router.post('/add', function (req, res) {
    var config = require("../public/javascripts/config.js");
    var users = loadUsers();
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    var isMatched = false;
    var response = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == user.name) {
            isMatched = true;
            response = { message: "already there" }
            break;
        }

    }
    if (!isMatched) {
        users.push(user);
        fs.writeFileSync(config.dataFolder + '/users.json', JSON.stringify(users), "utf8");
        response = {
            user: user,
            message: "data created"
        };


    }

    res.end(JSON.stringify(response));
});
router.post('/login', function (req, res) {
    var config = require("../public/javascripts/config.js");
    var users = loadUsers();
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    for (var i = 0; i < users.length; i++) {
        if (user.name == users[i].name && user.password == users[i].password) {
            var response = {
                message: "authenticated"
            }
            var session = req.session;
            session.loginAs = user.name;
        }
        else {
            var response = {
                message: " not authenticated"

            }
        }
    }
    res.end(JSON.stringify(response));
});

router.post(
    '/username', function (req, res) {
        var session = req.session;
        if (session.loginAs) {
            res.end('logged in as ' + session.loginAs);
        }
        else {
            res.end('not logged in.');
        }
    }
);




function loadUsers() {
    var config = require("../public/javascripts/config.js");
    var json = fs.readFileSync(config.dataFolder + '/users.json', 'utf8').trim();
    var users = JSON.parse(json);
    return users;
}


module.exports = router;
