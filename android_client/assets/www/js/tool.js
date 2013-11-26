function showLoader() {

    //ï¿½ï¿½Ê¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½.for jQuery Mobile 1.2.0
    $.mobile.loading('show', {
        textVisible: true, //Ö»ÏÔÊ¾×ÖµÄÄÚÈÝ
        theme: 'b',        //Ö÷Ìâ·ç¸ñ
        html: " <a onclick='hideLoader()'  data-icon='delete' data-role='button' class='stopLoader' style='display: none;' >¼ÓÔÚÖÐ....µã»÷È¡Ïû</a>"         //Òªï¿½ï¿½Ê¾ï¿½ï¿½htmlï¿½ï¿½ï¿½Ý£ï¿½ï¿½ï¿½Í¼Æ¬ï¿½ï¿½
    })
    $('a.stopLoader').show();
};
function hideLoader() {
    //ï¿½ï¿½ï¿½Ø¼ï¿½ï¿½ï¿½ï¿½ï¿½
    $.mobile.loading('hide');
};


function jsonToString(jsonObj) {
    return JSON.stringify(jsonObj);
};
function stirngToJson(string) {
    return eval('(' + string + ')');
}

function sessionToJson(session) {
//    sessionStorage.clear();
    return stirngToJson(session);
}

function showSimpleLoad(){
    $.mobile.loading('show',{
        textVisible: true,
        text: "¼ÓÔØÖÐ",
        textonly: false,
        theme: "c"
    })
}
function onPullDown() {
    showSimpleLoad()
    var url = $("#pullAjaxUrl").attr("href") + "1";
    $.getJSON(getRootPath()+url,function(response){
        $("[data-role='listview']").empty();
        $("[data-role='listview']").append(buildHtml(response));
        $(".news-content").trigger("create")
        $('.news-list').listview('refresh');
        $("#pullAjaxUrl").attr("data-page","1")
        hideLoader();
        bindLink("a.ui-link");
    });

};
function onPullUp() {
    showSimpleLoad();
 var url = editPath( $("#pullAjaxUrl"));
    $.getJSON(getRootPath()+url ,function(response){
        $("[data-role='listview']").append(buildHtml(response));
        $(".news-content").trigger("create")
        $('.news-list').listview('refresh');
        hideLoader();
        bindLink("a.ui-link");
    });

};
function editPath(docObj){
 var pageNumber= docObj.attr("data-page");
     pageNumber =  new Number(pageNumber) + 1 ;
     docObj.attr("data-page",pageNumber);
     return docObj.attr("href") + pageNumber;
}


