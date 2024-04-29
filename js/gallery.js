var galleryDiv = document.getElementById("galleryContent");


var imagesSrcArray = ["images/galerija/image1.jpg","images/galerija/image2.jpg","images/galerija/image3.jpg","images/galerija/image4.jpg",
                        "images/galerija/image5.jpg", "images/galerija/image6.jpg","images/galerija/image7.jpg","images/galerija/image8.jpg","images/galerija/image9.jpg"]

var imagesAltArray = ["Pizza with cheese and bacon in front of oven", "Pizza with pepper and cheese", "Pizza with olives", "Pizza with olives on a table",
                        "Multiple smaller pizzas in open boxes", "Pizza dough being made", "Pizza with ketchup close up", "Pizza boxes stacked one on another",
                        "Pizza being baked in oven"];

var galerijaIspis = ""

for(var i=0;i<imagesSrcArray.length;i++){
    galerijaIspis += `<div class="col-sm-6 col-md-4">
                        <a class="lightbox" href="${imagesSrcArray[i]}">
                            <img src="${imagesSrcArray[i]}" alt="${imagesAltArray[i]}">
                        </a>
                        </div>`;
}

galerijaIspis +="</div>";
galleryDiv.innerHTML = galerijaIspis;
