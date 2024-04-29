var newsDiv = document.getElementById("newsText");

var newsTitles = ["You get your food in 30 minutes", "Get a discount every day", "Order and help others"];
var newsContent = [ "Our policy is that we will deliver your food in 30 minutes or less, if it takes more, you get food for free!",
                    "We have special discounts on different days in the week. If you eat our food, every day you will have a present from us!",
                    "One dollar from each pizza we sell goes to people who need it the most. Order our pizza and donate to people who are less fortunate!"];

var newsIspis = `<div class="row">`;

for(var i=0;i<newsTitles.length;i++){
    newsIspis += `<div class="col-lg-4 col-md-4 col-sm-12">
    <h4><span class="text-warning">${newsTitles[i]}</span></h4>
    <p>${newsContent[i]}</p>
</div>`
}

newsIspis += "</div>";

newsDiv.innerHTML += newsIspis;