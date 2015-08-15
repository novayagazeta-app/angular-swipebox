angular.module('app', ['ngSwipebox']);


angular.module('app').controller('AppCtrl', function ($scope) {
  console.log('AppCtrl');
  $scope.photos = [
    {title: 'photo #1', href: 'http://lorempixel.com/1240/800/cats/1/'},
    {title: 'photo #2', href: 'http://lorempixel.com/1240/800/cats/2/'},
    {title: 'photo #3', href: 'http://lorempixel.com/1240/800/cats/3/'},
    {title: 'photo #4', href: 'http://lorempixel.com/1240/800/cats/4/'}
  ];
});