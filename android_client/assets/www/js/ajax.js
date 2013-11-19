function getJsonToData(url) {
    var path =  getRootPath() + url
    alert(path)
    $.ajax({
        type       : "GET",
        url          : path ,
        crossDomain: true,
        beforeSend : showLoader(),
        complete   : function() {$.mobile.loading('hide')},
        data       : {},
        dataType   : 'json',
        success    : function(response) {
//            console.error(JSON.stringify(response));
            callBack(response);
            hideLoader();
        },
        error      : function() {
//            console.error("error");
            alert('No working!');
        }
    });
};
function callBack(response){

    $.each(response,function(n,value){
        alert(n);
        alert(value.title);
    });
};
function getRootPath(){
    return "http://192.168.1.111:3000/"
};


