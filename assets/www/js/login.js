function Login() {
    GetTo.call(this);
    _thisLogin_ = this;
}
inheritPrototype(Login, GetTo) ;

Login.prototype.self = {
    bindButton: function () {
        var buttonObj = $("#login_button");
        buttonObj.bind("tap",function () {
            _thisLogin_.send(getRootPath()+buttonObj.attr("path"));
            _thisLogin_.callback();
        });
    },
    getByValue: function () {
        var emailObj = $("#login_email")
        var passwordObj = $("#login_password")
        var data = "?email=" + emailObj.value + "?password=" + passwordObj.value
        return data
    },
    callback: function () {
        var response = _thisLogin_.getResponse();
        if (response == "false") {
            $("#message").popup("open")

        } else {
            if (response != undefined) {
                _thisLogin_.saveResponseTo("user");
            }
        }

    }

}
