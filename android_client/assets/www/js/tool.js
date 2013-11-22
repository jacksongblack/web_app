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
    $.mobile.ajaxEnabled=false;

});
function showLoader() {

    //ï¿½ï¿½Ê¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        textVisible: true, //Ö»ÏÔÊ¾×ÖµÄÄÚÈÝ
        theme: 'b',        //Ö÷Ìâ·ç¸ñ
        html: " <a onclick='hideLoader()'  data-icon='delete' data-role='button' class='stopLoader' style='display: none;' >¼ÓÔÚÖÐ....µã»÷È¡Ïû</a>"         //Òªï¿½ï¿½Ê¾ï¿½ï¿½htmlï¿½ï¿½ï¿½Ý£ï¿½ï¿½ï¿½Í¼Æ¬ï¿½ï¿½
    })
    $('a.stopLoader').show();
};
function hideLoader() {
    //ï¿½ï¿½ï¿½Ø¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $.mobile.loading('hide');
};
function bindLink(doc){
    $(doc).each(
        function () {
            $(this).bind("tap", function () {
                    sendToServer($(this).attr("path"));
                }
            )
        } )
};

function jsonToString(jsonObj){
   return JSON.stringify(jsonObj);
};
function stirngToJson(string){
   return eval('(' + string + ')');
}

function sessionToJson(session){
    sessionStorage.clear();
    return stirngToJson(session);
}


