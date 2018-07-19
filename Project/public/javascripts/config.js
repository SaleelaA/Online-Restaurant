var appdir = __dirname.slice(0, __dirname.length - "public\\\javascripts".length);
var obj = {
    "dataFolder": appdir + "/Data",
    "imageFolder": appdir + "/images"

}



module.exports = obj;