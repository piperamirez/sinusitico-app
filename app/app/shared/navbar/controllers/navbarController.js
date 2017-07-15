angular.module('navbar.controller', [])

.controller('NavbarController', function($scope, $modal) {

  $scope.newLead = function() {
    console.log('Creando un nuevo lead');
  }

})
