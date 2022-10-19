jQuery(document).ready(function( $ ) {

 $('.toggle-mnu').click(function (e) {
    e.preventDefault();
    $('.top__mnu').addClass('open');
    $('.overlay').fadeIn();
  });

  $('.overlay, .open-mnu-close').click(function () {    
    $('.top__mnu').removeClass('open');
    $('.overlay').fadeOut();
  });


  $(".top__mnu").click(function (e) {
    e.stopPropagation();
  });


//levels menu
let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

let body = document.querySelector('body');


if ( isMobile.any() ) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.menu-arrow');
  arrow.forEach(function (item) {
    let thisLink = item.previousElementSibling;
    let subMenu = item.nextElementSibling;
    let thisArrow = item;

    thisLink.classList.add('parent');
    item.addEventListener('click', function () {      
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  });
}
else {
  body.classList.add('mouse')
}


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

  $('.photocars__img-w').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
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

popup('.banner__btn', '.modal-overlay_1', '.modal-close_1');


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
  dots: false,
  responsive: [

    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 4        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
    ]  
});

$('.brands-slider__slider').slick({            
  infinite: true,    
  slidesToShow: 7,
  speed: 350,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  dots: false,
  responsive: [    
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3
      }
    },
     {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1
      }
    }
    ]   
});



}); //ready

