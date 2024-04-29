var menuDiv = document.getElementById("menuText");

var menuIspis = `<div class="table-responsive-sm"><table class="table table-dark">
                <thead>
                    <tr>

                        <th scope="col"></th>
                        <th scope="col"><span class="text-danger">22cm</span></th>
                        <th scope="col"><span class="text-danger">32cm</span></th>
                        <th scope="col"><span class="text-danger">45cm</span></th>
                    </tr>
                </thead>
                <tbody>`;

var pizzaNames = ["Pizza Il Capo", "Pizza Margarita", "Pizza La Festa", "Pizza La Lena - folded", "Pizza La Forza", 
                    "Pizza La Rosa", "Pizza Laloshka", "Pizza Hungarian"];

var pizzaIngredients = ["ketchup, cheese, ham, mushrooms","tomato, mozzarella, basil","ketchup, cheese, ham, mushrooms, eggs, pepperoni",
                        "ketchup, cheese, ham, mushrooms", "ketchup, cheese, dry neck, mushrooms, cream, olives", "ketchup, cheese, ham",
                        "bacon, kulen, ketchup, cheese, pepperoni","kulen, ketchup, cheese, eggs, pepperoni"];

var pizzaPricesS = ["7","8","8","7","9","7","8","8"];

var pizzaPricesM = ["10","11","11","10","13","10","12","12"];

var pizzaPricesL = ["15","16","16","15","18","15","17","17"];

for(var i=0;i<pizzaNames.length;i++){
    menuIspis +=`<tr>
                    <td>
                        <h4><span class="text-danger">${pizzaNames[i]}</span></h4>
                        <p><span class="text-warning">${pizzaIngredients[i]}</span></p>
                    </td>
                    <td><span class="text-warning">${pizzaPricesS[i]}$</span></td>
                    <td><span class="text-warning">${pizzaPricesM[i]}$</span></td>
                    <td><span class="text-warning">${pizzaPricesL[i]}$</span></td>
                </tr>`
}

menuIspis += "</tbody></table></div>";

menuDiv.innerHTML += menuIspis;

