    document.addEventListener('DOMContentLoaded', () => {
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    let img = document.getElementById("slideshow-img");
    let figcaption = document.createElement("figcaption");
    const figure = document.getElementById("slideshow-figure");
    let index = 0;

    figure.appendChild(figcaption);
    const srcImg = [
        'img/jungle.jpg',
        'img/universe.jpg',
        'img/astronat.jpg',
        'img/nothing.jpg'
    ];
    const bar = [
        document.getElementById("img1"),
        document.getElementById("img2"),
        document.getElementById("img3"),
        document.getElementById("img4")
    ];

    function updateFigcaption(i) {
        figcaption.textContent = bar[i].alt;
    }

    updateFigcaption(0);

    bar[0].addEventListener("click", function(){
        index = 0;
        img.src = srcImg[index];
        updateFigcaption(index);
    });

    bar[1].addEventListener("click", function(){
        index = 1;
        img.src = srcImg[index];
        updateFigcaption(index);
    });

    bar[2].addEventListener("click", function(){
        index = 2;
        img.src = srcImg[index];
        updateFigcaption(index);
    });

    bar[3].addEventListener("click", function(){
        index = 3;
        img.src = srcImg[index];
        updateFigcaption(index);
    });
    
    prev.addEventListener("click", function(){
        if (index === 0){
            index = srcImg.length-1;
        } else {
            index--;  
        }      
        img.src = srcImg[index];
        updateFigcaption(index);
    });
    
    next.addEventListener("click", function(){
        if (index === srcImg.length-1){
            index = 0;
        } else {
            index++;  
        }      
        img.src = srcImg[index];
        updateFigcaption(index);
    });    

});