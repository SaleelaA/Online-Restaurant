
var app = angular.module("my", ["ngResource"]);
app.controller("mySho", function ($scope, $resource,$http) {
    $scope.order = [];

    var request = $resource("/menu/starters");
    request.query(function (starterObj) {
        $scope.starterObj = starterObj;


    });
    var request = $resource("/menu/appetizers");
    request.query(function (appetizersObj) {
        $scope.appetizersObj = appetizersObj;
    });
    var request = $resource("/menu/dessert");
    request.query(function (dessertObj) {
        $scope.dessertObj = dessertObj;
    });

    $scope.addToCart = function (data) {

        var Ord = {
            name: data.name,
            description: data.description,
            price: data.price
        }
        $scope.order.push(Ord);

    }
    $scope.check = function () {
        var ord = { item: $scope.order }
        response = {
            message: "data sent"
        }
        $http.post("/cart/cart", ord).then(function (response) {
            if (response.message) {
                $scope.res = response.message
            }


        });

    }
});




