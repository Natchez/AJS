var easeApp = angular.module('easeApp', ['ngRoute']);

    easeApp.config(['$routeProvider',
          function($routeProvider) {
                $routeProvider.
                  when('/signup', {
                    templateUrl: 'views/signup.html',
                    controller: 'signupCtrl'
                  }).
                  otherwise({
                    redirectTo: '/'
                  });
        }]);