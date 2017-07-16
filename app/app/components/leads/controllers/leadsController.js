angular.module('leads.controller', [])

.controller('LeadsController', function($scope, $interval, LeadServicesFactory) {

  function getLeads() {
    LeadServicesFactory.getUserLeads().then(
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

  $scope.presentLeadDetail = function(lead) {
    $state.go('main.app.lead-detail', {lead: lead})
  }

})
