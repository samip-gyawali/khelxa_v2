$('.current-matches').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    autoplay : true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText: ["","<i class='fa-solid fa-chevron-right'></i>"],
    dots : false
});


// User list
var margin;
if(window.visualViewport.width < 1200 && window.visualViewport.width >= 600){
    margin = 200;
}else if(window.visualViewport.width >= 1200){
    margin = 250;
}

$('.user-list .user').owlCarousel({
    loop:true,
    margin:margin,
    nav:false,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});