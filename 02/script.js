angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user1 = {
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
  $scope.user2 = {
    name: "Mindy",
    address: {
      street: '300 1st Street',
      city: 'Springfield',
      state: 'IL'
    },
    friends: [
        'Sammie',
        'Thomas'
      ]
  }
  console.log($scope);
});

angular.module('app').directive('fcUserInfoCard', function () {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '='
    },
    controller: function($scope) {
      $scope.knightMe = function(user) {
        user.rank = "knight";
      }
          console.log($scope);
    }
  }

}) 
