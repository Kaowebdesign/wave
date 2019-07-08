$(document).ready(function() {

    var testimonialsPos= $('.testimonials').offset().top,
        howworksPos= $('.howworks').offset().top,
        packagePos= $('.package').offset().top;
    var layer1s=3,
        layer2s = 5,
        layer3s = 6,
        layer4s= 5;
    $(window).scroll(function(){
        //layer1
        $('.bg__shape1').css({'top': -$(window).scrollTop()/layer1s});
        //layer2
        if(screen.width > 1024){
            $('.diagram').css({'bottom': 109-$(window).scrollTop()/8});
            $('.search').css({'top': 137-$(window).scrollTop()/layer2s});
            //layer3
            $('#content').css({'top': $(window).scrollTop()/layer3s});
            //layer4
            $('.shape').css({'bottom': 140-$(window).scrollTop()/7});
            $('.rectangle').css({'top': 173+$(window).scrollTop()/layer4s});
        }
        if($(this).scrollTop() > howworksPos){
            $('.bg__shape2').css({'top': -($(window).scrollTop() - howworksPos) / 3});
        }
        
        if($(this).scrollTop() > packagePos){
            $('.bg__shape4').css({'top': -($(window).scrollTop() - packagePos) / 2});
        }

        if($(this).scrollTop()> testimonialsPos){
            $('.bg__shape3').css({'top': -($(window).scrollTop() - testimonialsPos) / 7});
        }
    });
        //ect
        //$('.header__back').css({'top': $(window).scrollTop()/8});

        //second_var

       /* var layer1s=8,
            layer2s = 5,
            layer3s = 4,
            layer4s= 2;
        $(window).scroll(function(){
            //layer1
            $('.bg__shape1').css({'top': $(window).scrollTop()/layer1s});
            //layer2
            if(screen.width > 1024){
                $('.diagram').css({'bottom': 109+$(window).scrollTop()/layer2s});
            }

            $('.search').css({'top': 137-$(window).scrollTop()/layer2s});
            //layer3
            $('#content').css({'top': -$(window).scrollTop()/layer3s});
            //layer4
            $('.shape').css({'bottom': 140+$(window).scrollTop()/layer4s});
            $('.rectangle').css({'top': 173-$(window).scrollTop()/layer4s});
        });*/

});