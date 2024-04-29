var datum = new Date();
var dan = datum.getDay();
var danText = "";
var discountPercentage = 0;

switch (dan) {
    case 0:
        danText = "Sunday";
        discountPercentage = 10;
        break;
    case 1:
        danText = "Monday";
        discountPercentage = 10;
        break;
    case 2:
        danText = "Tuesday";
        discountPercentage = 10;
        break;
    case 3:
        danText = "Wednesday";
        discountPercentage = 15;
        break;
    case 4:
        danText = "Thursday";
        discountPercentage = 15;
        break;
    case 5:
        danText = "Friday";
        discountPercentage = 15;
        break;
    case 6:
        danText = "Saturday";
        discountPercentage = 20;
        break;
}

var discountIspis = `Today is ${danText}, and on ${danText}'s 
                    we have special <span class="text-danger"> ${discountPercentage}% discount</span> 
                    on all orders!`

var discountElement = document.getElementById("discountText");
discountElement.innerHTML = discountIspis;