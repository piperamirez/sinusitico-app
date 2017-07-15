angular.module('navbar.controller', [])

.controller('NavbarController', function($scope, $modal, LeadServicesFactory) {

  $scope.leadData = {}

  $scope.options ={
    empresas: [
      {id: 1, nombre: 'Widefense S.A.'}
    ]
  }

  $scope.newLead = function() {
    $scope.newLeadModal = $modal.open({
      scope: $scope,
      animation: true,
      templateUrl: 'app/components/leads/views/newLeadModalView.html',
      size: 'md'
    })
  }

  $scope.postNewLead = function() {
    LeadServicesFactory.postLead($scope.leadData).then(
      function(response) {
        $scope.newLeadModal.close()
      },
      function(error) {}
    )
  }

  // TODO: remove the line below
  //$scope.newLead()

})
