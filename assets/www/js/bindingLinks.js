function BindLinkTo() {
     GetTo.call(this);
    _thisBindLinkObj_= this;
};
inheritPrototype(BindLinkTo,GetTo);
BindLinkTo.prototype.self ={
    bind:function(document,fn){
        $(document).each(
            function () {
              _thisBindLinkObj_.self.bindlink(this,fn)
            })
    },
    savePathToLocalStorage:function(){
        localStorage.setItem("url", _thisBindLinkObj_.self.url)
        return localStorage.getItem("url")
    },
    bindlink:function(obj,fn){
        $(obj).bind("tap", function () {
                if($(obj).attr("path") != "#"){
                    _thisBindLinkObj_.send(getRootPath()+$(obj).attr("path"));

                } else{
                    _thisBindLinkObj_.jumpTo($(obj).attr("pageTo"))
                }

                if($(obj).attr("pageTo") == "quit"){
                    localStorage.clear();
                    _thisBindLinkObj_.send(getRootPath()+"api/destroy_session")
                    navigator.app.exitApp();
                }
                var response = _thisBindLinkObj_.getResponse($(obj).attr("data-storageKey"));
                var flag = "false"
                $.each(response,function(){
                    flag="true"
                })

                if (flag !='false' && response != "error"){
                    _thisBindLinkObj_.self.url=($(obj).attr("path"));
                 if (fn instanceof Object){
                    fn();
                 }
                    _thisBindLinkObj_.saveResponseTo($(obj).attr("data-storageKey"));
                    _thisBindLinkObj_.jumpTo($(obj).attr("pageTo"));
                    if (response == "error"){
                        $("#message p").html("返回值出错了")
                        $("#message p").popup("open")
                    }
                }
                else {
                    alert("服务器没有资料")
                }
            }
        )
    }

}






