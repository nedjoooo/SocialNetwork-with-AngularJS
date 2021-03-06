'use strict';

var app = angular.module('socialNetworkApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/public/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/public/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/public/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/user-home', {
        templateUrl: 'templates/users/user-home.html',
        controller: 'UserHomeController'
    });

    $routeProvider.when('/user/edit-profile', {
        templateUrl: 'templates/users/edit-profile.html',
        controller: 'EditUserProfileController'
    });

    $routeProvider.when('/user/change-password', {
        templateUrl: 'templates/users/change-password.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.when('/user/search-results/:userQuery', {
        templateUrl: 'templates/users/search-results.html',
        controller: 'SearchController'
    });

    $routeProvider.when('/user/user-details/:username', {
        templateUrl: 'templates/users/user-details.html',
        controller: 'UserDetailsController'
    });

    $routeProvider.when('/user/friend-request', {
        templateUrl: 'templates/users/friendship-requests.html',
        controller: 'FriendshipRequestsController'
    });

    $routeProvider.when('/user/friend-profile/:username', {
        templateUrl: 'templates/users/friend-profile.html',
        controller: 'FriendProfileController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});