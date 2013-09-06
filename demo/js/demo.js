document.getElementById( 'userAgent' ).appendChild( document.createTextNode( window.navigator.userAgent ) );
document.getElementById( 'type' ).appendChild( document.createTextNode( window.navigatorDetect.type() ) );
document.getElementById( 'device' ).appendChild( document.createTextNode( window.navigatorDetect.device() ) );
document.getElementById( 'browser' ).appendChild( document.createTextNode( window.navigatorDetect.browser() ) );
document.getElementById( 'os' ).appendChild( document.createTextNode( window.navigatorDetect.os() ) );
document.getElementById( 'isMobile' ).appendChild( document.createTextNode( window.navigatorDetect.isMobile() ) );
document.getElementById( 'isTablet' ).appendChild( document.createTextNode( window.navigatorDetect.isTablet() ) );
document.getElementById( 'isDesktop' ).appendChild( document.createTextNode( window.navigatorDetect.isDesktop() ) );