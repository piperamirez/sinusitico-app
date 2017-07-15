angular.module('discover.controller', [])

.controller('DiscoverController', function($scope, LeadServicesFactory) {

  LeadServicesFactory.getLeads().then(
    function(response) {
      console.log(response);
      $scope.leads = response.list
    },
    function(error) {}
  )

})
