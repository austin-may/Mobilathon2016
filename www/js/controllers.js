angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})





.controller('DashCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $http.get('js/data.json').success(function(data) {
    $scope.events = data.events;
    $scope.whichevent = $state.params.eId;

    $scope.doRefresh = function() {
      $http.get('js/data.json').success(function(data) {
        $scope.events = data;
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
  })
}])

.controller('RequestsCtrl', function($scope, requests) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.requests = requests.all();
  $scope.remove = function(request) {
    requests.remove(request);
  };
})

.controller('RequestDetailCtrl', function($scope, $stateParams, requests) {
  $scope.request = requests.get($stateParams.requestId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
