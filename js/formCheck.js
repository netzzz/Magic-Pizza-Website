$("#orderForm").submit(function(e) {
    e.preventDefault();
});

var reName = /^[A-Z][a-z]{2,9}$/;
var reAddress = /^([A-Z][a-z]{2,9}\s)+[0-9]+$/
var rePhone = /^06[0-689][\d]{6,7}$/;

var firstName = document.getElementById("name");
var address = document.getElementById("address");
var phone = document.getElementById("phone");
var pizzaType = document.getElementById("selectPizza")
var pizzaSize = document.getElementById("selectSize");
var pizzaAmount = document.getElementById("selectAmount");
var extraCheese = document.getElementById("cheese");
var extraChilli = document.getElementById("chilli");
var paymentOptions = document.getElementsByName("payment");
var radioDiv = document.getElementById("radioButtons");
var additionalNote = document.getElementById("additionalNote");


function checkRegEx(regularExpression, fieldToCheck){
    if(!$(fieldToCheck).val().match(regularExpression)){
        return false;
    }
    else{
        return true;
    }
}


var divForOutput = document.getElementById("output");


function provera(){
    var errorNumber = 0;
    var errorText = "";
    var outputText = "";
    

    if(!checkRegEx(reName,firstName)){
        errorText+=`<p><span class="text-danger">Name is not in a correct format</span></p>`;
        errorNumber++;
        $(firstName).addClass('error');
    }
    else{
        $(firstName).removeClass('error');
        $(firstName).addClass('ok');
        outputText += `<p><span class="text-success">Name: ${firstName.value}</span></p>`;
    }

    if(!checkRegEx(reAddress,address)){
        errorText+=`<p><span class="text-danger">Address is not in a correct format</span></p>`;
        errorNumber++;
        $(address).addClass('error');
    }
    else{
        $(address).removeClass('error');
        $(address).addClass('ok');
        outputText += `<p><span class="text-success">Address: ${address.value}</span></p>`;
    }

    if(!checkRegEx(rePhone,phone)){
        errorText+=`<p><span class="text-danger">Phone number is not in a correct format (e.g.: 063111222)</span></p>`;
        errorNumber++;
        $(phone).addClass('error');
    }
    else{
        $(phone).removeClass('error');
        $(phone).addClass('ok');
        outputText += `<p><span class="text-success">Phone: ${phone.value}<span></p>`;
    }

    if(pizzaType.value==0){
        errorText+=`<p><span class="text-danger">You need to choose which pizza you want to order</span></p>`;
        errorNumber++;
        $(pizzaType).addClass('error');
    }
    else{
        $(pizzaType).removeClass('error');
        $(pizzaType).addClass('ok');
        outputText += `<p><span class="text-success">Pizza: ${pizzaType.value}<span></p>`;
    }

    if(pizzaSize.value==0){
        errorText+=`<p><span class="text-danger">You need to choose which size of pizza you want to order</span></p>`;
        errorNumber++;
        $(pizzaSize).addClass('error');
    }
    else{
        $(pizzaSize).removeClass('error');
        $(pizzaSize).addClass('ok');
        outputText += `<p><span class="text-success">Pizza size: ${pizzaSize.value}<span></p>`;
    }

    if(pizzaAmount.value==0){
        errorText+=`<p><span class="text-danger">You need to choose amount of pizza's you want to order</span></p>`;
        errorNumber++;
        $(pizzaAmount).addClass('error');
    }
    else{
        $(pizzaAmount).removeClass('error');
        $(pizzaAmount).addClass('ok');
        outputText += `<p><span class="text-success">Pizza amount: ${pizzaAmount.value}<span></p>`;
    }

    if(extraCheese.checked){
        outputText += `<p><span class="text-success">Extra cheese: yes</span></p>`;
    }
    else{
        outputText += `<p><span class="text-success">Extra cheese: no</span></p>`;
    }

    if(extraChilli.checked){
        outputText += `<p><span class="text-success">Extra chilli: yes</span></p>`;
    }
    else{
        outputText += `<p><span class="text-success">Extra chilli: no</span></p>`;
    }

    var checkedOptionValue;

    for(var i=0;i<paymentOptions.length;i++){
        if(paymentOptions[i].checked){
            checkedOptionValue = paymentOptions[i].value;
        }
    }

    if(checkedOptionValue==undefined){
        errorText+=`<p><span class="text-danger">You need to choose one of payment options</span></p>`;
        errorNumber++;
        $(radioDiv).addClass('error');
    }
    else{
        outputText += `<p><span class="text-success">Payment option: ${checkedOptionValue}</span></p>`;
        $(radioDiv).removeClass('error');
        $(radioDiv).addClass('ok');
    }

    if(additionalNote.value.length>0){
        outputText += `<p><span class="text-success">Additional note: ${additionalNote.value}</span></p>`;
    }



    if(errorNumber>0){
        divForOutput.innerHTML = errorText;
    }
    else{
        divForOutput.innerHTML = "";
        divForOutput.innerHTML = outputText;
        divForOutput.innerHTML += `<p><span class="text-success">Discount for today: ${discountPercentage} %</span></p>`;
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        divForOutput.innerHTML += `<p><span class="text-success">Time of order: ${time}</span></p>`
    }
}



