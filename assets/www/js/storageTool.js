function flashToJson(session) {
    return stirngToJson(session);
}

function StorageTool(){
    jsonToString = function(jsonObj){
        return JSON.stringify(jsonObj);
    };
    stringToJson = function(string){
        return eval('(' + string + ')');
    };
    sessionClear = function(key){
        localStorage.removeItem(key)
    };
    _thisObj_ = this;
};
StorageTool.prototype={
    objectToHtml:function(obj){
        var htmlCache = "";
        var newsContent;
        $.each(obj, function (n, value) {
            newsContent = _thisObj_.createHtml(value);
            newsContent = newsContent + htmlCache;
            htmlCache = newsContent;
        });
        return newsContent;
    },
    storageToHtml:function(KeyName){
       var str = localStorage.getItem(KeyName)
       var obj = this.objectToHtml(stringToJson(str))
        return obj
    },
    createHtml:function(obj){
     return "<li><a  data-ajax='false' path='api/posts/" + obj.id + "'><img  class='ul-li-icon' src='"+ obj.logo +"'><h3>" + obj.title + "</h3>" + "<p>" + obj.description + "</p></a></li>"
    },
    review:function(lastDocObj,docObj,keyStory){
        docObj.append(this.storageToHtml(keyStory));
        lastDocObj.trigger("create")
        docObj.listview("refresh")

    }
};

//编辑并创建html页面
function buildHtml(response) {
    var htmlCache = "";
    var newsContent;
    $.each(response, function (n, value) {
        newsContent = "<li><a  data-ajax='false' path='api/posts/" + value.id + "'><img  class='ul-li-icon' src='"+ value.logo +"'><h3>" + value.title + "</h3>" + "<p>" + value.description + "</p></a></li>";
        newsContent = newsContent + htmlCache;
        htmlCache = newsContent;
    });
    return newsContent;
};