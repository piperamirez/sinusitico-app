var module = angular.module('main.storage', [])

module.factory('Storage', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return $window.localStorage[key] ? JSON.parse($window.localStorage[key]) : {};
    },
    remove: function(key) {
      $window.localStorage.removeItem(key);
    }
  }
});
