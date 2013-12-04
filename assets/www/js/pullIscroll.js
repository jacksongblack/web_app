function onPullDown() {
    var obj = new PullLoad();
    obj.pullDown();
};
function onPullUp() {
   var obj = new PullLoad();
    obj.pullUp();
};

function PullLoad() {
    _thisObj_ = this;

}
PullLoad.prototype = {
    callBack: function (response) {
        if (response.length != 0) {
            var obj = $(".news-list-ul")
            var lastobj = $(".news-list")
            obj.empty();
            obj.append(_thisObj_.createHtml(response));
            lastobj.trigger("create")
            obj.listview('refresh');
            lastobj.iscrollview("refresh");
            $("#pullAjaxUrl").attr("data-page", _thisObj_.pageNumber)
        } else {
            $("#lastPage").popup("open")
        };

        var bind = new BindLinkTo()
        bind.pageName = "news_show.html"
        bind.bind("li a", "post");
    },
    getPath: function (document) {
        var docObj = $(document);
        var pageNumber = docObj.attr("data-page");
        _thisObj_.pageNumber = _thisObj_.editPath(pageNumber)
        pageNumber = _thisObj_.pageNumber;
        return getRootPath() + docObj.attr("href") + pageNumber
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
    editPath: function (string) {
        return string
    },
    createHtml:function(response){
        var htmlCache = "";
        var newsContent;
        $.each(response, function (n, value) {
            newsContent = _thisObj_.template(value)
            newsContent = newsContent + htmlCache;
            htmlCache = newsContent;
        });
        return newsContent;
    },
    showLoad:function(content){
        $.mobile.loading('show', {
            textVisible: true,
            theme: 'c',
            text: content
        })
    },
    pullUp:function(){
        _thisObj_.showLoad("加载下一页")
        _thisObj_.editPath = function (string) {
            var num = new Number(string)
            num = num + 1
            return num
        };
        _thisObj_.send();
        $.mobile.loading('hide');
    },
    pullDown:function(){
        _thisObj_.showLoad("加载上一页")
        _thisObj_.editPath = function (string) {
            var num = new Number(string);
            if (num > 1) {
                num = num - 1
            }
            else {
                $("#firstPage").popup("open")
            }
            return num
        }
        _thisObj_.send("#pullAjaxUrl")
        $.mobile.loading('hide');
    },
  template:function(obj){
      console.log(obj);
      return "<li><a  data-ajax='false' path='api/posts/" + obj.id +
          "'><img  class='ul-li-icon' src='"+ obj.logo +"'><h3>" +
          obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>";
  }

};
