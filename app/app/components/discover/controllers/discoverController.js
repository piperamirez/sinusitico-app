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
  stop = $interval(getLeads, 2000);

})
