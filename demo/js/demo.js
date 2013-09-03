var text;

//text = document.createTextNode( window.navigatorDetect.userAgent );
//document.getElementById( 'userAgent' ).appendChild( text );
//
//text = document.createTextNode( window.navigatorDetect.type() );
//document.getElementById( 'type' ).appendChild( text );
//
//text = document.createTextNode( window.navigatorDetect.device() );
//document.getElementById( 'device' ).appendChild( text );
//
//text = document.createTextNode( window.navigatorDetect.browser() );
//document.getElementById( 'browser' ).appendChild( text );
//
//text = document.createTextNode( window.navigatorDetect.isDesktop() );
//document.getElementById( 'isDesktop' ).appendChild( text );
//
//text = document.createTextNode( window.navigatorDetect.isTablet() );
//document.getElementById( 'isTablet' ).appendChild( text );
//
//text = document.createTextNode( window.navigatorDetect.isMobile() );
//document.getElementById( 'isMobile' ).appendChild( text );

var userAgent = window.navigator.userAgent;
var regex = "\biPhone.*Mobile|\biPod";

window.navigatorDetect = new NavigatorDetect();

//console.log(window.navigatorDetect.rules.mobileDevices.iPhone.replace(/b/g, '\\b'));
//
//console.log(new RegExp(window.navigatorDetect.rules.mobileDevices.iPhone.replace(new RegExp('\b', 'g'), '\\b')));
//
//console.log(new RegExp(window.navigatorDetect.rules.mobileDevices.iPhone.replace(/\b/, '\b')));
//
//console.log(new RegExp(window.navigatorDetect.rules.mobileDevices.iPhone.replace(/b/g, '\\b')).test(userAgent));

console.log(userAgent);

console.log(window.navigatorDetect.testRuleOnUA( window.navigatorDetect.rules.mobileDevices.Android ) );