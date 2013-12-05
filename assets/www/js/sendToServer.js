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
function getRootPath() {
    return "http://192.168.0.251:3000/"
}


function GetTo() {
    _thisGetToObj_ = this;

}

GetTo.prototype = {
    toPage: "#",
    storageKey: "",
    send:function(url) {
        $.ajax({
            type: "get",
            dataType: "json",
            url: url,
            content: _thisGetToObj_,
            async: false,

            error: function () {
               alert("出错了")
            },
            success: function (data) {
                _thisGetToObj_.callBack(data)
            }
        })
    },
    jumpTo: function(page) {
        window.location = page
    },
    callBack: function(response) {
        _thisGetToObj_.response = response
    },
    getPath:function(url){
      return getRootPath() +url;
    },
    saveResponseTo:function(key){
        _thisGetToObj_.storageKey= key
        localStorage.setItem(_thisGetToObj_.storageKey, JSON.stringify(_thisGetToObj_.response));
        return localStorage.getItem(_thisGetToObj_.storageKey)
    }


}

function object(obj){
    function Cache(){}
    Cache.prototype = obj;
    return new Cache();
}

function inheritPrototype(subType,superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}





