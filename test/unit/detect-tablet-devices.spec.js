describe('navigator-detect tablet devices', function() {
  var navigatorDetect, userAgents, i;

  beforeEach(function() {
    navigatorDetect = new NavigatorDetect();
  });

  it('should detect tablet ipad device', function () {
    userAgents = [
      "Mozilla/5.0 (iPad; CPU OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5",
      "Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'iPad' );
      expect( navigatorDetect.type() ).toEqual( 'tablet' );
    }
  });

  it('should detect tablet blackberry device', function () {
    userAgents = [
      "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'BlackBerryTablet' );
      expect( navigatorDetect.type() ).toEqual( 'tablet' );
    }
  });

  it('should detect tablet windows device', function () {
    userAgents = [
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'WindowsTablet' );
      expect( navigatorDetect.type() ).toEqual( 'tablet' );
    }
  });

  it('should detect tablet android device', function () {
    userAgents = [
      "Mozilla/5.0 (Android; Tablet; rv:14.0) Gecko/14.0 Firefox/14.0",
      "Mozilla/5.0 (Linux; Android 4.1.2; Nexus 7 Build/JZ054K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'AndroidTablet' );
      expect( navigatorDetect.type() ).toEqual( 'tablet' );
    }
  });

});