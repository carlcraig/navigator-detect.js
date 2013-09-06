navigator-detect.js
===================

A javascript library to detect device, device-type, browser and operating system.

Allows for conditional css by adding classes to the html element.

Provides an easy to use api to perform conditional javascript based on the detected navigator.

This library is inspired by [`Mobile-Detect`](https://github.com/serbanghita/Mobile-Detect) for PHP.


What does it detect?
--------------------

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


How to Install?
---------------

#### 1. Get `navigator-detect.js`

[Download the latest version of `navigator-detect.js` here.](https://github.com/ThreeceeStudios/navigator-detect.js/archive/master.zip)
The `dist` directory will contain the latest build of `navigator-detect.js` including a minified version `navigator-detect.min.js`.


Or install via bower `bower install navigator-detect`

#### 2. Add `navigator-detect.min.js` to your html.

```html
<script src="navigator-detect.min.js"></script>
```

#### 3. Success *(hopefully)*

You should now be able to access the `window.navigatorDetect` object to use the javascript api.

Classes should also be added to the `<html>` element, based on the detected type, device, browser and OS.


API
===

### `window.navigatorDetect` object

The window navigatorDetect object is where you can access the navigator-detect api.

#### `.isMobile()`

Returns `true` if the visitor is using a mobile device.

#### `.isTablet()`

Returns `true` if the visitor is using a tablet device.

#### `.isDesktop()`

Returns `true` if the visitor is using a desktop device.

#### `.browser()`

Returns the name of the browser being used.

#### `.device()`

Returns the name of the device being used.

#### `.type()`

Similar to `.isMobile()`, `.isTablet()` and `.isDesktop()`. This will return a string
based on the type of device being used:

- `mobile`
- `tablet`
- `desktop`

#### `.os()`

Returns the name of the operating system being used.

#### `.isDevice( device )`

Checks if the device is the same as specified in `device` parameter

#### `.isBrowser( browser )`

Checks if the browser is the same as specified in `browser` parameter

#### `.isOS( os )`

Checks if the operating system is the same as specified in `os` parameter

License
=======

navigator-detect.js is dual licensed with the Apache-2.0 or MIT license.

See LICENSE-APACHE-2.0 and LICENSE-MIT for more details.
