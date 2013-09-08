navigator-detect.js
===================

[![Build Status](https://travis-ci.org/ThreeceeStudios/navigator-detect.js.png)](https://travis-ci.org/ThreeceeStudios/navigator-detect.js)

navigator-detect.js is a script to detect the Device, Device Type, Browser and Operating System.

It provides a `navigatorDetect` object with many useful methods for detecting the above. navigator-detect.js will
also add classes to the html element to allow for conditional css.

This script is inspired by [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect) for PHP and [device.js](https://github.com/matthewhudson/device.js)

Contents              |
----------------------|
[What does it detect?](https://github.com/ThreeceeStudios/navigator-detect.js#what-does-it-detect) |
[How reliable is navigator-detect.js](https://github.com/ThreeceeStudios/navigator-detect.js#how-reliable-is-navigator-detectjs) |
[How to install?](https://github.com/ThreeceeStudios/navigator-detect.js#how-to-install) |
[The navigatorDetect object](https://github.com/ThreeceeStudios/navigator-detect.js#the-navigatordetect-object) |
[License] (https://github.com/ThreeceeStudios/navigator-detect.js#license) |


What does it detect?
====================

navigator-detect.js will detect the following:

| Type    | Mobile Devices | Tablet Devices   | Browsers | Operating Systems |
:---------|----------------|------------------|----------|-------------------|
| Mobile  | iPod           | iPad             | Chrome   | AndroidOS         |
| Tablet  | iPhone         | BlackBerryTablet | Opera    | BlackBerryOS      |
| Desktop | BlackBerry     | WindowsTablet    | IE       | WindowsPhoneOS    |
|         | WindowsPhone   | AndroidTablet    | Firefox  | iOS               |
|         | AndroidMobile  |                  | Safari   | webOS             |
|         | GenericMobile  |                  | UCBrowser| badaOS            |
|         |                |                  |          | WindowsOS         |
|         |                |                  |          | MacOS             |
|         |                |                  |          | LinuxOS           |



How reliable is navigator-detect.js?
====================================

This script will try to detect the device, type, browser and operating system based on the `userAgent` of 
the visitor. UserAgent's are complicated, and vary for most devices and browsers and therefore we cannot guarantee that
the detection is correct.

This script is still under heavy development to improve the detection of mobile and tablet devices along with browsers
and operating systems.

To improve detection we will need to add lots of regex for different devices, browsers and operating systems. This
will hugely increase the filesize of navigator-detect.js. Therefore. we will look into create an `extended` version
which will have a wider scope of detection, with increased accuracy (and a larger filesize).



How to Install?
===============

#### 1. Get `navigator-detect.js`

[Download the latest version of `navigator-detect.js` here.](https://github.com/ThreeceeStudios/navigator-detect.js/archive/master.zip)
The `dist` directory will contain the latest build of `navigator-detect.js` including a minified version `navigator-detect.min.js`.


Or install via bower `bower install navigator-detect`


#### 2. Add `navigator-detect.min.js` to your html.

```html
<script src="navigator-detect.min.js"></script>
```

You should now be able to access the `window.navigatorDetect` object to use the javascript api.

Classes should also be added to the `<html>` element, based on the detected type, device, browser and OS.



The navigatorDetect object
==========================

The navigator-detect.js will attach a `navigatorDetect` object to the `window` object, when it is loaded on a html
page client-side.

```javascript
window.navigatorDetect
```

There are many methods which can be used on this object.

Methods       | Example                                        | Description                          
|:------------|:-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
**device**    | `window.navigatorDetect.device()`              | Returns the name of device or `unknown` if no device detected                                                                                   |
**type**      | `window.navigatorDetect.type()`                | Returns the type of device `mobile`, `tablet` or `desktop`                                                                                      |
**browser**   | `window.navigatorDetect.browser()`             | Returns the name of browser or `unknown` if no browser detected                                                                                 |
**os**        | `window.navigatorDetect.os()`                  | Returns the name of operating system or `unknown` if no OS detected                                                                             |
**isMobile**  | `window.navigatorDetect.isMobile()`            | Returns `true` if the device type is `mobile`                                                                                                   |
**isTablet**  | `window.navigatorDetect.isTablet()`            | Returns `true` if the device type is `tablet`                                                                                                   |
**isDesktop** | `window.navigatorDetect.isDesktop()`           | Returns `true` if the device type is `desktop`                                                                                                  |
**isDevice**  | `window.navigatorDetect.isDevice( "iPhone" )`  | Checks if the device is equal to the device argument given. In this case will return `true` if the detected device is `iPhone`                  |
**isBrowser** | `window.navigatorDetect.isBrowser( "Chrome" )` | Checks if the browser is equal to the browser argument given. In this case will return `true` if the detected browser is `Chrome`               |
**isOS**      | `window.navigatorDetect.isOS( "MacOS" )`       | Checks if the operating system is equal to the operating system argument given. In this case will return `true` if the detected OS is `MacOS`   |



License
=======

navigator-detect.js is dual licensed with the Apache-2.0 or MIT license.

See LICENSE-APACHE-2.0 and LICENSE-MIT for more details.
