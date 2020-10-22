document.querySelectorAll('.banMenu .box').forEach((item) => {
    // console.log(item)

    // change the picture and price

    item.addEventListener('click', (event) => {
        let imgSrc = item.querySelector('.thumbnail img').src;
        let title = item.querySelector('.infoBox h5').textContent;
        let price = item.querySelector('.infoBox .price').textContent;
        
        // console.log(imgSrc);
        // console.log(title);
        // console.log(price);

        document.querySelector('.banner h1').textContent = title;
        document.querySelector('.banner .priceBox').textContent = price;
        document.querySelector('.banner .imgBox img').src = imgSrc;


            // adding animation class
        document.querySelector('.banner .infoBox').classList.add('.animationLeft');
        document.querySelector('.banner .imgBox').classList.add('.animationRight');
    });
    setTimeout(function(){
        document.querySelector('.banner .infoBox').classList.remove('.animationLeft');
        document.querySelector('.banner .imgBox').classList.remove('.animationRight');
    }, 1000);
});

// toggle navigation
document.querySelector('header .navMenu').addEventListener('click', (event) => {
    document.querySelector('header nav').classList.toggle('show');
});


