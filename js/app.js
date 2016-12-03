/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/swot", {templateUrl: "partials/swot.html", controller: "PageCtrl"})
    .when("/justification", {templateUrl: "partials/justification.html", controller: "PageCtrl"})
    .when("/budget", {templateUrl: "partials/budget.html", controller: "PageCtrl"})
    .when("/conclusion", {templateUrl: "partials/conclusion.html", controller: "PageCtrl"})
    .when("/products", {templateUrl: "partials/products.html", controller: "PageCtrl"})
    .when("/store", {templateUrl: "partials/store.html", controller: "PageCtrl"})

    // Account
    .when("/login", {templateUrl: "partials/login.html", controller: "LoginCtrl"})
    .when("/logout", {templateUrl: "partials/logout.html", controller: "LogoutCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls the Login page
 */
app.controller('LoginCtrl', function (/* $scope, $location, $http */) {
  console.log("Login Controller reporting for duty.");

});

/**
 * Controls the Logout page
 */
app.controller('LogoutCtrl', function ($scope, $location, $http) {
  console.log("Logout Controller reporting for duty.");
  //async
  Stamplay.User.logout(true, function(err, res){
    $location.url('/login')
  })
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty.");
});
