function SetConfig() {
    _thisSetConfig_ = this;
}
SetConfig.prototype.htmlTemplate = {
    news_theme: function (obj) {
        return  '<li><a path="api/domains/' + obj.id + '/posts" data-storageKey="posts" pageTo="news_list.html">' + obj.name + '</a></li>';
    },
    industries_theme: function (obj) {
        return '<li><a data-storageKey="posts" pageTo="news_list.html" path="api/industries/' + obj.id + '/posts">' + obj.name + '</a></li>';
    },
    products_list: function (obj) {
        return  "<li><a  data-ajax='false' data-storageKey='post' pageTo='product_show.html' path='api/products/" + obj.id + "'><img  class='ul-li-icon' src=''><h3>"
            + obj.name + "</h3>" + "<p>" + obj.description + "</p></a></li>";
    },
    products_theme: function (obj) {
        return '<li><a data-ajax="false" data-storageKey="products" pageTo="products_list.html" path="api/industries/' + obj.id + '/products">' + obj.name + '</a></li>';
    },
    news_list: function (obj){
        return "<li><a  data-ajax='false'  data-storageKey='post' pageTo='news_show.html' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='"+ getRootPath() + obj.logo +"'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    enterprises_theme:function(obj){
        return '<li><a path="api/industries/' + obj.id + '/posts">' + obj.name + '</a></li>';
    }
}