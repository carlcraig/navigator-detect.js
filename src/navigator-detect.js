function NavigatorDetect( userAgent ) {
  if ( ! userAgent ) {
    userAgent = window.navigator.userAgent;
  }
  return {
    userAgent: userAgent,
    rules: {
      mobileDevices: {
        "iPod": "\biPod",
        "iPhone": "\biPhone.*Mobile",
        "BlackBerry": "BlackBerry|\bBB10\b|rim[0-9]+",
        "Android": "(?=.*\bAndroid\b.*)(?=.*\bMobile\b.*)"
      }
    },
    ruleToRegExp: function( rule ) {
      return new RegExp( rule.replace( new RegExp('\b', 'g'), '\\b') )
    },
    testRuleOnUA: function( rules ) {
      if ( typeof rules !== 'array') {
        rules = [ rules ];
      }
      for ( var i = 0; i < rules.length; i++ ) {
        if ( this.ruleToRegExp( rules[ i ] ).test( this.userAgent ) ) {
          return true;
        }
      }
      return false;
    }
  }
}