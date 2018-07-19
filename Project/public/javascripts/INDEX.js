var app = angular.module("restaurant", ["ui.router", "ngResource"])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/Home");
       
        $stateProvider.state("Home", {
            url: "/Home",
            views: {
                main: {
                    templateUrl: "MenuDisplay.html",
                    controller:"appetizers"
                   
                }
            }
        })
            .state(
            "Food", {
                url: "/Food",
                views: {
                    main: {
                        templateUrl: "Login.html",
                        controller:"LoginController"
                         
                    }
                }
            })
            .state(
            "User", {
                url: "/User",
                views: {
                    main: {
                        templateUrl: "Register.html",
                        controller:"AddUserController"
                    }
                }
            }
        )
         .state(
        "User", {
            url: "/User",
            views: {
                main: {
                    templateUrl: "Register.html",
                    controller: "AddUserController"
                }
            }
        }
        );
        $locationProvider.html5Mode(true);

    });
app.controller("LoginController", function ($scope, $resource, $http) {
    $scope.authUser = function () {
        var user = {
            name: $scope.name,

            password: $scope.password,

        };

        $http.post("/users/login", user).then(function callback(data) {
            var resp = data.data;
            console.log(resp);
            if (resp.message == 'authenticated') {
                $scope.error = "You are logged on as " + $scope.name;
                //                        $window.open("/", "_top");
            }
            else {
                $scope.error = resp.message;
            }
        });
        /*
        var request = $resource("/users/login");
        request.save(
            user, function (resp) {
                console.log(resp);
                if (resp.message == 'authenticated') {
                    $scope.error = "You are logged on as " + $scope.name;
//                        $window.open("/", "_top");
                }
                else {
                    $scope.error = resp.message;
                }
            }
        )*/
    }
})
app.controller("AddUserController", function ($scope, $resource) {
    $scope.addUser = function () {
        var user = {
            name: $scope.name,
            email: $scope.email,
            password: $scope.password,
            phone: $scope.phone,
            city: $scope.city
        };
        var request = $resource("/users/add");
        request.save(
            user, function (resp) {
                $scope.error = resp.error;
            }
        )
    }
})
 
   
   app .controller("appetizers", function ($scope, $resource) {
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
