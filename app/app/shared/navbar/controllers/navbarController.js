angular.module('navbar.controller', [])

.controller('NavbarController', function($scope, $modal, $timeout, LeadServicesFactory) {

  LeadServicesFactory.getEnterprises().then(
    function(response) {
      $scope.options = {
        empresas: response.list
      }
    }
  )

  function drawMap(position) {

    $timeout(function() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(
          position.lat,
          position.lng
        ),
        zoom: 13,
        disableDefaultUI: true
      })
      var marker = new google.maps.Marker({
        position: position,
        map: map
      })
    }, 500)
  }

  function setupMap() {
    /* // TODO this shit is not working in safari, so we hard-code our current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          $scope.leadData.position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          drawMap($scope.leadData.position)
        }
      )
    }
    */
    $scope.leadData.position = {
      lat: -33.416429,
      lng: -70.589791
    }
    drawMap($scope.leadData.position)
  }

  $scope.newLead = function() {
    $scope.leadData = {}
    $scope.newLeadModal = $modal.open({
      scope: $scope,
      animation: true,
      templateUrl: 'app/components/leads/views/newLeadModalView.html',
      size: 'md'
    })
    setupMap()
  }

  $scope.postNewLead = function() {
    LeadServicesFactory.postLead($scope.leadData).then(
      function(response) {
        $scope.newLeadModal.close()
      }
    )
  }

  // TODO: remove the line below
  //$scope.newLead()

})
