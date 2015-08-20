angular.module("ngSwipebox", []).directive('ngSwipebox', [
  "$timeout", function($timeout) {
    return {
      restrict: "E",
      replace: true,
      scope: {
        photos: "=",
        useCSS: "=",
        useSVG: "=",
        initialIndexOnArray: "=",
        removeBarsOnMobile: "=",
        hideCloseButtonOnMobile: "=",
        hideBarsDelay: "=",
        videoMaxWidth: "=",
        vimeoColor: "=",
        loopAtEnd: "=",
        autoplayVideos: "=",
        queryStringData: "=",
        toggleClassOnLoad: "=",
        beforeOpen: "&beforeOpen",
        afterOpen: "&afterOpen",
        afterClose: "&afterClose",
        nextSlide: "&nextSlide",
        prevSlide: "&prevSlide"
      },
      templateUrl: function(element, attrs) {
        return attrs.templateUrl || "swipebox.html";
      },
      link: function(scope, element) {
        var options;
        options = {
          useCSS: scope.useCSS || true,
          useSVG: scope.useSVG || true,
          initialIndexOnArray: scope.initialIndexOnArray || 0,
          removeBarsOnMobile: scope.removeBarsOnMobile || true,
          hideCloseButtonOnMobile: scope.hideCloseButtonOnMobile || false,
          hideBarsDelay: scope.hideBarsDelay || 3000,
          videoMaxWidth: scope.videoMaxWidth || 1140,
          vimeoColor: scope.vimeoColor || 'cccccc',
          loopAtEnd: scope.loopAtEnd || false,
          autoplayVideos: scope.autoplayVideos || false,
          queryStringData: scope.queryStringData || {},
          toggleClassOnLoad: scope.toggleClassOnLoad || '',
          beforeOpen: scope.beforeOpen || function() {},
          afterOpen: scope.afterOpen || null,
          afterClose: scope.afterClose || function() {},
          nextSlide: scope.nextSlide || null,
          prevSlide: scope.prevSlide || null
        };
        return $timeout((function() {
          return angular.element(".swipebox").swipebox(options);
        }));
      }
    };
  }
]);

angular.module("ngSwipebox").run(["$templateCache", function($templateCache) {$templateCache.put("swipebox.html","<ul>\n    <li ng-repeat=\'photo in photos\'>\n        <a href=\'{{ photo.href }}\' class=\'swipebox\' title=\'{{ photo.title }}\'>\n            <img src=\'{{ photo.href }}\' alt=\'image\'>\n        </a>\n    </li>\n</ul>\n");}]);