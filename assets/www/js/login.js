function Login() {
    GetTo.call(this);
    _thisLogin_ = this;
}
inheritPrototype(Login, GetTo) ;

Login.prototype.self = {
    bindButton: function () {
        var buttonObj = $("#login_button");
        buttonObj.bind("tap",function () {
            _thisLogin_.sendType="post"
            _thisLogin_.data= _thisLogin_.self.getByValue()
            _thisLogin_.send(getRootPath()+buttonObj.attr("path"));
            _thisLogin_.self.callback();
        });
    },
    getByValue: function () {
        var vals = $("#login_form :input").serialize();
        return vals
    },
    callback: function () {
        var response = _thisLogin_.getResponse();
        if (response == "false") {
            $("#message").popup("open")

        } else {
            if (response.length != 0) {
                _thisLogin_.saveResponseTo("user");
            }
        }

    }

}
