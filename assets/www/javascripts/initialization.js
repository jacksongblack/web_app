$(document).bind("mobileinit", function () {
    $.mobile.transitionFallbacks.slideout = "none"
//    $.mobile.defaultPageTransition = 'slidefade';
//    $.mobile.defaultDialogTransition = 'slidefade';
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    $.mobile.buttonMarkup.hoverDelay = true;
    $.mobile.loadingMessage = "加载中";
    $.mobile.pageLoadErrorMessage = '出错了';
});