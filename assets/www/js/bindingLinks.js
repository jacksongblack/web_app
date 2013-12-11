function BindLinkTo() {
     GetTo.call(this);
    _thisBindLinkObj_= this;
};
inheritPrototype(BindLinkTo,GetTo);
BindLinkTo.prototype.self ={
    bind:function(document){

        $(document).each(
            function () {
                $(this).bind("tap", function () {
                        if($(this).attr("path") != "#"){
                            _thisBindLinkObj_.send(getRootPath()+$(this).attr("path"));
                        } else{
                            _thisBindLinkObj_.jumpTo($(this).attr("pageTo"))
                        }

                        var response = _thisBindLinkObj_.saveResponseTo($(this).attr("data-storageKey"));
                        if (response.length != 0){

                            _thisBindLinkObj_.self.url=($(this).attr("path"));
                            _thisBindLinkObj_.self.savePathToLocalStorage()
                            _thisBindLinkObj_.jumpTo($(this).attr("pageTo"))
                        }
                        else {
                            alert("出错了，可能是没有返回值")
                        }
                    }
                )
            })
    },
    savePathToLocalStorage:function(){
        localStorage.setItem("url", _thisBindLinkObj_.self.url)
        return localStorage.getItem("url")
    }

}






