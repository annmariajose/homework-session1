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
                    $("#displaySelected").css("visibility", "visible"); //make display box visible
                    $("#displaySelected").css("margin-top", "2em"); //add spaces above display box
                    $("#result").append("<p>" + content + "</p>"); //add child element with contents of cell
                } else { //if selected cell do not have class
                    $("#result p:contains(" + content + ")").remove(); //remove child element

                    if ($("#result").has("p").length == false) { //check if there are any child within parent
                        $("#displaySelected").css("visibility", "hidden"); //make display box hidden
                        $("#displaySelected").css("margin-top", "0"); //remove spaces above display box
                    }
                }
            })
        }
    })
})