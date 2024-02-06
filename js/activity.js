$(document).ready(function() {
    var notAvaiableText = "Not Available";
    $("table tbody tr td:not(:first-child)").hover(function() {
        if ($(this).text() != notAvaiableText) {
            $(this).css('cursor', 'pointer');
        }
    })
})