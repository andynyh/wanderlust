angular.module('app', ['ui.router', 'lbServices'])

	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	    $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'SignUpController',
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'AuthLoginController',
            })
            .state('logout', {
                url: '/logout',
                controller: 'AuthLogoutController'
            })
           .state('welcome', {
               url: '/welcome',
               templateUrl: 'views/welcome.html',
           })
           .state('choices', {
               url: '/choices',
               templateUrl: 'views/choices.html',
           })
           .state('home', {
               url: '/home',
               templateUrl: '../dynamic/home.html',
           })
	    $urlRouterProvider.otherwise('index');

	}]);

