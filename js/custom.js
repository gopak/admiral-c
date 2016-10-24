$(document).ready(function () {
    setTimeout(function(){
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });

        $('[data-carousel-publication]').owlCarousel({
            margin: 15,
            nav: true,
            dots: false,
            lazyLoad: true,
            responsive: {
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

        $('[data-carousel-product]').owlCarousel({
            margin: 15,
            nav: true,
            dots: false,
            lazyLoad: true,
            responsive: {
                0:{
                    items:1
                },
                490: {
                    items:2
                },
                730:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

        $('[data-carousel-banner]').owlCarousel({
            items:1,
            nav: false,
            dots: true,
            lazyLoad: true,
            animateOut: 'fadeOut',
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true,
            autoHeight: true
        });

        $('[data-toggle="popover"]').popover({
            html : true
        });
       
    }, 1000);
});
