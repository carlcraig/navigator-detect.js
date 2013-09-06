/**
 * Copyright 2013 Threecee Studios
 * navigator-detect.js is dual licensed with the Apache-2.0 or MIT license.
 */
 
/**
 * NavigatorDetect
 * @param userAgent
 * @param documentObject
 * @constructor
 */
function NavigatorDetect( userAgent, documentObject ) {

  /**
   * User Agent
   * @type {*}
   */
  this.ua = userAgent;

  /**
   * Document Object
   * This will normally be the HTML tag
   * @type {*}
   */
  this.documentObject = documentObject;

  /**
   * Classes
   * @expose
   * @type {string}
   */
  this.classes = '';

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
   * Mobile Devices
   * @type {{iPod: string, iPhone: string, BlackBerry: string, WindowsPhone: string, AndroidMobile: string}}
   */
  this.mobileDevices = {
    "iPod": "\\biPod",
    "iPhone": "\\biPhone.*Mobile",
    "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
    "WindowsPhone": "(?=.*Windows.*)(?=.*Phone.*)",
    "AndroidMobile": "(?=.*Android.*)(?=.*Mobile.*)"
  };

  /**
   * Tablet Devices
   * @type {{iPad: string, BlackBerryTablet: string, WindowsTablet: string, AndroidTablet: string}}
   */
  this.tabletDevices = {
    "iPad": "iPad|iPad.*Mobile",
    "BlackBerryTablet": "PlayBook|RIM Tablet",
    "WindowsTablet": "Windows NT [0-9.]+; ARM;",
    "AndroidTablet": "\\bAndroid\\b"
  };

  /**
   * Mobile Browsers
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
   * Desktop Browsers
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
    "AndroidOS": "Android",
    "BlackBerryOS": "blackberry|\\bBB10\\b|RIM Tablet OS|BlackBerry;",
    "WindowsPhoneOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7",
    "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
    "webOS": "webOS|hpwOS",
    "badaOS": "\\bBada\\b"
  };

  /**
   * Operating Systems
   * @type {{Windows: string, MacOS: string, Linux: string}}
   */
  this.operatingSystems = {
    "WindowsOS": "Win",
    "MacOS": "Mac",
    "LinuxOS": "Linux"
  };
}

/**
 * Initialize NavigatorDetect to detect everything
 * @expose
 */
NavigatorDetect.prototype.init = function( userAgent, documentObject ) {
  if ( userAgent ) {
    this.ua = userAgent;
  }
  if ( documentObject ) {
    this.documentObject = documentObject;
  }
  this.type();
  this.browser();
  this.os();
  this.updateClasses();
};

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
  if ( ! this.detected.type ) {
    this.device();
  }
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
      if ( this.detected.type === 'desktop' ) {
        this.detected.type = 'mobile';
      }
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
      if ( this.detected.type === 'desktop' ) {
        this.detected.type = 'mobile';
      }
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
  return this.detected.device.toLowerCase() === device.toLowerCase();
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
  return this.detected.browser.toLowerCase() === browser.toLowerCase();
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
  return this.detected.os.toLowerCase() === os.toLowerCase();
};

/**
 * hasClass
 * Checks if the documentObject has the specified check_class
 * @param check_class
 * @returns {boolean}
 */
NavigatorDetect.prototype.hasClass = function( check_class ) {
  if ( this.documentObject ) {
    return new RegExp("\\b" + check_class + "\\b" ).test( this.documentObject );
  }
  return false;
};

/**
 * addClass
 * Adds a class to the document object
 * @param add_class
 */
NavigatorDetect.prototype.addClass = function( add_class ) {
  add_class = add_class.toLowerCase();
  if ( this.documentObject && ! this.hasClass( add_class ) ) {
    this.documentObject.className = ( this.documentObject.className + ' ' + add_class ).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    this.classes =  ( this.classes + ' ' + add_class ).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
};

/**
 * Update Classes
 * Adds classes to the document object
 */
NavigatorDetect.prototype.updateClasses = function() {
  // Add Type Class
  if ( this.detected.type && ! this.hasClass( this.detected.type ) ) {
    this.addClass( this.detected.type );
  }
  // Add Device Class
  if ( this.detected.device && this.detected.device !== 'unknown' ) {
    this.addClass( this.detected.device );
  }
  // Add Browser Class
  if ( this.detected.browser && this.detected.browser !== 'unknown' ) {
    this.addClass( this.detected.browser );
  }
  // Add OS Class
  if ( this.detected.os && this.detected.os !== 'unknown' ) {
    this.addClass( this.detected.os );
  }
};