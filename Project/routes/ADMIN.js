router.post('/admin', function (req, res) {
    var config = require("../public/javascripts/config.js");
    
    var admin = {
        name: req.body.name,

        password: req.body.password
    };
    var response;

    if (admin.name == "admin" && admin.password == "123") {
        response = {
            message: "authenticated"
        }
    }
    else {
        response = {
            message: " not authenticated"

        }
    }
})
