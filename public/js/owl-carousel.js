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