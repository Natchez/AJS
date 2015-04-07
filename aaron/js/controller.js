var easeApp = angular.module("easeApp", ['ngRoute', 'chart.js', 'mb-scrollbar', 'angularFileUpload']);


////////////////////////////////////////////// ROUTING INFORMATION /////////////////////////////////////
easeApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl: 'views/login.html',
        })
        .when("/signup", {
            templateUrl: 'views/signup.html',
        })
        .when("/profile", {
            templateUrl: 'views/profile.html',
        })
        .when("/addClient", {
            templateUrl: 'views/clientSignup.html',
        })

    $locationProvider.html5Mode(true);
});
////////////////////////////////////////////// CONTROLLERS /////////////////////////////////////

easeApp.controller('easeMainCtrl', function ($scope, $http, $location, $upload) {
    $scope.message = '';
    $scope.step = 1;

    $scope.nextStep = function () {
        $scope.step++;
    }

    $scope.prevStep = function () {
            $scope.step--;
        }
        ////////////////////////////////////////////// REGISTRATION /////////////////////////////////////

    $scope.submitForm = function (create) {
            $http.post('/addUser', create).
            success(function (data, status, headers, config) {
                if (status == 200) {
                    $scope.user = data.user[0];
                    $scope.token = data.token;
                    $scope.expires = data.expires;
                     $location.path('/profile');
                }
                if (data.message)
                    $scope.message = data.message;
            }).
            error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
                if (data.message)
                    $scope.message = data.message;
            });
        }
     
        ////////////////////////////////////////////// CLIENT REGISTRATION /////////////////////////////////////
 
    $scope.addClient = function (clcreate) {
            $http.post('/addUserCl', clcreate).
            success(function (data, status, headers, config) {
                if (status == 200) {
                    $scope.user = data.user[0];
                    $scope.token = data.token;
                    $scope.expires = data.expires;
                     $location.path('/profile');
                }
                if (data.message)
                    $scope.message = data.message;
            }).
            error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
                if (data.message)
                    $scope.message = data.message;
            });
        }
        ////////////////////////////////////////////// lOGIN  /////////////////////////////////////

    $scope.loginForm = function (login) {
            $http.post('/authenticate', login).
            success(function (data, status, headers, config) {
                if (status == 200) {
                    $scope.user = data.user[0];
                    $scope.message = data.message;
                    $location.path('/profile');
                }
            }).
            error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
                if (data.message)
                    $scope.message = data.message;
            });
        }
        ////////////////////////////////////////////// PROFILE CHART /////////////////////////////////////

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };


});