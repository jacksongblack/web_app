function Logout(){
   GetTo.call(this);
   _logoutthis_ = this;
}

inheritPrototype(Logout,GetTo)

Logout.prototype.self={
   bindbutton:function(){
      $("#logout").bind("tap",function(){
        var docObj =  $("#logout");
        _logoutthis_.send(docObj.attr("path"))
        _logoutthis_.jumpTo(docObj.attr("pageTo"))
      })
   }
}