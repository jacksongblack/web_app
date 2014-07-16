function Logout(){
   GetTo.call(this);
   _logoutthis_ = this;
}

inheritPrototype(Logout,GetTo)

Logout.prototype.self={
   bindbutton:function(){
      $("#logout").bind("tap",function(){
        var docObj =  $("#logout");
        _logoutthis_.send(getRootPath()+ docObj.attr("path"))
          if (_logoutthis_.getResponse().status=="ok"){
              _logoutthis_.jumpTo(docObj.attr("pageTo"))
          }else{
             alert("µÇ³ö´íÎó")
          }
      })
   }
}