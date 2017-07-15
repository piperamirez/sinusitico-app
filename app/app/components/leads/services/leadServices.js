angular.module('leads.services.factory', [])

.factory('LeadServicesFactory', function($resource, config) {

  return {
    postLead: function(payload) {
      return $resource(config.api + '/lead', {}).save(payload).$promise
    }
  }

})
