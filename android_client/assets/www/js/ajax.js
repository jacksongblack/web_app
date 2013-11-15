function bindLink() {
    $(".news_theme").find('a').each(function () {
            $(this).click(function () {
                $.ajax({
                    type: "get",
                    uri: $(this).href(),
                    dataType: "json",
                    success: callBack(data)
                })
            })

        }
    )
};
function callBack(data) {
    alert(data);

};

$(".news_theme").live("pageshow", function () {
    $(this).find('a').each(function () {
        $(this).click(function () {
            $.ajax({
                type: "get",
                uri: $(this).href(),
                dataType: "json",
                success: callBack(data)
            })
        })
    })
});

