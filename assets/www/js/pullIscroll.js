
function PullLoad() {
    _thisPullLoadObj_ = this;

}
inheritPrototype(PullLoad, GetTo);

PullLoad.prototype.self = {
    num:2,
    getPath: function (document) {
        var docObj = $(document);
        return docObj.attr("href") + _thisPullLoadObj_.self.num
    },
    send: function () {
        var url = _thisPullLoadObj_.self.getPath("#pullAjaxUrl");

        _thisPullLoadObj_.send(getRootPath() + url);
        if (_thisPullLoadObj_.getResponse().length != 0) {
            if( _thisPullLoadObj_.self.num == 1){
                _thisPullLoadObj_.self.num =2;
            }
            $("#pullAjaxUrl").attr("data-page", _thisPullLoadObj_.self.num)
        } else {
            $("#lastPage").popup("open")
        }
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
        _thisPullLoadObj_.self.send();
        var num = new Number($("#pullAjaxUrl").attr("data-page"));
        _thisPullLoadObj_.self.num = num + 1;
        $.mobile.loading('hide');
    },
    pullDown: function () {
        _thisPullLoadObj_.self.showLoad("刷新")
        _thisPullLoadObj_.self.num = 1;
        _thisPullLoadObj_.self.send()
        $("[data-role='listview']").empty();
        $.mobile.loading('hide');
    }
};
