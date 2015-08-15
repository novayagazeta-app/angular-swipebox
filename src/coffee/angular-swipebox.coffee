angular.module("ngSwipebox", []).directive 'ngSwipebox', ["$timeout", ($timeout) ->
    restrict: "E"

    replace: yes

    scope: {
        photos: "="
        useCSS: "="                     # false will force the use of jQuery for animations
        initialIndexOnArray: "="        # which image index to init when a array is passed
        hideCloseButtonOnMobile: "="    # true will hide the close button on mobile devices
        hideBarsDelay: "="              # delay before hiding bars on desktop
        videoMaxWidth: "="              # videos max width
        loopAtEnd: "="                  # true will return to the first image after the last image is reached
        autoplayVideos: "="             # true will autoplay Youtube and Vimeo videos
        queryStringData: "="            # plain object with custom query string arguments to pass/override for video URLs,
        toggleClassOnLoad: "="          # CSS class that can be toggled when the slide will be loaded (like 'hidden' of Bootstrap)
        beforeOpen: "&beforeOpen"       # called before opening
        afterOpen: "&afterOpen"         # called after opening
        afterClose: "&afterClose"       # called after closing
    }

    templateUrl: (element, attrs) ->
        attrs.templateUrl or "swipebox.html"


    link: (scope, element) ->

        options =
            useCSS: scope.useCSS or yes
            initialIndexOnArray: scope.initialIndexOnArray or 0
            hideCloseButtonOnMobile: scope.hideCloseButtonOnMobile or no
            hideBarsDelay: scope.hideBarsDelay or 3000
            videoMaxWidth: scope.videoMaxWidth or 1140
            loopAtEnd: scope.loopAtEnd or no
            autoplayVideos: scope.autoplayVideos or no
            queryStringData: scope.queryStringData or {}
            toggleClassOnLoad: scope.toggleClassOnLoad or ''
            beforeOpen: scope.beforeOpen or () ->
            afterOpen: scope.afterOpen or null
            afterClose: scope.afterClose or () ->


        $timeout ( ->
            angular.element(".swipebox").swipebox options
        )
]
