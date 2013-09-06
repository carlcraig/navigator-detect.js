describe('navigator-detect operating systems', function() {
  var navigatorDetect, userAgents, i;

  beforeEach(function() {
    navigatorDetect = new NavigatorDetect();
  });

  it('should detect windows operating system', function () {
    userAgents = [
      "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
      "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)",
      "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0 )",
      "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)",
      "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.29 Safari/525.13"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.os() ).toEqual( 'WindowsOS' );
    }
  });

  it('should detect mac operating system', function () {
    userAgents = [
      "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/125.2 (KHTML, like Gecko) Safari/125.8",
      "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/125.2 (KHTML, like Gecko) Safari/85.8"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.os() ).toEqual( 'MacOS' );
    }
  });

  it('should detect linux operating system', function () {
    userAgents = [
      "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.6) Gecko/20050614 Firefox/0.8",
      "Mozilla/5.0 (compatible; Konqueror/3.5; Linux) KHTML/3.5.10 (like Gecko) (Kubuntu)"
    ];
    for ( i = 0; i < userAgents.length; i++ ) {
      cleanNavigator( navigatorDetect ).ua = userAgents[ i ];
      expect( navigatorDetect.os() ).toEqual( 'LinuxOS' );
    }
  });

});