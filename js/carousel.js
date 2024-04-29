var carouselDiv = document.getElementById("carouselExampleIndicators");

var carouselIspis = `<ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">`;

var carouselImageSrcArray=["images/image1.jpg","images/image2.jpg","images/image3.jpg"];

var carouselImageAltArray=["pizza slice being served","pizza with tomato, top view","pizza with tomato, side view"];

for(var i=0;i<carouselImageAltArray.length;i++){
    carouselIspis += `<div class="carousel-item`;
    if(i==0){
        carouselIspis += ` active`;
    }
    carouselIspis += `">
    <img src="${carouselImageSrcArray[i]}" class="d-block w-100" alt="${carouselImageAltArray[i]}">
  </div>`;
}

carouselIspis +=`</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`;

carouselDiv.innerHTML += carouselIspis;


$('.carousel').carousel({
    interval: 2000
})