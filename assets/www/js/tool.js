function jsonToString(jsonObj) {
    return JSON.stringify(jsonObj);
};
function stirngToJson(string) {
    return eval('(' + string + ')');
}

function flashToJson(session) {
//    sessionStorage.clear();
    return stirngToJson(session);
}

function showSimpleLoad() {
    $.mobile.loading('show', {
        textVisible: true,
        text: "������",
        textonly: false,
        theme: "c"
    })
}
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

};
function onPullUp() {
    var url = editPath($("#pullAjaxUrl"));
    var getobj = new GetTo(url);
    $("[data-role='listview']").append(buildHtml(getobj.send()));
    $(".news-content").trigger("create")
    $('.news-list').listview('refresh');
    bindLink("a.ui-link");
    getobj.clearSessionStorage()
};
function editPath(docObj) {
    var pageNumber = docObj.attr("data-page");
    pageNumber = new Number(pageNumber) + 1;
    docObj.attr("data-page", pageNumber);
    return docObj.attr("href") + pageNumber;
}


