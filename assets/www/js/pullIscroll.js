
function PullLoad() {
    _thisPullLoadObj_ = this;

}
inheritPrototype(PullLoad, GetTo);

PullLoad.prototype.self = {
    constructor:PullLoad,
    num:2,
    getPath: function (document) {
        var docObj = $(document);
        return docObj.attr("href") + _thisPullLoadObj_.self.num +"&"+ localStorage.getItem("PullParams")
    },
    send: function (fn) {
        var url = _thisPullLoadObj_.self.getPath("#pullAjaxUrl");

        _thisPullLoadObj_.send(getRootPath() + url );
        fn()

    },

    showLoad: function (content) {
        $.mobile.loading('show', {
            textVisible: true,
            theme: 'c',
            text: content
        })
    },
    pullUp: function () {
        _thisPullLoadObj_.self.showLoad("������һҳ")
        _thisPullLoadObj_.self.send(function(){
            if (_thisPullLoadObj_.getResponse().length != 0) {
                if( _thisPullLoadObj_.self.num == 1){
                    _thisPullLoadObj_.self.num =2;
                }
                $("#pullAjaxUrl").attr("data-page", _thisPullLoadObj_.self.num)
            } else {
                $("#lastPage").popup("open")
                setTimeout("$('#lastPage').popup('close')",450)
            }
        });
        var num = new Number($("#pullAjaxUrl").attr("data-page"));
        _thisPullLoadObj_.self.num = num + 1;
        $.mobile.loading('hide');
    },
    pullDown: function () {
        _thisPullLoadObj_.self.showLoad("请稍微厚")
        _thisPullLoadObj_.self.num = 1;
        _thisPullLoadObj_.self.send(function(){
            if (_thisPullLoadObj_.getResponse().length != 0) {
                if( _thisPullLoadObj_.self.num == 1){
                    _thisPullLoadObj_.self.num =2;
                }
                $("#pullAjaxUrl").attr("data-page", _thisPullLoadObj_.self.num)
            }
            $("#firstPage").popup("open")
            setTimeout("$('#firstPage').popup('close')",450)

        })

        $("[data-role='listview']").empty();
        $.mobile.loading('hide');
    }
};
