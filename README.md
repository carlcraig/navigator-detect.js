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
[Conditional CSS](https://github.com/ThreeceeStudios/navigator-detect.js#conditional-css) |
[Developing navigator-detect.js] (https://github.com/ThreeceeStudios/navigator-detect.js#developing-navigator-detectjs) |
[Running the Unit Tests] (https://github.com/ThreeceeStudios/navigator-detect.js#running-the-unit-tests) |
[Contributing] (https://github.com/ThreeceeStudios/navigator-detect.js#contributing) |
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


Conditional CSS
===============

When navigator-detect.js is loaded in a html page, it will attach classes to the html element depending on the
detected device, type, browser and operating system.

It will only add a class if it is detected. The class names will generally be the detected name in lowercase.

To see all of the detected devices, browsers and operating systems [please click here.](https://github.com/ThreeceeStudios/navigator-detect.js#what-does-it-detect)

#### Examples

When html page is viewed through an `iPhone` the following classes will be present on the html element.

```html
<html class="mobile iphone safari ios">
```

When html page is viewed through desktop `chrome` browser, the classes will be as follows:

```html
<html class="desktop chrome windowsos">
```


Developing navigator-detect.js
==============================

navigator-detect.js is built on node with `grunt`

To get started, clone navigator-detect.js.

```
git clone https://github.com/ThreeceeStudios/navigator-detect.js.git

cd navigator-detect.js
```

Then run npm install to install all required dependencies.

```
npm install
```

You will need a global version of `grunt-cli` to utilize the grunt tasks.

```
npm install -g grunt-cli
```

You should now be ready to run all the unit tests, and run the build tasks.

To build a new dist of navigator-detect.js and update the demo. Run the following command:

```
grunt build
```

This will require a local installation of `closure-compiler`. You will also need to set a `CLOSURE_PATH` environment
variable which points to the root of the closure-compiler installation directory. Meaning the compiler.jar should be
located `CLOSURE_PATH/build/compiler.jar`. [Click here for more information on closure-compiler.](https://developers.google.com/closure/compiler/)

Alternatively, you may not want to install closure-compiler. In which case you can use the following command:

```
grunt build:no-closure
```

The minified file is slightly larger when using this method as some method names are not compressed.


Running the Unit Tests
======================

To run the unit tests you will need a karma server running. This can be achieved with the following command.

```
grunt karma:unit watch
```

Or manually start the karma server with the following

```
karma start test/karma.conf.js --browsers Chrome
```

Then manually force the unit tests to run

```
grunt karma:unit:run
```

Or use the watch task, to watch for changes and automatically run unit tests.

```
grunt watch
```


Contributing
============

- [Open a Pull Request (PR)](https://github.com/ThreeceeStudios/navigator-detect.js/pull/new/master)
- Make sure your PR is on a new branch you created from the latest version of master branch
- Please do not open a PR from your master branch
- Open a PR even if your code is incomplete to start a discussion and to collect feedback
- Please make sure all unit tests pass, and add new tests for any added features.


License
=======

navigator-detect.js is dual licensed with the Apache-2.0 or MIT license.

See LICENSE-APACHE-2.0 and LICENSE-MIT for more details.
