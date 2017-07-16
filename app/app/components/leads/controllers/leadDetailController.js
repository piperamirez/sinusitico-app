angular.module('lead.detail.controller', [])

.controller('LeadDetailController', function($scope, $state, $timeout, $stateParams) {

  $scope.lead = $stateParams.lead
  $scope.lead = {"id": 20, "name": "Andr\u00e9s Errazuriz", "pub_date": "2017-06-17T00:00:00Z", "email": "Andr\u00e9s.Errazuriz@gmail.com", "enterprise": 5, "location": {"lat": 11, "lng": 10}, "role": "Gerente de Operaciones", "address": null, "phone": "562 7384 6428", "tags": null, "facebook_link": null, "linkedin_link": null, "instagram_link": null, "oportunity": null, "close_date": null, "days_pass": 29, "is_premium": true}

  function drawMap(position) {

    $timeout(function() {
      this.map = new google.maps.Map(document.getElementById("map-detail"), {
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
    drawMap($scope.lead.location)
  }

  setupMap()

  $scope.gestionarLead = function(lead) {
    $scope.leadGestionado = true
  }

})
