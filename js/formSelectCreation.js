var divPizzaType = document.getElementById("divPizzaType");
var divPizzaSize = document.getElementById("divPizzaSize");
var divPizzaAmount = document.getElementById("divPizzaAmount");

var pizzaTypeValue = [0,"Pizza Il Capo","Pizza Margarita","Pizza La Festa","Pizza La Lena - folded","Pizza La Forza","Pizza La Rosa","Pizza Laloshka","Pizza Hungarian"];
var pizzaType = ["Select pizza","Pizza Il Capo","Pizza Margarita","Pizza La Festa","Pizza La Lena - folded","Pizza La Forza","Pizza La Rosa","Pizza Laloshka","Pizza Hungarian"];

pizzaTypeText = `<label for="selectPizza"><span class="text-warning">Pizza:</span></label>
                    <select class="form-control" id="selectPizza" name="selectPizza">`;
for(var i=0;i<pizzaTypeValue.length;i++){
    pizzaTypeText += `<option value="${pizzaTypeValue[i]}">${pizzaType[i]}</option>`;
}
pizzaTypeText += "</select>";

divPizzaType.innerHTML += pizzaTypeText;

var pizzaSizeValue = [0,22,32,45];
var pizzaSize = ["Select size","22cm","32cm","45cm"];

pizzaSizeText = `<label for="selectSize"><span class="text-warning">Size:</span></label>
                    <select class="form-control" id="selectSize" name="selectSize">`;
for(var i=0;i<pizzaSizeValue.length;i++){
    pizzaSizeText += `<option value="${pizzaSizeValue[i]}">${pizzaSize[i]}</option>`;
}
pizzaSizeText += "</select>";
divPizzaSize.innerHTML += pizzaSizeText;

var pizzaAmountValue = [0,1,2,3,4,5,6,7,8,9];
var pizzaAmount = ["Select amount",1,2,3,4,5,6,7,8,9];

pizzaAmountText = `<label for="pizzaAmount"><span class="text-warning">Amount:</span></label>
                    <select class="form-control" id="selectAmount" name="selectAmount">`;
for(var i=0;i<pizzaAmountValue.length;i++){
    pizzaAmountText += `<option value="${pizzaAmountValue[i]}">${pizzaAmount[i]}</option>`;
}
pizzaAmountText += "</select>";
divPizzaAmount.innerHTML += pizzaAmountText;