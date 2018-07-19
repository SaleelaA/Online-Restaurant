var app = angular.module("application", ["ngResource"]);
    app.controller("usersAdd", function ($scope, $resource) {
        var request = $resource("/users/add");
        request.query(function (addObj) {
            $scope.addObj = addObj;
        });
    })
    app.controller("usersLogin", function ($scope, $resource) {
        var request = $resource("/users/login");
        request.query(function (loginObj) {
            $scope.loginObj = loginObj;
        });
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
                    $scope.message = resp.message;

                }
            )
        }
    })

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
    app.controller("LogOut", function ($scope, $resource) {
        var request = $resource("/users/logout");
        $scope.logOut = function (resp) {
            $scope.error = resp.message;
        }
    });

