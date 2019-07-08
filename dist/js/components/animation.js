$(document).ready(function() {

    var cards = $('#cards'),
        card=$('#cards .card'),
        main = $('#main').offset().top,
        team = $('#team').offset().top;

   $(window).scroll(function(){

        if($(this).scrollTop() > main && $(this).scrollTop() < team){
            card.each(function(i ,el){

                var el = $(el);
                    el.addClass('card_wave');
            });
        }
        else{
            card.each(function(i ,el){

                var el = $(el);
                    el.removeClass('card_wave');
            });
        }
   });

});