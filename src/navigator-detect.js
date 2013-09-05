/**
 * Copyright 2013 Threecee Studios
 * navigator-detect.js is dual licensed with the Apache-2.0 or MIT license.
 */
(function( window ) {

  /**
   * NavigatorDetect
   * @param userAgent
   * @constructor
   */
  function NavigatorDetect( userAgent ) {
    /**
     * User Agent
     * @type {*}
     */
    this.ua = userAgent;

    /**
     * Detected Values
     * @type {{device: boolean, type: boolean, browser: boolean, os: boolean}}
     */
    this.detected = {
      device: false,
      type: false,
      browser: false,
      os: false
    };

    /**
     * Mobile Device Rules
     * @type {{iPod: string, iPhone: string, BlackBerry: string, WindowsPhone: string, AndroidMobile: string}}
     */
    this.mobileDevices = {
      "iPod": "\\biPod",
      "iPhone": "\\biPhone.*Mobile",
      "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
      "WindowsPhone": "(?=.*Windows.*)(?=.*Phone.*)",
      "AndroidMobile": "(?=.*Android.*)(?=.*Mobile.*)",
      "GenericMobile": "Mobile"
    };

    /**
     * Tablet Device Rules
     * @type {{iPad: string, BlackBerryTablet: string, WindowsTablet: string, AndroidTablet: string}}
     */
    this.tabletDevices = {
      "iPad": "iPad|iPad.*Mobile",
      "BlackBerryTablet": "PlayBook|RIM Tablet",
      "WindowsTablet": "Windows NT [0-9.]+; ARM;|(?=.*Windows.*)(?=.*Touch.*)",
      "AndroidTablet": "\\bAndroid\\b"
    };

    /**
     * Mobile Browser Rules
     * @type {{Chrome: string, Opera: string, IE: string, Firefox: string, Safari: string, UCBrowser: string}}
     */
    this.mobileBrowsers = {
      "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]*(Mobile)?",
      "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+",
      "IE": "IEMobile|MSIEMobile",
      "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
      "Safari": "Version.*Mobile.*Safari|Safari.*Mobile",
      "UCBrowser": "UC.*Browser|UCWEB"
    };

    /**
     * Desktop Browser Rules
     * @type {{Opera: string, Firefox: string, Chrome: string, Safari: string, IE: string}}
     */
    this.desktopBrowsers = {
      "Opera": "OPR|Opera",
      "Firefox": "Firefox",
      "Chrome": "Chrome",
      "Safari": "Safari",
      "IE": "MSIE"
    };

    /**
     * Mobile Operating Systems
     * @type {{Android: string, BlackBerry: string, Windows: string, iOS: string, webOS: string, badaOS: string}}
     */
    this.mobileOperatingSystems = {
      "Android": "Android",
      "BlackBerry": "blackberry|\\bBB10\\b|RIM Tablet OS|BlackBerry;",
      "Windows": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7",
      "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
      "webOS": "webOS|hpwOS",
      "badaOS": "\\bBada\\b"
    };

    /**
     * Operating Systems
     * @type {{Windows: string, MacOS: string, UNIX: string, Linux: string}}
     */
    this.operatingSystems = {
      "Windows": "Win",
      "MacOS": "Mac",
      "UNIX": "X11",
      "Linux": "Linux"
    };
  }

  /**
   * Test Rule
   * @param rules
   * @param haystack
   * @returns {boolean}
   */
  NavigatorDetect.prototype.testRule = function( rules, haystack ) {
    if ( Object.prototype.toString.call( rules ) !== '[object Array]' ) {
      rules = [ rules ];
    }
    for ( var i = 0; i < rules.length; i++ ) {
      if ( new RegExp( rules[ i ] ).test( haystack ) ) {
        return true;
      }
    }
    return false;
  };

  /**
   * Type
   * @expose
   * @returns {*}
   */
  NavigatorDetect.prototype.type = function() {
    if ( this.detected.type ) {
      return this.detected.type;
    }
    this.device();
    return this.detected.type;
  };

  /**
   * Device
   * @expose
   * @returns {*}
   */
  NavigatorDetect.prototype.device = function() {
    if ( this.detected.device ) {
      return this.detected.device;
    }
    var prop;
    for ( prop in this.mobileDevices ) {
      if ( this.mobileDevices.hasOwnProperty( prop ) && this.testRule( this.mobileDevices[ prop ], this.ua ) ) {
        this.detected.type = 'mobile';
        return this.detected.device = prop;
      }
    }
    for ( prop in this.tabletDevices ) {
      if ( this.tabletDevices.hasOwnProperty( prop ) && this.testRule( this.tabletDevices[ prop ], this.ua ) ) {
        this.detected.type = 'tablet';
        return this.detected.device = prop;
      }
    }
    this.detected.type = 'desktop';
    return this.detected.device = 'unknown';
  };

  /**
   * Browser
   * @expose
   * @returns {*}
   */
  NavigatorDetect.prototype.browser = function() {
    if ( this.detected.browser ) {
      return this.detected.browser;
    }
    var prop;
    for ( prop in this.mobileBrowsers ) {
      if ( this.mobileBrowsers.hasOwnProperty( prop ) && this.testRule( this.mobileBrowsers[ prop ], this.ua ) ) {
        return this.detected.browser = prop;
      }
    }
    if ( window.opera ) {
      return this.detected.browser = 'Opera';
    }
    for ( prop in this.desktopBrowsers ) {
      if ( this.desktopBrowsers.hasOwnProperty( prop ) && this.testRule( this.desktopBrowsers[ prop ], this.ua ) ) {
        return this.detected.browser = prop;
      }
    }
    return this.detected.browser = 'unknown';
  };

  /**
   * OS
   * @expose
   * @returns {*}
   */
  NavigatorDetect.prototype.os = function() {
    if ( this.detected.os ) {
      return this.detected.os;
    }
    var prop;
    for ( prop in this.mobileOperatingSystems ) {
      if ( this.mobileOperatingSystems.hasOwnProperty( prop ) && this.testRule( this.mobileOperatingSystems[ prop ], this.ua ) ) {
        return this.detected.os = prop;
      }
    }
    for ( prop in this.operatingSystems ) {
      if ( this.operatingSystems.hasOwnProperty( prop ) ) {
        if ( this.testRule( this.operatingSystems[ prop ], this.ua ) ) {
          return this.detected.os = prop;
        }
      }
    }
    return this.detected.os = 'unknown';
  };

  /**
   * isMobile
   * @expose
   * @returns {boolean}
   */
  NavigatorDetect.prototype.isMobile = function() {
    if ( ! this.detected.type ) {
      this.device();
    }
    return this.detected.type === 'mobile';
  };

  /**
   * isTablet
   * @expose
   * @returns {boolean}
   */
  NavigatorDetect.prototype.isTablet = function() {
    if ( ! this.detected.type ) {
      this.device();
    }
    return this.detected.type === 'tablet';
  };

  /**
   * isDesktop
   * @expose
   * @returns {boolean}
   */
  NavigatorDetect.prototype.isDesktop = function() {
    if ( ! this.detected.type ) {
      this.device();
    }
    return this.detected.type === 'desktop';
  };

  /**
   * isDevice
   * @expose
   * @param device
   * @returns {boolean}
   */
  NavigatorDetect.prototype.isDevice = function( device ) {
    if ( ! this.detected.device ) {
      this.device();
    }
    return this.detected.device === device;
  };

  /**
   * isBrowser
   * @expose
   * @param browser
   * @returns {boolean}
   */
  NavigatorDetect.prototype.isBrowser = function( browser ) {
    if ( ! this.detected.browser ) {
      this.browser();
    }
    return this.detected.browser === browser;
  };

  /**
   * isOS
   * @expose
   * @param os
   * @returns {boolean}
   */
  NavigatorDetect.prototype.isOS = function( os ) {
    if ( ! this.detected.os ) {
      this.os();
    }
    return this.detected.os === os;
  };

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
    window[ 'navigatorDetect' ] = new NavigatorDetect( window.navigator.userAgent );
  }

})( window );
