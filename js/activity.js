$(document).ready(function() {
    $("table tbody tr td:not(:first-child)").hover(function() {
        var content = $(this).text();

        if ($(this).text() != "Not Available") {
            $(this).css('cursor', 'pointer');

            $(this).click(function() {
                $(this).toggleClass("highlightCell");
                
                if ($(this).hasClass("highlightCell")) {
                    $("#displaySelected").css("visibility", "visible");
                    $("#displaySelected").css("margin-top", "2em");
                    $("#result").append("<p>" + content + "</p>");
                } else {
                    $("#result p:contains(" + content + ")").remove();
                    if ($("#result").has("p").length == false) {
                        $("#displaySelected").css("visibility", "hidden");
                        $("#displaySelected").css("margin-top", "0");
                    }
                }
            })
        }
    })
})