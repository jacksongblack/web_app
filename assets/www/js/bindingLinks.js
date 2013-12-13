function BindLinkTo() {
     GetTo.call(this);
    _thisBindLinkObj_= this;
};
inheritPrototype(BindLinkTo,GetTo);
BindLinkTo.prototype.self ={
    bind:function(document){
        $(document).each(
            function () {
              _thisBindLinkObj_.self.bindlink(this)
            })
    },
    savePathToLocalStorage:function(){
        localStorage.setItem("url", _thisBindLinkObj_.self.url)
        return localStorage.getItem("url")
    },
    bindlink:function(obj){
        $(obj).bind("tap", function () {
                if($(obj).attr("path") != "#"){
                    _thisBindLinkObj_.send(getRootPath()+$(obj).attr("path"));

                } else{
                    _thisBindLinkObj_.jumpTo($(obj).attr("pageTo"))
                }
                if($(obj).attr("pageTo") == "quit"){
                    navigator.app.exitApp();
                }
                var response = _thisBindLinkObj_.saveResponseTo($(obj).attr("data-storageKey"));
                if (response.length != 0 && response != "error"){
                    _thisBindLinkObj_.self.url=($(obj).attr("path"));
                    _thisBindLinkObj_.self.savePathToLocalStorage()
                    _thisBindLinkObj_.jumpTo($(obj).attr("pageTo"))
                    if (response == "error"){
                        $("#message p").html("返回值出错了")
                        $("#message p").popup("open")
                    }
                }
                else {
                    alert("出错了，可能是没有返回值")
                }
            }
        )
    }

}






