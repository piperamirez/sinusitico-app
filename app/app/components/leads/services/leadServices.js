angular.module('leads.services.factory', [])

.factory('LeadServicesFactory', function($resource, config) {

  return {
    postLead: function(payload) {
      return $resource(config.api + '/lead', {}).save(payload).$promise
    },
    getLeads: function(payload) {
      return $resource(config.api + '/list', {}).get().$promise
    },
    getEnterprises: function() {
      return $resource(config.api + '/enterprise', {}).get().$promise
    }
  }

})
