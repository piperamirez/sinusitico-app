angular.module('sinusitico.app',[
  'ui.router',
  'ngResource',
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'main.controller',
  'discover.controller',
  'leads.controller',
  'leads.services.factory',
  'config.constant',
  'navbar.controller'
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/main/app/discover");

  $stateProvider

  .state('main', {
    url: "/main",
    templateUrl: 'app/main/mainView.html',
    controller: 'MainController'
  })

  .state('main.app', {
    url: "/app",
    views: {
      'navbar-view': {
        templateUrl: 'app/shared/navbar/views/navbarView.html',
        controller: 'NavbarController'
      },
      'content-view': {
        templateUrl: 'app/shared/content/views/contentView.html'
      }
    }
  })

  .state('main.app.discover', {
    url: "/discover",
    views: {
      'component-view': {
        templateUrl: 'app/components/discover/views/discoverView.html',
        controller: 'DiscoverController'
      }
    }
  })

  .state('main.app.leads', {
    url: "/leads",
    views: {
      'component-view': {
        templateUrl: 'app/components/leads/views/leadsView.html',
        controller: 'LeadsController'
      }
    }
  })

})
