function PartnerImages() {
    var partnerFilePath = "images/partners/";
    var partnerText = "Partner";
    var filePartnerText = "partner-";
    var fileNameAltTextArray = [
        ["bustour", "Bus Tours"], 
        ["cabinrental", "Cabin Rental"], 
        ["campingadv", "Camping Adventure"], 
        ["collegetours", "College Tours"], 
        ["rentalbike", "Bike Rentals"], 
        ["tourgroup", "Tour Group"]
    ];
    var fileExtension = ".png";
    var imageList = [];
    var listArray = [];
    var openDivTag = "<div class='col-sm-6 col-md-4 col-lg-2'>";
    var closeDivTag = "</div>";
    var openlistTag = "<li class='partner'>";
    var closeListTag = "</li>";
    var src;

    for (var i = 0; i < fileNameAltTextArray.length; i++) {
        src = partnerFilePath + filePartnerText + fileNameAltTextArray[i][0] + fileExtension;
        imageList.push("<img src='" + src + "' alt='" + partnerText + " " + fileNameAltTextArray[i][1] + "'>");
        listArray.push(openDivTag + openlistTag + imageList[i] + closeListTag + closeDivTag);
    }

    document.getElementById("partnersRow").innerHTML = listArray.join("");
}

PartnerImages();