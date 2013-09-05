describe('navigator-detect', function() {
  var navigatorDetect, userAgents, i;

  beforeEach(function() {
    navigatorDetect = new NavigatorDetect();
  });

  function cleanNavigator( navigatorDetect ) {
    navigatorDetect.ua = '';
    navigatorDetect.detected.type = '';
    navigatorDetect.detected.device = '';
    navigatorDetect.detected.browser = '';
    navigatorDetect.detected.os = '';
    return navigatorDetect;
  }

  it('should detect desktop firefox browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Firefox' );
      expect( navigatorDetect.type() ).toEqual( 'desktop' );
    }
  });

  it('should detect desktop chrome browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.66 Safari/537.36"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Chrome' );
      expect( navigatorDetect.type() ).toEqual( 'desktop' );
    }
  });

  it('should detect desktop opera browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36 OPR/16.0.1196.62"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Opera' );
      expect( navigatorDetect.type() ).toEqual( 'desktop' );
    }
  });

  it('should detect desktop safari browser', function () {
    userAgents = [
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'Safari' );
      expect( navigatorDetect.type() ).toEqual( 'desktop' );
    }
  });

  it('should detect desktop internet explorer browser', function () {
    userAgents = [
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch; .NET4.0E;)"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.browser() ).toEqual( 'IE' );
      expect( navigatorDetect.type() ).toEqual( 'desktop' );
    }
  });

});