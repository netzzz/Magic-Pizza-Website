var menuUrls = ["index.html","about.html","menu.html","gallery.html","author.html"];
var menuText = ["Home","About","Menu","Gallery","Author"];
var menuIspis = `<ul class="navbar-nav ml-auto">`;

const currentUrl = window.location.href;
var urlArray = currentUrl.split("/");
var page = urlArray.pop();

for(var i=0;i<menuUrls.length;i++){
    menuIspis += `<li class="nav-item">
                    <a href="${menuUrls[i]}" class="nav-link `
    if(menuUrls[i]==page){
        menuIspis += `text-danger">${menuText[i]}</a>
        </li>`
    }
    else{
        menuIspis += ` text-warning">${menuText[i]}</a>
        </li>`
    }
}

menuIspis += `<li class="nav-item">
                <a href="order.html"><button class="btn btn-warning btn-md">Order Now!</button></a>
             </li>
        </ul></div>`;

var navigationDiv = document.getElementById("navmenu");

navigationDiv.innerHTML = menuIspis;

var navBar = document.getElementsByClassName("nav-item");

for (navElement of navBar) {
    navElement.addEventListener("mouseover", function () {
        this.style.fontWeight = "bold";
        this.style.background = "#485058";
    });
    navElement.addEventListener("mouseout", function () {
        this.style.fontWeight = "normal";
        this.style.background = "#343a40";
    });
}
