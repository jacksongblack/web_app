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
    console.log(newsContent)
    return newsContent;
};
function GetTo() {
    _thisObj_ = this;

}


GetTo.prototype = {
    constructor: GetTo,
    send: function (url,valueName) {
        $.ajax({
            type:"get",
            data:"json",
            url: "http://192.168.0.251:3000/"+ url,
            content:_thisObj_,
            async:false,

            error:function(){
                localStorage.setItem(valueName,"error")
            },
            success:function(data){
                localStorage.setItem(valueName, JSON.stringify(data));
               var tatus = localStorage.getItem(valueName)
                if(tatus!=null){
                    hideLoader();
                    _thisObj_.jumpPage(_thisObj_.toPage)
                }

            }
        })
    },
    clearSessionStorage: function () {
        localStorage.removeItem(_thisObj_.storageName);
    },
    toPage:"#",
    jumpPage:function(page){

        $.mobile.changePage(page, {transition: "slideup",
            reverse: false,
            changeHash: true})
    }
}





