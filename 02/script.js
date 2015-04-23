// Code goes here

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

angular.module('app').directive('userInfoCard', function () {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E"
  }
})  
