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
    $scope.data = { showDelete: false };

    $scope.onItemDelete = function(item) {
        $scope.events.splice($scope.events.indexOf(item), 1);
    }

    $scope.toggleStar = function(item) {
        item.star = !item.star;
    }

    $scope.doRefresh = function() {
      $http.get('js/data.json').success(function(data) {
        $scope.events = data.events;
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
  })
}])

.controller('RequestsCtrl', function($scope, $cordovaBarcodeScanner) {
  $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    }
 
});
