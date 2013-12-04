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
function getRootPath(){
     return "http://192.168.0.251:3000/"
}


function GetTo() {
    _thisObj_ = this;

}

GetTo.prototype = {
    constructor: GetTo,
        send: function (url,valueName) {
        $.ajax({
            type:"get",
            dataType:"json",
            url: getRootPath()+ url,
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
    toPage:"#",
    jumpPage:function(page){
        window.location = page
    }
}





