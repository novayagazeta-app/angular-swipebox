# angular-swipebox

An AngularJS Directive for [Swipebox](http://brutaldesign.github.io/swipebox/)

## Demo

[http://novayagazeta-app.github.io/angular-swipebox/](http://novayagazeta-app.github.io/angular-swipebox/)

## Basic Usage

### CSS

```html
<link rel="stylesheet" href="src/css/swipebox.css">
```

### Javascript

```html
<script src="lib/jquery-2.0.3.js"></script>
<script src="lib/swipebox/jquery.swipebox.js"></script>
<script src="lib/angular-swipebox/dist/angular-swipebox.js"></script>
```

```javascript
angular.module('app', ['ngSwipebox']);


angular.module('app').controller('AppCtrl', function ($scope) {
    $scope.photos = [
        {title: 'photo #1', href: 'http://lorempixel.com/1240/800/cats/1/'},
        {title: 'photo #2', href: 'http://lorempixel.com/1240/800/cats/2/'},
        {title: 'photo #3', href: 'http://lorempixel.com/1240/800/cats/3/'},
        {title: 'photo #4', href: 'http://lorempixel.com/1240/800/cats/4/'}
    ];
});
```

### HTML

```html
<div ng-controller="AppCtrl">
    <ng-swipebox photos="photos"></ng-swipebox>
</div>
```