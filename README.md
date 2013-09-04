navigator-detect.js
===================

Detect:

- browser
- device
- type
- os
- version

There are 2 Versions of natigator-detect.js.

- navigator-detect.js
- navigator-detect-advanced.js

### Basic Version

Lacks lots of checks that are executed in the `advanced` version. Samller file
size.

### Advanced Version

Has many checks for different devices. Is useful if you need to get the exact
device the visitor is using. Also provides extended version commands.

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