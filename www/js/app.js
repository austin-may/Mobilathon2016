// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  //login state

   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.requests', {
      url: '/requests',
      views: {
        'tab-requests': {
          templateUrl: 'templates/tab-requests.html',
          controller: 'RequestsCtrl'
        }
      }
    })

   .state('tab.log_out', {
      url: '/log_out',
      views: {
        'tab-log_out': {
          templateUrl: 'templates/log_out.html',
          controller: 'LogOffCtrl'
        }
      }
    })
    .state('tab.request-detail', {
      url: '/requests/:RequestId',
      views: {
        'tab-requests': {
          templateUrl: 'templates/request-detail.html',
          controller: 'RequestDetailCtrl'
        }
      }
    })
    .state('tab.detail', {
      url: '/dash/:eId',
      views: {
        'tab-dash' : {
          templateUrl: 'templates/event-detail.html',
          controller: 'DashCtrl'
        }
      }
    })
    
  .state('app.sample', {
    url: '/sample',
    views: {
      'menuContent': {
        templateUrl: 'templates/sample.html'
      }
    }
  })  

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');


});
