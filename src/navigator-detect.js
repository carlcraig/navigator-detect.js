(function( window ) {

  function NavigatorDetect() {
    this.mobileDevices = {
      "iPod": "\biPod",
      "iPhone": "\biPhone.*Mobile",
      "BlackBerry": "BlackBerry|\bBB10\b|rim[0-9]+",
      "WindowsPhone": "(?=.*Windows.*)(?=.*Phone.*)",
      "AndroidMobile": "(?=.*Android.*)(?=.*Mobile.*)"
    };
    this.tabletDevices = {
      "iPad": "iPad|iPad.*Mobile",
      "BlackBerryTablet": "PlayBook|RIM Tablet",
      "WindowsTablet": "Windows NT [0-9.]+; ARM;|(?=.*Windows.*)(?=.*Touch.*)",
      "AndroidTablet": "\bAndroid\b"
    };
    this.mobileBrowsers = {
      "Chrome": "\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]*(Mobile)?",
      "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+",
      "IE": "IEMobile|MSIEMobile",
      "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
      "Safari": "Version.*Mobile.*Safari|Safari.*Mobile",
      "UCBrowser": "UC.*Browser|UCWEB"
    };
    this.desktopBrowsers = {
      "Opera": "OPR|Opera",
      "Firefox": "Firefox",
      "Chrome": "Chrome",
      "Safari": "Safari",
      "IE": "MSIE"
    };
    this.mobileOperatingSystems = {
      "Android": "Android",
      "BlackBerry": "blackberry|\bBB10\b|rim tablet os",
      "Windows": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7",
      "iOS": "\biPhone.*Mobile|\biPod|\biPad",
      "webOS": "webOS|hpwOS",
      "badaOS": "\bBada\b"
    }
  }

  NavigatorDetect.prototype.device = function() {

  };

  // If there is a window object, we define navigatorDetect
  if ( typeof window === "object" && typeof window.document === "object" ) {
    window.navigatorDetect = new NavigatorDetect();
  }


 /*

  var nd = {
    mobileDevices: {
      "iPod": "\biPod",
      "iPhone": "\biPhone.*Mobile",
      "BlackBerry": "BlackBerry|\bBB10\b|rim[0-9]+",
      "Windows": "(?=.*Windows.*)(?=.*Phone.*)",
      "Android": "(?=.*Android.*)(?=.*Mobile.*)"
    },
    tabletDevices: {
      "iPad": "iPad|iPad.*Mobile",
      "BlackBerryTablet": "PlayBook|RIM Tablet",
      "WindowsTablet": "Windows NT [0-9.]+; ARM;|(?=.*Windows.*)(?=.*Touch.*)",
      "AndroidTablet": "\bAndroid\b"
    },
    mobileBrowsers: {
      "Chrome": "\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]*(Mobile)?",
      "Dolfin": "\bDolfin\b",
      "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+",
      "Skyfire": "Skyfire",
      "IE": "IEMobile|MSIEMobile",
      "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
      "Bolt": "bolt",
      "TeaShark": "teashark",
      "Blazer": "Blazer",
      "Safari": "Version.*Mobile.*Safari|Safari.*Mobile",
      "Tizen": "Tizen",
      "UCBrowser": "UC.*Browser|UCWEB",
      "DiigoBrowser": "DiigoBrowser",
      "Puffin": "Puffin",
      "Mercury": "\bMercury\b",
      "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
    },
    desktopBrowsers: {
      "Opera": "OPR|Opera",
      "Firefox": "Firefox",
      "Chrome": "Chrome",
      "OmniWeb": "OmniWeb",
      "Safari": "Safari",
      "IE": "MSIE",
      "iCab": "iCab",
      "Konqueror": "Konqueror",
      "Camino": "Camino",
      "Netscape": "Netscape",
      "Mozilla": "Gecko"
    }
  };

*/

  /**
   * @constructor
   */
  /*
  function NavigatorDetect( userAgent ) {
    this.userAgent = userAgent;
    this.mobileDevices = {
      "iPod": "\biPod",
      "iPhone": "\biPhone.*Mobile",
      "BlackBerry": "BlackBerry|\bBB10\b|rim[0-9]+",
      "Windows": "(?=.*Windows.*)(?=.*Phone.*)",
      "Android": "(?=.*Android.*)(?=.*Mobile.*)"
    };
    this.tabletDevices = {
      "iPad": "iPad|iPad.*Mobile",
      "BlackBerryTablet": "PlayBook|RIM Tablet",
      "WindowsTablet": "Windows NT [0-9.]+; ARM;|(?=.*Windows.*)(?=.*Touch.*)",
      "AndroidTablet": "\bAndroid\b"
    };
    this.mobileBrowsers = {
      "Chrome": "\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]*(Mobile)?",
      "Dolfin": "\bDolfin\b",
      "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+",
      "Skyfire": "Skyfire",
      "IE": "IEMobile|MSIEMobile",
      "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
      "Bolt": "bolt",
      "TeaShark": "teashark",
      "Blazer": "Blazer",
      "Safari": "Version.*Mobile.*Safari|Safari.*Mobile",
      "Tizen": "Tizen",
      "UCBrowser": "UC.*Browser|UCWEB",
      "DiigoBrowser": "DiigoBrowser",
      "Puffin": "Puffin",
      "Mercury": "\bMercury\b",
      "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
    };
    this.desktopBrowsers = {
      "Opera": "OPR|Opera",
      "Firefox": "Firefox",
      "Chrome": "Chrome",
      "OmniWeb": "OmniWeb",
      "Safari": "Safari",
      "IE": "MSIE",
      "iCab": "iCab",
      "Konqueror": "Konqueror",
      "Camino": "Camino",
      "Netscape": "Netscape",
      "Mozilla": "Gecko"
    };
  }

  NavigatorDetect.prototype.ruleToRegExp = function( rule ) {
    return new RegExp( rule.replace( new RegExp( '\b', 'g' ), '\\b' ) )
  };

  NavigatorDetect.prototype.testRuleOnUA = function( rules ) {
    if ( Object.prototype.toString.call( rules ) !== '[object Array]' ) {
      rules = [ rules ];
    }
    for ( var i = 0; i < rules.length; i++ ) {
      if ( this.ruleToRegExp( rules[ i ] ).test( this.userAgent ) ) {
        return true;
      }
    }
    return false;
  };
//
  NavigatorDetect.prototype.type = function() {

  };

  NavigatorDetect.prototype.device = function() {

  };

  NavigatorDetect.prototype.browser = function() {

  };

  NavigatorDetect.prototype.os = function() {

  };

  NavigatorDetect.prototype.version = function() {

  };


  if ( typeof module === "object" && module && typeof module.exports === "object" ) {
    // Register in module.exports
    module.exports = NavigatorDetect;
  } else {
    // Register as a named AMD module
    if ( typeof define === "function" && typeof define.amd !== 'undefined' ) {
      define( "navigatorDetect", [], function () { return NavigatorDetect; } );
    }
  }
  // If there is a window object, we define navigatorDetect
  if ( typeof window === "object" && typeof window.document === "object" ) {
    window.navigatorDetect = new NavigatorDetect( window.navigator.userAgent );
  }
  */

})( window );