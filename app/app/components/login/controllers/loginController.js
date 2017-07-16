angular.module('login.controller', [])

.controller('LoginController', function($scope, $state, LoginServicesFactory, Storage) {

  $scope.loginData = {}
  $scope.showLoginError = false

  $scope.doLogin = function() {
    $scope.showLoginError = false
    if ($scope.pass != 'pass') {
      $scope.showLoginError = true
      return
    }
    LoginServicesFactory.postLogin($scope.loginData).then(
      function(response) {
        Storage.setObject('sinusitico.currentUser', response)
        $state.go('main.app.discover')
      },
      function(error) {
        $scope.showLoginError = true
      }
    )
  }
})
