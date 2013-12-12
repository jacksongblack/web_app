function Rendering() {
    _thisSetConfig_ = this;
}
Rendering.prototype.htmlTemplate = {
    news_theme: function (obj) {
        return  '<li><a path="api/domains/' + obj.id + '/posts" data-storageKey="posts" pageTo="news_list.html">' + obj.name + '</a></li>';
    },
    industries_theme: function (obj) {
        return '<li><a data-storageKey="posts" pageTo="industries_list.html" path="api/industries/' + obj.id + '/posts">' + obj.name + '</a></li>';
    },
    industries_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='post' pageTo='industries_show.html' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.logo + "'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    products_list: function (obj) {
        return  "<li><a  data-ajax='false' data-storageKey='product' pageTo='product_show.html' path='api/products/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.image_url + "'><h3>"
            + obj.name + "</h3>" + "<p>价格:&nbsp;&nbsp;" + obj.price + "</p>" + "<p>说明:&nbsp;&nbsp;" + obj.description + "</p></a></li>";
    },
    products_theme: function (obj) {
        return '<li><a data-ajax="false" data-storageKey="products" pageTo="products_list.html" path="api/industries/' + obj.id + '/products">' + obj.name + '</a></li>';
    },
    news_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='post' pageTo='news_show.html' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.logo + "'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    enterprises_theme: function (obj) {
        return '<li><a data-ajax="false" data-storageKey="enterprise" pageTo="enterprises_list.html"  path="api/industries/' + obj.id + '/enterprises">' + obj.name + '</a></li>';
    },
    enterprises_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='company' pageTo='enterprise_show.html' path='api/enterprises/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.image_url + "'><h3>"
            + obj.name + "</h3>" + "<p>邮箱地址:&nbsp;&nbsp;" + obj.email + "</p><p>电话号码:&nbsp;&nbsp;" + obj.tel + "</p><p>说明:&nbsp;&nbsp;" + obj.description + "</p></a></li>"
    },
    enterprises_show: function (obj) {
        var html = "<div class='enterprise'>" +
            "<div class='content'>" +
            "<table>" +
            "<tr>" +
            "<td rowspan='4'> <a href='#popupPhotoPortrait' data-rel='popup' data-position-to='window'   data-inline='true' data-transition='fade' >" +
            "<img src=" + getRootPath() + obj.image_url + " style='width:50%'>" +
            "</a></td><th>名称:</th><td>" + obj.name + "</td></tr>" +
            "<tr><th>电话:</th><td>" + obj.tel + "</td></tr>" +
            "<tr><th>邮箱:</th><td>" + obj.email + "</td></tr>" +
            "<tr><th>地址:</th><td>" + obj.address + "</td></tr></th>" +
            "</table>" +
            "</div>" +
            '</div>' +
            "<div id='popupPhotoPortrait'data-role='popup'class='photopopup'data-overlay-theme='c' data-corners='false' data-tolerance='30,15' >" +
            '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right"> Close</a> <img src="' + getRootPath() + obj.image_url + '" alt="Photo landscape"> ' +
            '</div>';
        return html
    }
}