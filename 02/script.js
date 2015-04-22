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
    template: "Name: {{user.name}}<div ng-show='!!user.address'><br>Address:<br>{{user.address.street}}<br>{{user.address.city}}, {{user.address.state}}</div><br><div>Friends: <div ng-repeat='friend in user.friends'>{{friend}}</div</div>",
    restrict: "E"
  }
})
