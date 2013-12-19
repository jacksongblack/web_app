//返回根节点
function getRootPath() {
    return "http://192.168.0.251:3000/"
}


function GetTo() {
    _thisGetToObj_ = this;

}

GetTo.prototype = {
    toPage: "#",
    storageKey: "",
    data:"",
    sendType:"get",
    send:function(url) {
        $.ajax({
            type: _thisGetToObj_.sendType,
            dataType: "json",
            url: url,
            data: _thisGetToObj_.data,
            content: this,
            async: false,

            error: function () {
                _thisGetToObj_.response = "error"
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
        _thisGetToObj_.storageKey= key;
        localStorage.setItem(_thisGetToObj_.storageKey, JSON.stringify(_thisGetToObj_.response));
        return localStorage.getItem(_thisGetToObj_.storageKey)
    },
    getResponse:function(){
        return _thisGetToObj_.response
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





