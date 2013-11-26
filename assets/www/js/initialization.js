$(document).bind("mobileinit", function () {
    $.extend($.mobile, {
        defaultPageTransition: 'slidefade'
    });
    $.mobile.transitionFallbacks.slideout = "none"
    $.mobile.defaultPageTransition = 'slidefade';
    $.mobile.defaultDialogTransition = 'slidefade';
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    //ï¿½Ø±ï¿½DOM Cacheï¿½ï¿½ï¿½ï¿½ï¿½Ú´ï¿½ï¿½ï¿½ï¿?    $.mobile.page.prototype.options.domCache = false;
    $.mobile.buttonMarkup.hoverDelay = true;
    $.mobile.loadingMessage = "¼ÓÔØÖÐ";
    $.mobile.pageLoadErrorMessage = '³ö´íÁË';
    $.mobile.ajaxEnabled = false;
});