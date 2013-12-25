function ComprehensiveSearch() {
    GetTo.call(this);
    _thisSearch_ = this;
}
inheritPrototype(ComprehensiveSearch, GetTo)

ComprehensiveSearch.prototype.self = {
    checkValue: function () {
        if ($("#keyword").val() != "" && $("#domain").val() != "") {
            return true
        }
        return false
    },
    bindclickEvent: function () {
        $("#domain").bind("tap", function () {
            if (_thisSearch_.self.checkValue() == true) {
                switch ($("#domain").val()) {
                    case "domains":
                        _thisSearch_.self.processing( "posts", "news_list_url", "news_list.html")
                        break
                    case "enterprises":
                        _thisSearch_.self.processing( "enterprises", "enterprises_list_url", "enterprises_list.html")
                        break
                    case "technologies":
                        _thisSearch_.self.processing( "technologies", "technologies_list_url", "technologies_list.html")
                        break
                    case "products":
                        _thisSearch_.self.processing( "products", "products_list_url", "products_list.html")
                        break
                    case "industries":
                        _thisSearch_.self.processing( "posts", "industries_list_url", "industries_list.html")
                        break
                }
            }
        })

    },
    processing: function ( responseKeyname, urlKeyName, pageName) {
        _thisSearch_.sendType = "post"
        _thisSearch_.data = $("#search").serialize()
        console.log($("#search").serialize())
        _thisSearch_.send(getRootPath() + "api/search")
        if (_thisSearch_.getResponse() == true) {
            _thisSearch_.saveResponseTo(responseKeyname)
            _thisSearch_.savePathTo(urlKeyName)
            _thisSearch_.jumpTo(pageName)
        }else{
            _thisSearch_.popupMessage("没有搜索到任何东西")
        }
    }

}