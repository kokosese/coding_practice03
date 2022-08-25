$(function(){

    $('.hamburger').on('click',function(){
        hamburger()
    })

    $('.navi a').on('click',function(){
        hamburger();
    })

    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function(){
        var headerHight = 0;
        var target = $(urlHash);
        var position = target.offset().top - headerHight;
        $('body,html').stop().animate({scrollTop:position}, 700);
    }, 100);
    }
    

	

    $('a[href^="#"]').click(function(){
        var speed = 700;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });

});

function hamburger (){
    $('.hamburger').toggleClass('active');
    if($('.hamburger').hasClass('active')){
        $('.navi').addClass('active');
        $('.mask').addClass('active')
    } else {
        $('.navi').removeClass('active')
        $('.mask').removeClass('active')
    }
}