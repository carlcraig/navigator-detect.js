describe('navigator-detect browsers', function() {
  var navigatorDetect, userAgents, i;

  beforeEach(function() {
    navigatorDetect = new NavigatorDetect();
  });

  it('should detect firefox browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0",
      "Mozilla/5.0 (Android; Mobile; rv:14.0) Gecko/14.0 Firefox/14.0",
      "Mozilla/5.0 (Android; Tablet; rv:14.0) Gecko/14.0 Firefox/14.0"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Firefox' );
    }
  });

  it('should detect chrome browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.66 Safari/537.36",
      "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19",
      "Mozilla/5.0 (Linux; Android 4.1.2; Nexus 7 Build/JZ054K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Chrome' );
    }
  });

  it('should detect opera browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36 OPR/16.0.1196.62"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Opera' );
    }
  });

  it('should detect safari browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Safari' );
    }
  });

  it('should detect internet explorer browser', function () {
    userAgents = [
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch; .NET4.0E;)"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'IE' );
    }
  });

});