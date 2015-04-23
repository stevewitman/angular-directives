angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: "Mike",
    address: {
      street: '1234 Main Street',
      city: 'Johnsonville',
      state: 'TX'
    },
    friends: [
        'Beanie',
        'Daniel',
        'Thomas'
      ]
  }
});

angular.module('app').directive('fcUserInfoCard', function () {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    controller: function($scope) {
      $scope.knightMe = function(user) {
        user.rank = "knight";
      }
    }
  }
}) 
