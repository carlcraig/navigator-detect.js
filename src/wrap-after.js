
  /**
   * Create Window object and AMD Modules
   */

  if ( typeof module === "object" && module && typeof module.exports === "object" ) {
    // Register in module.exports
    /** @expose */
    module.exports = NavigatorDetect;
  } else {
    // Register as a named AMD module
    if ( typeof define === "function" && typeof define.amd !== 'undefined' ) {
      define( "navigatorDetect", [], function () { return NavigatorDetect; } );
    }
  }

  // If there is a window object, we define navigatorDetect
  if ( typeof window === "object" && typeof window.document === "object" ) {
    window[ 'navigatorDetect' ] = new NavigatorDetect( window.navigator.userAgent, window.document.documentElement );
    window[ 'navigatorDetect' ].init();
  }

})( window );
