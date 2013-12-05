
function showSimpleLoad() {
    $.mobile.loading('show', {
        textVisible: true,
        text: "������",
        textonly: false,
        theme: "c"
    })
}



function BindLinkTo() {
     GetTo.call(this);
    _thisBindLinkObj_= this;
};
inheritPrototype(BindLinkTo,GetTo);
BindLinkTo.prototype.self ={
    bind:function(document,keyname,pageName){

        $(document).each(
            function () {
                $(this).bind("tap", function () {
                        _thisBindLinkObj_.send(getRootPath()+ $(this).attr("path"));
                       var response = _thisBindLinkObj_.saveResponseTo(keyname)
                        if (response.length != 0){
                            _thisBindLinkObj_.self.url=($(this).attr("path"));
                            _thisBindLinkObj_.jumpTo(pageName)
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
    }

}






