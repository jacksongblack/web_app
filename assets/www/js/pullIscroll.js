function onPullDown() {
    var url = $("#pullAjaxUrl").attr("href") + "1";
    var getobj = new GetTo(url,"posts");
    var data = getobj.send();
    $("[data-role='listview']").empty();
    $("[data-role='listview']").append(buildHtml(data));
    $(".news-content").trigger("create")
    $('.news-list').listview('refresh');
    $("#pullAjaxUrl").attr("data-page", "1")
    bindLink("a.ui-link");
    getobj.clearSessionStorage()

};
function onPullUp() {
    var url = editPath($("#pullAjaxUrl"));
    var obj = new SendToserver()
    obj.callBack = function(response){
        $("[data-role='listview']").append(buildHtml());
        $(".news-content").trigger("create")
        $('.news-list').listview('refresh');
        ("a.ui-link");
    }

};
function editPath(docObj) {
    var pageNumber = docObj.attr("data-page");
    pageNumber = new Number(pageNumber) + 1;
    docObj.attr("data-page", pageNumber);
    return docObj.attr("href") + pageNumber;
}

function SendToserver(){
  send=function(ulr){
      $.getJSON(getRootPath()+ url,function(reponse){
           this.callBack(reponse)
      })
  }
}
SendToserver.prototype = {
   callBack:function(response){

   }
} ;
