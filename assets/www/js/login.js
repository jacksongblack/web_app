function Login() {
    GetTo.call(this);
    _thisLogin_ = this;
}
inheritPrototype(Login, GetTo);

Login.prototype.self = {
    bindButton: function (docObj) {
        var buttonObj = docObj;
        buttonObj.bind("tap", function () {
            _thisLogin_.sendType = "post"
            _thisLogin_.data = _thisLogin_.self.getByValue()
            _thisLogin_.send(getRootPath() + buttonObj.attr("path"));
            _thisLogin_.self.callback(docObj);
        });
    },
    getByValue: function () {
        var vals = $("#login_form :input").serialize();
        return vals
    },
    callback: function (docObj) {
        var response = _thisLogin_.getResponse();
        if (response.status == "fails") {
            alert(response.message);
            return;
        }
        ;
        if (response.status == "ok") {
            _thisLogin_.sendType = "get";
            _thisLogin_.data ="";
            _thisLogin_.send(getRootPath() + "api/user");
            console.log(_thisLogin_.getResponse())
            _thisLogin_.saveResponseTo(docObj.attr("data-storageKey"));
            _thisLogin_.jumpTo(docObj.attr("pageTo"));
        }
    },
    quit: function () {
        _thisLogin_.send(getRootPath() + "api/destroy_session");
        var response = _thisLogin_.getResponse();
        if (response.status == "ok") {
            alert(response.message)
        } else {
            alert("ע��ʧ��")
        }
    }

}
