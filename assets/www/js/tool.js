
function showSimpleLoad() {
    $.mobile.loading('show', {
        textVisible: true,
        text: "������",
        textonly: false,
        theme: "c"
    })
}



function BindLinkTo() {
    _thisObj_= this;
};
BindLinkTo.prototype ={
    constructor: BindLinkTo,
    bind:function(document,keyname){
        $(document).each(
            function () {
                $(this).bind("tap", function () {
                        _thisObj_.send($(this).attr("path"),keyname);
                    }
                )
            })
    },
    send:function(url,valueName){
     var getTo =  new GetTo()
        getTo.toPage= this.pageName
        getTo.send(url,valueName)
    },
    pageName:"#"

}


