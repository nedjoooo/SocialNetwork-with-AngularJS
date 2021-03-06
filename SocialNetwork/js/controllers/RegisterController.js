'use strict';

app.controller('RegisterController',
    function($scope, $rootScope, $location, authService, notifyService) {
        $scope.register = function(userData) {
            authService.register(userData,
                function(success) {
                    notifyService.showInfo("User registered successfully");
                    window.location.reload();
                    $location.path("/user/user-home");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            )
        }
    }
);