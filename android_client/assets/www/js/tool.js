$(document).bind("mobileinit", function () {
    $.extend($.mobile, {
        defaultPageTransition: 'slidefade'
    });
    $.mobile.transitionFallbacks.slideout = "none"
    $.mobile.defaultPageTransition = 'slidefade';
    $.mobile.defaultDialogTransition = 'slidefade';
    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
    //�ر�DOM Cache�����ڴ����
    $.mobile.page.prototype.options.domCache = false;
    $.mobile.buttonMarkup.hoverDelay = true;
    $.mobile.loadingMessage = "��ȴ�";
    $.mobile.pageLoadErrorMessage = '��Ǹ������������';

});
function showLoader() {

    //��ʾ������.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        textVisible: true, //�Ƿ���ʾ����
        theme: 'b',        //������������ʽa-e
        html: " <a onclick='hideLoader()'  data-icon='delete' data-role='button' class='stopLoader' style='display: none;' >载入中.....点击取消</a>"         //Ҫ��ʾ��html���ݣ���ͼƬ��
    })
    $('a.stopLoader').show();
};
function hideLoader() {
    //���ؼ�����
    $.mobile.loading('hide');
};



$(document).bind('pagecreate', function () {
    $("ul.news_theme li a").each(
    function () {
         var url =  $(this).attr("href")
        $(this).bind('click', function () {
                        getJsonToData(url);
                }
            )
        } )
});