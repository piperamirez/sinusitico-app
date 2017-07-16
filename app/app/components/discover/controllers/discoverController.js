angular.module('discover.controller', [])

.controller('DiscoverController', function($scope, $interval, LeadServicesFactory, Storage) {

  function getLeads() {
    LeadServicesFactory.getLeads().then(
      function(response) {
        $scope.leads = response.list
      }
    )
  }

  getLeads()
  leadInterval = $interval(getLeads, 2000);

  $scope.$on('$stateChangeStart', function () {
    $interval.cancel(leadInterval);
  })

})
