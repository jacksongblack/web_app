function aaa(obj) {
    return "<li><a  data-ajax='false' path='api/posts/" + obj.id +
        "'><img  class='ul-li-icon' src='" + obj.logo + "'><h3>" +
        obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>";
}

function PullLoad() {
    _thisPullLoadObj_ = this;

}
inheritPrototype(PullLoad, GetTo);

PullLoad.prototype.self = {
    getPath: function (document) {
        var docObj = $(document);
        var pageNumber = docObj.attr("data-page");
        _thisPullLoadObj_.pageNumber = _thisPullLoadObj_.self.editPath(pageNumber);
        pageNumber = _thisPullLoadObj_.pageNumber;
        return docObj.attr("href") + pageNumber
    },
    send: function () {
        var url = _thisPullLoadObj_.self.getPath("#pullAjaxUrl");

        _thisPullLoadObj_.send(getRootPath() + url);
       if (_thisPullLoadObj_.response.length != 0){

       }
    },
    editPath: function (string) {
        return string
    },
    showLoad: function (content) {
        $.mobile.loading('show', {
            textVisible: true,
            theme: 'c',
            text: content
        })
    },
    pullUp: function () {
        _thisPullLoadObj_.self.showLoad("加载下一页")
        _thisPullLoadObj_.self.editPath = function (string) {
            var num = new Number(string)
            num = num + 1
             _thisPullLoadObj_.self.num = num
        };
        _thisPullLoadObj_.self.send();
        $.mobile.loading('hide');
    },
    pullDown: function () {
        _thisPullLoadObj_.self.showLoad("加载上一页")
        _thisPullLoadObj_.self.editPath = function (string) {
            var num = new Number(string);
            if (num > 1) {
                num = num - 1
            }
            else {
                $("#firstPage").popup("open")
            }
            _thisPullLoadObj_.self.num = num
        }
        _thisPullLoadObj_.self.send()
        $.mobile.loading('hide');
    }
};
