$(document).ready(function(){

    var newsOwl = $('.news-owl');

    newsOwl.owlCarousel({
        margin:30,
        nav:true,
        loop:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.news .prev').on("click", function() {
        newsOwl.trigger('prev.owl.carousel');
    });
    $('.news .next').on("click", function() {
        newsOwl.trigger('next.owl.carousel');
    });

});