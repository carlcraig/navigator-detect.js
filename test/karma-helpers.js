function cleanNavigator( navigatorDetect ) {
  navigatorDetect.ua = '';
  navigatorDetect.detected.type = '';
  navigatorDetect.detected.device = '';
  navigatorDetect.detected.browser = '';
  navigatorDetect.detected.os = '';
  return navigatorDetect;
}