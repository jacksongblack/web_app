function getJsonToData() {
    $.ajax({
        type       : "GET",
        url        : "http://ruby-china.org/api/topics.json",
        crossDomain: true,
        beforeSend : showLoader(),
        complete   : function() {$.mobile.loading('hide')},
        data       : {},
        dataType   : 'json',
        success    : function(response) {
            console.error(JSON.stringify(response));
//            alert('Works!');
        },
        error      : function() {
            console.error("error");
//            alert('Now working!');
        }
    });
};


