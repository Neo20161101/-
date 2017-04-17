/**
 * Created by Hello on 2016/10/20.
 */
NSString *disableZoomJSString = @"var script = document.createElement('meta');"

"script.name = 'viewport';"

"script.content=\"width=device-width, initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0, user-scalable=no\";"

"document.getElementsByTagName('head')[0].appendChild(script);";

[webView stringByEvaluatingJavaScriptFromString:disableZoomJSString];