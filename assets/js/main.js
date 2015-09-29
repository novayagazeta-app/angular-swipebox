angular.module('app', ['ngSwipebox']);


angular.module('app').controller('AppCtrl', function ($scope) {
  console.log('AppCtrl');
  $scope.photos = [
    {title: 'photo #1', href: 'assets/img/1.jpeg', src:'assets/img/5.jpg'},
    {title: 'photo #2', href: 'assets/img/2.jpeg'},
    {title: 'photo #3', href: 'assets/img/3.jpeg'},
    {title: 'photo #4', href: 'assets/img/4.jpeg'}
  ];
});
