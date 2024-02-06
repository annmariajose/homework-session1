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
    var openlistTag = "<li class='partner'>";
    var closeListTag = "</li>";
    var src;

    for (var i = 0; i < fileNameAltTextArray.length; i++) {
        src = partnerFilePath + filePartnerText + fileNameAltTextArray[i][0] + fileExtension;
        imageList.push("<img src='" + src + "' alt='" + partnerText + " " + fileNameAltTextArray[i][1] + "'>");
        listArray.push(openlistTag + imageList[i] + closeListTag);
    }

    document.getElementById("partners").innerHTML = listArray.join("");
}

PartnerImages();