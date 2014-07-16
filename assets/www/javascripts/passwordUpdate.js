function PasswordUpdate() {
    GetTo.call(this);
    _passwordUpdate_ = this;
}
inheritPrototype(PasswordUpdate, GetTo)

PasswordUpdate.prototype.self = {
    authentication: function () {

        if ($("#new_password").val() == $("#new_second_password").val()) {
            return "true"
        } else {
            return "false"
        }
    },
    sendFrom: function (url) {
        if (_passwordUpdate_.self.authentication() == "true") {
            _passwordUpdate_.data = $("#update_password").serialize()
            _passwordUpdate_.sendType="post"
            _passwordUpdate_.send(getRootPath()+url)
            _passwordUpdate_.self.popMessage(_passwordUpdate_.getResponse().message)
            if(_passwordUpdate_.getResponse().status =="ok"){
             _passwordUpdate_.jumpTo("user.html")
            }
        }else{
            _passwordUpdate_.self.popMessage("两次输入密码不相同");
        }

    },
    popMessage:function(message){
        $("#message p").html(message)
        $("#message").popup("open")
    }
}