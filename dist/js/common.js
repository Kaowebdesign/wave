$(document).ready(function() {

    var hdnext = $('.hdnext'),
        slider_one = $("#slider-one"),
        slider_two = $('#slider-two'),
        slider_three = $("#slider-three"),
        slider_for = $("#slider-for"),
        slider_five = $("#slider-five"),
        popup_youtube = $('.popup-youtube');

    hdnext.on('click',function(){

        var current_f=$(this).closest('.hdform__content')
        var next_f=$(this).closest('.hdform__content').next();
    
        current_f.removeClass('hdform__content_active');
        next_f.addClass('hdform__content_active');

    });
    slider_one.owlCarousel({
        loop: true,
        dots: false,
        margin:50,
        autoplay:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2,
                loop: true,
                center: true,
                margin: 10
            },
            768: {
                items: 6
            }
        }
    });

    slider_two.owlCarousel({
        items: 1,
        dots: false,
        nav:false,
        loop:true,
        smartSpeed:1000,
        autoplay:true,
        autoplayHoverPause:true,
    });
    // Listen to owl events:
    $('.qnav_right').click(function() {
        slider_two.trigger('next.owl.carousel');
    })
    $('.qnav_left').click(function() {
        slider_two.trigger('prev.owl.carousel');
    })
    slider_three.owlCarousel({
        nav: false,
        dots: false,
        dotsClass:'vdots',
        dotClass:'vdots__item', 
        item: 3,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            840:{
                items:2,
                dots:false
            },
            1440:{
                items:3,
                dots:false
            }
        }
     });
     slider_for.owlCarousel({
        items:1,
        navContainerClass:'vnav',
        navClass:['vnav__item vnav_left','vnav__item vnav_right'],
        navText:["<img src='img/arleft.png' alt='prev'>","<img src='img/arright.png' alt='next'>"],
        dotsClass:'vdots',
        dotClass:'vdots__item',
        responsiveClass:true,
        loop:true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                navText:["<img src='img/arleft.png' alt='prev'>","<img src='img/right.png' alt='next'>"]
            },
            768:{
                navText:["<img src='img/arleft.png' alt='prev'>","<img src='img/arright.png' alt='next'>"]
            }
        }
    });
    slider_five.owlCarousel({
        items:2,
        nav:true,
        margin:10,
        navContainerClass:'vnav',
        navClass:['vnav__item vnav_left','vnav__item vnav_right'],
        navText:["<img src='img/arleft.png' alt='prev'>","<img src='img/arright.png' alt='next'>"],
        dotsClass:'vdots',
        dotClass:'vdots__item',
        responsiveClass:true,
        autoplay:true,
        loop:true,
        smartSpeed:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            1440:{
                items:1
            }
        }
    });
    popup_youtube.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

});