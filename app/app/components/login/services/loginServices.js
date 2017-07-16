angular.module('login.services.factory', [])

.factory('LoginServicesFactory', function($resource, config) {

  return {
    postLogin: function(payload) {
      return $resource(config.api + '/login', {}).save(payload).$promise
    }
  }

})
