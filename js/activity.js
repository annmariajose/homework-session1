//user interaction with table cells
$(document).ready(function() {
    $("table tbody tr td:not(:first-child)").hover(function() { //user hover a table data cell
        if ($(this).text() != "Not Available") { //check if content does not contain a particular string
            $(this).css('cursor', 'pointer'); //change mouse pointer

            $(this).click(function() { //user select a table data cell
                var cliffName = $("table thead tr th:eq(" + $(this).index() + ")").text(); //get cliff location
                var content = $(this).text() + " at " + cliffName; //get content of cell

                $(this).toggleClass("highlightCell"); //add or remove class when cell is selected

                if ($(this).hasClass("highlightCell")) { //check if selected cell has class
                    $("#displaySelectedModal").modal('show'); //make display box visible
                    $(".modal-body").append("<p>" + content + "</p>"); //add child element with contents of cell
                } else { //if selected cell do not have class
                    $(".modal-body p:contains(" + content + ")").remove(); //remove child element
                }
            })
        }
    })
})