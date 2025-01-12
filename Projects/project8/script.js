document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('img');
    const heartIcon = document.querySelector('.ri-heart-3-line');

    // Add double-click event listener to the image
    image.addEventListener('dblclick', function () {
        // Increase the heart icon size
        heartIcon.style.transform = 'translate(-50%,-50%)scale(1)'; 
        heartIcon.style.Opacity= 0.8; 
            setTimeout(function(){
                    heartIcon.style.Opacity= 0;
            },1000)

            setTimeout(function(){
                heartIcon.style.transform = 'translate(-50%,-50%)scale(0)'; 
            },2000)
    });
});

