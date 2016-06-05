angular
  .module('app')
  .controller('AuthLoginController', ['$scope', 'AuthService', '$state', '$log', function ($scope, AuthService, $state, $log) {
      $log.log("cLogin 1");

      $scope.login = function () {
          $log.log("cLogin 2");
          AuthService.login($scope.user.email, $scope.user.password)
            .then(function () {
                $log.log("cLogin 3");
                $state.go('choices');
                //window.location = "../dynamic/home.html";
                $log.log("cLogin 4");
            });
      };
  }])

  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
      function ($scope, AuthService, $state) {
          AuthService.logout()
            .then(function () {
                $state.go('login');
            });
      }])

  .controller('SignUpController', ['$scope', 'AuthService', '$state', '$log',
      function ($scope, AuthService, $state, $log) {
          $log.log("cReg 1");
          $scope.register = function () {
              $log.log("cReg 2");
              AuthService.register($scope.user.email, $scope.user.password)
                .then(function () {
                    $log.log("cReg 3");
                    $state.transitionTo('login');
                    $log.log("cReg 4");
                });
          };
      }]);

