//返回根节点
function getRootPath() {
    return "http://192.168.0.251:3000/"
};
function showLoader() {

    $.mobile.loading('show', {
        textVisible: true, //ֻ��ʾ�ֵ�����
        theme: 'b',        //������
        html: " <a onclick='hideLoader()'  data-icon='delete' data-role='button' class='stopLoader' style='display: none;' >加载中..........点击取消</a>"         //Ҫ��ʾ��html���ݣ���ͼƬ��
    })
    $('a.stopLoader').show();
};
function hideLoader() {
    $.mobile.loading('hide');
};
//编辑并创建html页面
function buildHtml(response) {
    var htmlCache = "";
    var newsContent;
    $.each(response, function (n, value) {
        newsContent = "<li><img src=" + value.logo + " class='ul-li-icon'><h3><a  data-ajax='false' path='api/posts/" + value.id + "'>" + value.title + "</a></h3>" + "<p>" + value.description + "</p></li>";
        newsContent = newsContent + htmlCache;
        htmlCache = newsContent;
    });
    return newsContent;
};
function GetTo(url) {
    this.url = url;
    _this_= this;
}


GetTo.prototype = {
    constructor: GetTo,
    storageName:"flash",
    send: function () {
        showLoader();
        $.getJSON(getRootPath() + this.url, function (response) {
            sessionStorage.setItem(_this_.storageName, jsonToString(response))
        });
        var data = sessionStorage.getItem(_this_.storageName);
        hideLoader();
        return stirngToJson(data);
    },
    clearSessionStorage: function() {
        sessionStorage.removeItem(_this_.storageName);
    }
}





