angular
  .module('app')
  .factory('AuthService', ['Wanderluster', '$q', '$rootScope', '$log', function (User, $q, $rootScope, $log) {
      $log.log("sLogin 1");
      function login(email, password) {
          $log.log("sLogin 2");
          return User
            .login({ email: email, password: password })
            .$promise
            .then(function (response) {
                $log.log("sLogin 3");
                $rootScope.currentUser = {
                    id: response.user.id,
                    tokenId: response.id,
                    email: email
                };
                $log.log("sLogin 4");
            });
      }

      function logout() {
          return User
           .logout()
           .$promise
           .then(function () {
               $rootScope.currentUser = null;
           });
      }

      function register(email, password) {
          $log.log("sReg 1");
          return User
            .create({
                email: email,
                password: password
            })
           .$promise;
          $log.log("sReg 1");
      }

      return {
          login: login,
          logout: logout,
          register: register
      };
  }]);
