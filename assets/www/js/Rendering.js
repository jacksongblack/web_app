function Rendering() {
    StorageTool.call(this)
    _thisRendRing_ = this;
}
inheritPrototype(Rendering,StorageTool)
Rendering.prototype.htmlTemplate = {
    user:function(obj){
        return "<div class='enterprise'><a href='#'><img id='avatar' style='width:100%; ' src="+ getRootPath() + obj.image_url +" ></a>" +
            "<div class='content'><h2>公司信息</h2><table>"+
            "<tr><th>名称:</th><td>" + obj.name + "</td></tr>" +
            "<tr><th>电话:</th><td>" + obj.tel + "</td></tr>" +
            "<tr><th>邮箱:</th><td>" + obj.email + "</td></tr>" +
            "<tr><th>地址:</th><td>" + obj.address + "</td></tr>" +
            "</table><div class='description' style=''><h2>公司简介</h2><p>"+obj.description+"</p></div>" +
            "<div class='products_list'><h2>用户操作</h2><a data-mini='true' data-role='button' pageTo='update_password.html' path=/api/industries/"+obj.id+"/products data-storageKey='products' class='producs' >修改密码</a></div>" +
            "</div>" +
            "</div>"
    },
    news_theme: function (obj) {
        return  '<li><a path="api/domains/' + obj.id + '/posts" data-storageKey="posts" pageTo="news_list.html">' + obj.name + '</a></li>';
    },
    news_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='post' pageTo='news_show.html' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.logo + "'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    news_show:function (obj){
        return "<div class='show'><div class='title'><h1> " + obj.title + "</h1><h2>创建时间："+obj.updated_at +"</h2></div>" +"<div class='content'>"+ obj.content  +"</div></div>";
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
            + obj.name + "</h3>" + "<p>价格:&nbsp;&nbsp;" + obj.price + "</p>";
    },
    products_theme: function (obj) {
        return '<li><a data-ajax="false" data-storageKey="products" pageTo="products_list.html" path="api/industries/' + obj.id + '/products">' + obj.name + '</a></li>';
    },
    enterprises_theme: function (obj) {
        return '<li><a data-ajax="false" data-storageKey="enterprises" pageTo="enterprises_list.html"  path="api/industries/' + obj.id + '/enterprises">' + obj.name + '</a></li>';
    },
    enterprises_list: function (obj) {
        return "<li><a  data-ajax='false'  data-storageKey='company' pageTo='enterprise_show.html' path='api/enterprises/" + obj.id + "'><img  class='ul-li-icon' src='" + getRootPath() + obj.image_url + "'><h3>"
            + obj.name + "</h3>" + "<p>邮箱地址:&nbsp;&nbsp;" + obj.email + "</p><p>电话号码:&nbsp;&nbsp;" + obj.tel + "</p><p>说明:&nbsp;&nbsp;" + obj.description + "</p></a></li>"
    },
    enterprises_show: function (obj) {
        return "<div class='enterprise'><a href='#'><img id='avatar' style='width:100%; ' src="+ getRootPath() + obj.image_url +" ></a>" +
            "<div class='content'><h2>公司信息</h2><table>"+
            "<tr><th>名称:</th><td>" + obj.name + "</td></tr>" +
            "<tr><th>电话:</th><td>" + obj.tel + "</td></tr>" +
            "<tr><th>邮箱:</th><td>" + obj.email + "</td></tr>" +
            "<tr><th>地址:</th><td>" + obj.address + "</td></tr>" +
            "</table><div class='description' style=''><h2>公司简介</h2><p>"+obj.description+"</p></div>" +
            "<div class='products_list'><h2>公司产品</h2><a data-mini='true' data-role='button' pageTo='products_list.html' path=/api/industries/"+obj.id+"/products data-storageKey='products' class='producs' >更多产品信息</a></div>" +
            "</div>" +
            "</div>"
    },
    product_show:function (obj) {
        return "<div class='show'><div class='title'><h1> " + obj.name + "</h1><h2>创建时间："+obj.updated_at +"</h2></div>" +"<div class='content'>"+ obj.description  +"</div></div>";
    }
}

Rendering.prototype.imageAction ={
    urlProcessing: function() {
        $("img").each(function(){
            var imagePath = $(this).attr("src");
            var reg = /http:/g;
            $(this).attr("style","width:90%");
            try {
                reg.exec(imagePath).length;
            }catch(error) {
                $(this).attr("src",getRootPath()+imagePath);
            }
            })
    }
}

Rendering.prototype.main ={
    objectToHtml:function(obj){
        var htmlCache = "";
        var newsContent;
        $.each(obj, function (n, value) {
            newsContent = _thisRendRing_.main.template(value);
            newsContent = newsContent + htmlCache;
            htmlCache = newsContent;
        });
        return newsContent;
    },
    storageToHtml:function(KeyName){
        var str = localStorage.getItem(KeyName)
        var obj = _thisRendRing_.main.objectToHtml(_thisRendRing_.stringToJson(str))
        return obj
    },
    template:function(obj){
        return "<li><a  data-ajax='false' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='"+ obj.logo +"'><h3>"
            + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    review:function(lastDocObj,docObj,keyStory){
        docObj.append(_thisRendRing_.main.storageToHtml(keyStory));
        lastDocObj.trigger("create");
        docObj.listview("refresh");
    }
}