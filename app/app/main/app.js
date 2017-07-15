angular.module('sinusitico.app',[
  'ui.router',
  'ngResource',
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'main.controller',
  'config.constant',
  'navbar.controller',
  'lead.services.factory'
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/main/app");

  $stateProvider

  .state('main', {
    url: "/main",
    templateUrl: 'app/main/mainView.html'
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

})
