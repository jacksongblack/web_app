//返回根节点
function getRootPath() {
    return "http://192.168.10.104:3000/"
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
        _thisGetToObj_.url = url
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
        var flag = false;
        _thisGetToObj_.response = response
        $.each(response,function(){
          flag =true
        })
        if (flag == false){

        }
        return flag
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
    },
    savePathTo:function(urlName){
        localStorage.setItem(urlName, _thisGetToObj_.url)
        return localStorage.getItem(urlName)
    },
    popupMessage:function(message){
        try{
            console.log(message)
            var messageDom = $("#message p")
            messageDom.html(message+"&nbsp&nbsp&nbsp")
            if(messageDom.length != 1){
                messageDom.first().empty();
            }
            $("#message").popup("open")
            setTimeout("$('#message').popup('close')",450)
        }catch (error){
            alert(error.message)
        }

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





