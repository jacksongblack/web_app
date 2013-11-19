$(document).bind("mobileinit", function () {
    $.extend($.mobile, {
        defaultPageTransition: 'slidefade'
    });
    $.mobile.transitionFallbacks.slideout = "none"
    $.mobile.defaultPageTransition = 'slidefade';
    $.mobile.defaultDialogTransition = 'slidefade';
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    //关闭DOM Cache降低内存消耗
    $.mobile.page.prototype.options.domCache = false;
    $.mobile.buttonMarkup.hoverDelay = true;
    $.mobile.loadingMessage = "请等待";
    $.mobile.pageLoadErrorMessage = '抱歉～～～出错了';

});
function showLoader() {

    //显示加载器.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        textVisible: true, //是否显示文字
        theme: 'b',        //加载器主题样式a-e
        html: " <a onclick='hideLoader()'  data-icon='delete' data-role='button' class='stopLoader' style='display: none;' >载入中.....停止请点击我</a>"         //要显示的html内容，如图片等
    })
    $('a.stopLoader').show();
};
function hideLoader() {
    //隐藏加载器
    $.mobile.loading('hide');
};



$(document).bind('pagecreate', function () {
    $("ul.news_theme li a").each(
        function () {
            $(this).bind('click', function () {
                    showLoader();
                    getJsonToData(this);
                }
            )
        } )
});