angular.module('main.controller', [])

.controller('MainController', function($rootScope, Storage) {

  $rootScope.currentUser = Storage.getObject('sinusitico.currentUser')

})
