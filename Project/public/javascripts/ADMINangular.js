var app =angular.module("myModule", []);
app.controller("AdminController", function ($scope, $resource, $http) {
    $scope.adminUser = function () {
        var admin = {
            name: $scope.name,

            password: $scope.password,

        };

        $http.post("/ADMIN/admin", admin).then(function callback(data) {

            if (response.message == "auth") {
                var resp = data.data;
                console.log(resp);
                if (resp.message == 'authenticated') {
                    $scope.error = "You are logged on as " + $scope.name;
                    //                        $window.open("/", "_top");
                }
            }
            else {
                $scope.error = resp.message;
            }

        });
    }
});