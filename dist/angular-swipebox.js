angular.module("ngSwipebox", []).directive('ngSwipebox', [
  "$timeout", function($timeout) {
    return {
      restrict: "E",
      replace: true,
      scope: {
        photos: "=",
        useCss: "=",
        useSvg: "=",
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
        var options, update_preview_images;
        options = {
          useCSS: scope.useCss,
          useSVG: scope.useSvg,
          initialIndexOnArray: scope.initialIndexOnArray || 0,
          removeBarsOnMobile: scope.removeBarsOnMobile,
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
        update_preview_images = function() {
          return _.each(scope.photos, function(val) {
            return val.src = val.src ? val.src : val.href;
          });
        };
        update_preview_images();
        return $timeout((function() {
          return angular.element(".swipebox").swipebox(options);
        }));
      }
    };
  }
]);

angular.module("ngSwipebox").run(["$templateCache", function($templateCache) {$templateCache.put("swipebox.html","<ul>\n    <li ng-repeat=\'photo in photos\'>\n        <a ng-href=\'{{ photo.href }}\' class=\'swipebox\' title=\'{{ photo.title }}\'>\n            <img ng-src=\'{{ photo.src }}\' alt=\'image\'>\n        </a>\n    </li>\n</ul>\n");}]);