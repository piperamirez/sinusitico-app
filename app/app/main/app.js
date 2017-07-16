angular.module('sinusitico.app',[
  'ui.router',
  'ngResource',
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'main.controller',
  'main.storage',
  'discover.controller',
  'leads.controller',
  'leads.services.factory',
  'login.controller',
  'login.services.factory',
  'config.constant',
  'navbar.controller',
  'lead.detail.controller'
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("login");

  $stateProvider

  .state('login', {
    url: "/login",
    templateUrl: 'app/components/login/views/loginView.html',
    controller: 'LoginController'
  })

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

  .state('main.app.lead-detail', {
    url: "/lead-detail",
    views: {
      'component-view': {
        templateUrl: 'app/components/leads/views/leadDetailView.html',
        controller: 'LeadDetailController'
      }
    },
    params: {lead: null}
  })

})
