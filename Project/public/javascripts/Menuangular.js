angular
    .module("application", ["ngResource"])
    .controller("starter", function ($scope, $resource) {
        var request = $resource("/menu/starters");
        request.query(function (starterObj) {
            $scope.starterObj = starterObj;
        });
    })
    .controller("appetizers", function ($scope, $resource) {
        var request = $resource("/menu/appetizers");
        request.query(function (appetizersObj) {
            $scope.appetizersObj = appetizersObj;
        });
    })
    .controller("dessert", function ($scope, $resource) {
        var request = $resource("/menu/dessert");
        request.query(function (dessertObj) {
            $scope.dessertObj = dessertObj;
        });
    })

