/**
 * navigator-detect.js - v0.0.0 - 2013-09-06
 * @license Copyright (c) 2013 Threecee Studios
 * Dual licensed with the Apache-2.0 or MIT license.
 */
(function(window) {
    function NavigatorDetect(userAgent, documentObject) {
        this.ua = userAgent;
        this.documentObject = documentObject;
        this.detected = {
            device: false,
            type: false,
            browser: false,
            os: false
        };
        this.mobileDevices = {
            iPod: "\\biPod",
            iPhone: "\\biPhone.*Mobile",
            BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
            WindowsPhone: "(?=.*Windows.*)(?=.*Phone.*)",
            AndroidMobile: "(?=.*Android.*)(?=.*Mobile.*)"
        };
        this.tabletDevices = {
            iPad: "iPad|iPad.*Mobile",
            BlackBerryTablet: "PlayBook|RIM Tablet",
            WindowsTablet: "Windows NT [0-9.]+; ARM;",
            AndroidTablet: "\\bAndroid\\b"
        };
        this.mobileBrowsers = {
            Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]*(Mobile)?",
            Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+",
            IE: "IEMobile|MSIEMobile",
            Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
            Safari: "Version.*Mobile.*Safari|Safari.*Mobile",
            UCBrowser: "UC.*Browser|UCWEB"
        };
        this.desktopBrowsers = {
            Opera: "OPR|Opera",
            Firefox: "Firefox",
            Chrome: "Chrome",
            Safari: "Safari",
            IE: "MSIE"
        };
        this.mobileOperatingSystems = {
            AndroidOS: "Android",
            BlackBerryOS: "blackberry|\\bBB10\\b|RIM Tablet OS|BlackBerry;",
            WindowsPhoneOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7",
            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
            webOS: "webOS|hpwOS",
            badaOS: "\\bBada\\b"
        };
        this.operatingSystems = {
            WindowsOS: "Win",
            MacOS: "Mac",
            LinuxOS: "Linux"
        };
    }
    NavigatorDetect.prototype.init = function(userAgent, documentObject) {
        if (userAgent) {
            this.ua = userAgent;
        }
        if (documentObject) {
            this.documentObject = documentObject;
        }
        this.type();
        this.browser();
        this.os();
        this.updateClasses();
    };
    NavigatorDetect.prototype.testRule = function(rules, haystack) {
        if (Object.prototype.toString.call(rules) !== "[object Array]") {
            rules = [ rules ];
        }
        for (var i = 0; i < rules.length; i++) {
            if (new RegExp(rules[i]).test(haystack)) {
                return true;
            }
        }
        return false;
    };
    NavigatorDetect.prototype.type = function() {
        if (!this.detected.type) {
            this.device();
        }
        return this.detected.type;
    };
    NavigatorDetect.prototype.device = function() {
        if (this.detected.device) {
            return this.detected.device;
        }
        var prop;
        for (prop in this.mobileDevices) {
            if (this.mobileDevices.hasOwnProperty(prop) && this.testRule(this.mobileDevices[prop], this.ua)) {
                this.detected.type = "mobile";
                return this.detected.device = prop;
            }
        }
        for (prop in this.tabletDevices) {
            if (this.tabletDevices.hasOwnProperty(prop) && this.testRule(this.tabletDevices[prop], this.ua)) {
                this.detected.type = "tablet";
                return this.detected.device = prop;
            }
        }
        this.detected.type = "desktop";
        return this.detected.device = "unknown";
    };
    NavigatorDetect.prototype.browser = function() {
        if (this.detected.browser) {
            return this.detected.browser;
        }
        var prop;
        for (prop in this.mobileBrowsers) {
            if (this.mobileBrowsers.hasOwnProperty(prop) && this.testRule(this.mobileBrowsers[prop], this.ua)) {
                if (this.detected.type === "desktop") {
                    this.detected.type = "mobile";
                }
                return this.detected.browser = prop;
            }
        }
        if (window.opera) {
            return this.detected.browser = "Opera";
        }
        for (prop in this.desktopBrowsers) {
            if (this.desktopBrowsers.hasOwnProperty(prop) && this.testRule(this.desktopBrowsers[prop], this.ua)) {
                return this.detected.browser = prop;
            }
        }
        return this.detected.browser = "unknown";
    };
    NavigatorDetect.prototype.os = function() {
        if (this.detected.os) {
            return this.detected.os;
        }
        var prop;
        for (prop in this.mobileOperatingSystems) {
            if (this.mobileOperatingSystems.hasOwnProperty(prop) && this.testRule(this.mobileOperatingSystems[prop], this.ua)) {
                if (this.detected.type === "desktop") {
                    this.detected.type = "mobile";
                }
                return this.detected.os = prop;
            }
        }
        for (prop in this.operatingSystems) {
            if (this.operatingSystems.hasOwnProperty(prop)) {
                if (this.testRule(this.operatingSystems[prop], this.ua)) {
                    return this.detected.os = prop;
                }
            }
        }
        return this.detected.os = "unknown";
    };
    NavigatorDetect.prototype.isMobile = function() {
        if (!this.detected.type) {
            this.device();
        }
        return this.detected.type === "mobile";
    };
    NavigatorDetect.prototype.isTablet = function() {
        if (!this.detected.type) {
            this.device();
        }
        return this.detected.type === "tablet";
    };
    NavigatorDetect.prototype.isDesktop = function() {
        if (!this.detected.type) {
            this.device();
        }
        return this.detected.type === "desktop";
    };
    NavigatorDetect.prototype.isDevice = function(device) {
        if (!this.detected.device) {
            this.device();
        }
        return this.detected.device.toLowerCase() === device.toLowerCase();
    };
    NavigatorDetect.prototype.isBrowser = function(browser) {
        if (!this.detected.browser) {
            this.browser();
        }
        return this.detected.browser.toLowerCase() === browser.toLowerCase();
    };
    NavigatorDetect.prototype.isOS = function(os) {
        if (!this.detected.os) {
            this.os();
        }
        return this.detected.os.toLowerCase() === os.toLowerCase();
    };
    NavigatorDetect.prototype.hasClass = function(check_class) {
        if (this.documentObject) {
            return new RegExp("\\b" + check_class + "\\b").test(this.documentObject);
        }
        return false;
    };
    NavigatorDetect.prototype.addClass = function(add_class) {
        add_class = add_class.toLowerCase();
        if (this.documentObject && !this.hasClass(add_class)) {
            this.documentObject.className = (this.documentObject.className + " " + add_class).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            this.classes += " " + add_class;
        }
    };
    NavigatorDetect.prototype.updateClasses = function() {
        if (this.detected.type && !this.hasClass(this.detected.type)) {
            this.addClass(this.detected.type);
        }
        if (this.detected.device && this.detected.device !== "unknown") {
            this.addClass(this.detected.device);
        }
        if (this.detected.browser && this.detected.browser !== "unknown") {
            this.addClass(this.detected.browser);
        }
        if (this.detected.os && this.detected.os !== "unknown") {
            this.addClass(this.detected.os);
        }
    };
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = NavigatorDetect;
    } else {
        if (typeof define === "function" && typeof define.amd !== "undefined") {
            define("navigatorDetect", [], function() {
                return NavigatorDetect;
            });
        }
    }
    if (typeof window === "object" && typeof window.document === "object") {
        window["navigatorDetect"] = new NavigatorDetect(window.navigator.userAgent, window.document.documentElement);
        window["navigatorDetect"].init();
    }
})(window);