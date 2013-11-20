//主要用于异步请求数据，输入参数为服务服务端地址（不要带有根节点）
function sendToServer(url) {
    var path = getRootPath() + url;
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
            callBack(response, url);
        },
        error: function () {
//            console.error("error");
            alert('出错了...链接出现问题，请检查你的网络');
        }
    });
};
//异步发送成功后回调函数，参数为返回的结果
function callBack(response) {
    var thermeObj = $("#news-theme");
    var pageObj = $("[data-role='page']");
    thermeObj.hide();
    pageObj.append(buildHtml(response));
    $(".news-content").trigger("create")
    $('.news-list').listview('refresh');
    addButton('[data-role="header"]',"返回","hideButton(.addButton)");
};
//发送地址的根地址。返回结果为地址的字符串
function getRootPath() {
    return "http://192.168.0.251:3000/"
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
    return '<div data-role="content" class="news-content">' + '<ul data-role="listview" class="news-list">' + newsContent + '</ul>' + '</div>';
};

