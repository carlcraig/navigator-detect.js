describe('navigator-detect mobile devices', function() {
  var navigatorDetect, userAgents, i;

  beforeEach(function() {
    navigatorDetect = new NavigatorDetect();
  });

  it('should detect mobile ipod device', function () {
    userAgents = [
      "Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML,like Gecko) Version/3.0 Mobile/3A100a Safari/419.3"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'iPod' );
      expect( navigatorDetect.type() ).toEqual( 'mobile' );
    }
  });

  it('should detect mobile iphone device', function () {
    userAgents = [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3",
      "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'iPhone' );
      expect( navigatorDetect.type() ).toEqual( 'mobile' );
    }
  });

  it('should detect mobile blackberry device', function () {
    userAgents = [
      "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11+",
      "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'BlackBerry' );
      expect( navigatorDetect.type() ).toEqual( 'mobile' );
    }
  });

  it('should detect mobile windows device', function () {
    userAgents = [
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'WindowsPhone' );
      expect( navigatorDetect.type() ).toEqual( 'mobile' );
    }
  });

  it('should detect mobile android device', function () {
    userAgents = [
      "Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
      "Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
      "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19",
      "Mozilla/5.0 (Android; Mobile; rv:14.0) Gecko/14.0 Firefox/14.0"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.device() ).toEqual( 'AndroidMobile' );
      expect( navigatorDetect.type() ).toEqual( 'mobile' );
    }
  });

});