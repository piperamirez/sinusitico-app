angular.module('login.controller', [])

.controller('LoginController', function($scope, $state, LoginServicesFactory, Storage) {

  $scope.loginData = {}

  $scope.doLogin = function() {
    LoginServicesFactory.postLogin($scope.loginData).then(
      function(response) {
        console.log(response)
        Storage.setObject('sinusitico.currentUser', response)
        $state.go('main.app.discover')
      }
    )
  }
})
