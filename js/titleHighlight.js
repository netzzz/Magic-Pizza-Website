var titleText = document.getElementById("titleText");

titleText.addEventListener("mouseover", function () {
    this.style.background = "#485058";
});

titleText.addEventListener("mouseout", function () {
    this.style.background = "#343a40";
});

$("#titleText").css("box-shadow", "3px 3px 6px #000");