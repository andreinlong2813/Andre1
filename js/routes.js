angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('dad', {
    url: '/page3',
    templateUrl: 'templates/dad.html',
    controller: 'dadCtrl'
  })

  .state('mom', {
    url: '/page4',
    templateUrl: 'templates/mom.html',
    controller: 'momCtrl'
  })

  .state('recents', {
    url: '/page7',
    templateUrl: 'templates/recents.html',
    controller: 'recentsCtrl'
  })

  .state('keypad', {
    url: '/page9',
    templateUrl: 'templates/keypad.html',
    controller: 'keypadCtrl'
  })

  .state('favorite', {
    url: '/page10',
    templateUrl: 'templates/favorite.html',
    controller: 'favoriteCtrl'
  })

  .state('8080', {
    url: '/page11',
    templateUrl: 'templates/8080.html',
    controller: '8080Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});