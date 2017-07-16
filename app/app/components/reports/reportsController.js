angular.module('reports.controller', [])

.controller('ReportsController', function($scope, googleChartApiPromise, LeadServicesFactory) {

  googleChartApiPromise.then(function() {

    LeadServicesFactory.getStats().then(
      function(response) {
        $scope.chart = {
          type: "PieChart",
          cssStyle: "height:400px; width:100%",
          data: google.visualization.arrayToDataTable(response.stats),
          options: {
            legend: {
               position: 'bottom',
               alignment: 'center'
            }
          }
        }
      }
    )
  })




})
