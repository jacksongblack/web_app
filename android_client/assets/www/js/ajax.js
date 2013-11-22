//主要用于异步请求数据，输入参数为服务服务端地址（不要带有根节点）
function sendToServer(url) {
    var path = getRootPath() + url;
    alert(path);
    $.ajax({
        type: "GET",
        url: path,
        crossDomain: true,
        beforeSend: showLoader(),
        complete: function () {
            $.mobile.loading('hide')
        },
        data: {},
        dataType: 'json',
        success: function (response) {
            hideLoader();
            callBack(response,path);
        },
        error: function () {
            alert('出错了...链接出现问题，请检查你的网络');
        }
    });
};
//异步发送成功后回调函数，参数为返回的结果
function callBack(response,url) {
    var thermeObj = $("#news-theme");
    var pageObj = $("[data-role='page']");
    thermeObj.hide();
    pageObj.append(buildHtml(response));
    $(".news-content").trigger("create")
    $('.news-list').listview('refresh');
    addButton('[data-role="header"]', "返回", "hideAction('.addButton','#news-theme','.news-content')");
    bindContainer(".news-content");
};
//发送地址的根地址。返回结果为地址的字符串
function getRootPath() {
    return "http://10.0.2.2:3000/"
};
//创建需要插入的HTML字符串
function buildHtml(response) {
    var htmlCache = "";
    var newsContent;
    $.each(response, function (n, value) {
        newsContent = "<li><h3>" + value.title + "</h3>" + "<p>" + value.content + "</p></li>";
        newsContent = newsContent + htmlCache;
        htmlCache = newsContent;
    });
    return '<div data-role="content" class="news-content" data-iscroll>' + '<ul data-role="listview" class="news-list">' + newsContent + '</ul>';
};

function addButton(document, buttonName, callfunctionName) {
    $(document).append('<a  data-mini="true" class="addButton ui-btn-right" data-icon="forward" onclick="' + callfunctionName + '" >' + buttonName + '</a>')
    $('.addButton').button();
}

function hideAction(buttonElement, showElement, hideElement) {
    $(buttonElement).hide();
    $(showElement).show();
    $(hideElement).hide();
};
