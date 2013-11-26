//发送地址的根地址。返回结果为地址的字符串
function getRootPath() {
    return "http://192.168.0.251:3000/"
};
//创建需要插入的HTML字符串
function buildHtml(response) {
    var htmlCache = "";
    var newsContent;
    $.each(response, function (n, value) {
        newsContent = "<li><img src="+ value.logo +" class='ul-li-icon'><h3><a  data-ajax='false' path='api/posts/"+ value.id + "'>" + value.title + "</a></h3>" + "<p>" + value.content + "</p></li>";
        newsContent = newsContent + htmlCache;
        htmlCache = newsContent;
    });
    return newsContent;
};

