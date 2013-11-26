//���͵�ַ�ĸ��ַ�����ؽ��Ϊ��ַ���ַ�
function getRootPath() {
    return "http://192.168.1.109:3000/"
};
//������Ҫ�����HTML�ַ�
function buildHtml(response) {
    var htmlCache = "";
    var newsContent;
    $.each(response, function (n, value) {
        newsContent = "<li><img src="+ value.logo +" class='ul-li-icon'><h3><a  data-ajax='false' path='api/posts/"+ value.id + "'>" + value.title + "</a></h3>" + "<p>" + value.description + "</p></li>";
        newsContent = newsContent + htmlCache;
        htmlCache = newsContent;
    });
    return newsContent;
};

