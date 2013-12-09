function SetConfig() {
    _thisSetConfig = this
}
SetConfig.prototype.htmlTemplate = {
    news_theme: function (obj) {
        return  '<li><a path="api/domains/' + obj.id + '/posts">' + obj.name + '</a></li>';
    },
    industries_theme: function (obj) {
        return '<li><a path="api/industries/' + obj.id + '/posts">' + obj.name + '</a></li>';
    },
    products_list: function (obj) {
        return  "<li><a  data-ajax='false' path='api/products/" + obj.id + "'><img  class='ul-li-icon' src=''><h3>"
            + obj.name + "</h3>" + "<p>" + obj.description + "</p></a></li>";
    },
    products_theme: function (obj) {
        return '<li><a path="api/industries/' + obj.id + '/products">' + obj.name + '</a></li>';
    },
    news_list: function (obj){
        return "<li><a  data-ajax='false' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='"+ getRootPath() + obj.logo +"'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    }
}