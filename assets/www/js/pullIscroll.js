function onPullDown() {
    var obj = new SendToserver();
    $.mobile.loading('show', {
        textVisible: true,
        theme: 'c',
        text:"加载上一页"
    })
    obj.editPath = function (string){
        var num = new Number(string);
        if(num > 1){
            num = num - 1
        }
        else{
            $("#firstPage").popup("open")
        }
        console.log(string)
        return num
    }
    obj.send("#pullAjaxUrl")
    $.mobile.loading('hide');
};
function onPullUp() {
    $.mobile.loading('show', {
        textVisible: true,
        theme: 'c',
        text:"加载下一页"
    });
    var obj = new SendToserver();
    obj.editPath = function (string){
        var num =new Number(string)
        num = num + 1
        return num
    };
    obj.send();
    $.mobile.loading('hide');
};

function SendToserver() {
    _thisObj_ = this;

}
SendToserver.prototype = {
    callBack: function (response) {
        console.log(response);
        if(response.length != 0){
            $(".news-list-ul").empty();
            $(".news-list-ul").append(buildHtml(response));
            $(".news-list").trigger("create")
            $('.news-list-ul').listview('refresh');
            $(".news-list").iscrollview("refresh");
            $("#pullAjaxUrl").attr("data-page",_thisObj_.pageNumber)
        } else{
            $("#lastPage").popup("open")
        };

        var bind =new BindLinkTo()
        bind.pageName="news_show.html"
        bind.bind("li a","post");
    },
    getPath: function(document) {
        var docObj = $(document);
        var pageNumber = docObj.attr("data-page");
        _thisObj_.pageNumber = _thisObj_.editPath(pageNumber)
        pageNumber = _thisObj_.pageNumber;
        return getRootPath() + docObj.attr("href")+ pageNumber
    },
    send: function () {
        var url = _thisObj_.getPath("#pullAjaxUrl")
        $.ajax({
            url: url,
            content: _thisObj_,
            dataType: "json",
            type: "get",
            success: function (response) {
                _thisObj_.callBack(response)
            }
        })
    },
    editPath:function(string){
        return string
    }
};
