function BindLinkTo() {
     GetTo.call(this);
    _thisBindLinkObj_= this;
};
inheritPrototype(BindLinkTo,GetTo);
BindLinkTo.prototype.self ={
    constructor:BindLinkTo,
    bind:function(document,fn,urlName){
        $(document).each(
            function () {
              _thisBindLinkObj_.self.bindlink(this,fn,urlName)
            })
    },
    savePathTo:function(urlName){
        localStorage.setItem(urlName, _thisBindLinkObj_.self.url)
        return localStorage.getItem(urlName)
    },
    bindlink:function(obj,fn,urlName){
        $(obj).bind("tap", function () {
                if($(obj).attr("path") != "#"){
                    _thisBindLinkObj_.send(getRootPath()+$(obj).attr("path"));

                } else{
                    _thisBindLinkObj_.jumpTo($(obj).attr("pageTo"))
                    return
                }

                if($(obj).attr("pageTo") == "quit"){
                    localStorage.clear();
                    _thisBindLinkObj_.send(getRootPath()+"api/destroy_session")
                    navigator.app.exitApp();
                }
                if($(obj).attr("pageTo") == "login.html"){
                    localStorage.clear();
                    _thisBindLinkObj_.jumpTo("login.html")
                    return
                }
                var response = _thisBindLinkObj_.getResponse($(obj).attr("data-storageKey"));
                var flag = "false"
                try{
                    $.each(response,function(){
                    flag="true"
                })
                }catch (error){
                    if(error instanceof TypeError){
                        _thisBindLinkObj_.popupMessage("服务器出现错误")
                        return
                    }
                }

                if (flag !='false' && response != "error"){
                    _thisBindLinkObj_.self.url=($(obj).attr("path"));
                 if (fn instanceof Object){
                    fn(urlName);
                 }
                    _thisBindLinkObj_.saveResponseTo($(obj).attr("data-storageKey"));
                    _thisBindLinkObj_.jumpTo($(obj).attr("pageTo"));
                }
                else {
                    _thisBindLinkObj_.popupMessage("服务器没有资料")
                }
            }
        )
    }

}






