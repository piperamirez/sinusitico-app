angular.module('sinusitico.app',[
  'ui.router',
  'ngResource',
  'ngAnimate',
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'main.controller'
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/main");

  $stateProvider

  .state('main', {
    url: "/main",
    templateUrl: 'app/main/mainView.html',
    controller: 'MainController'
  })

})
