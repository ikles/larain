jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });




  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/

$(".choice__right").fancybox({
  openEffect  : 'none',
  closeEffect : 'none',
  helpers : {
    media : {}
  }
});


function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.link2', '.modal-overlay_2', '.modal-close_2');
popup('.link', '.modal-overlay_1', '.modal-close_1');


$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
  return false;
});


$('.calculate-form__col').click(function () {
  $(this)
  .addClass('_active')
  .siblings().removeClass('_active');
});

$(".input-phone").mask("+7 (999) 999-99-99");

$('.revslider__slider').slick({            
  infinite: true,    
  slidesToShow: 1,
  speed: 550,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  dots: false    
});

$('.brands__slider').slick({            
  infinite: true,    
  slidesToShow: 6,
  speed: 350,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  dots: false    
});

$('.brands-slider__slider').slick({            
  infinite: true,    
  slidesToShow: 7,
  speed: 350,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  dots: false    
});



}); //ready

