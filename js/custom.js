(function ($) {
	'use strict';

$(".menu-icon").on("click",function () {
	$(".fashion-menu").animate({"left" : "0","opacity" : "1"},"slow");
});

$(".close").on("click",function () {
	$(".fashion-menu").animate({"left" : "-280","opacity" : "0"},"slow");
});


// Owl Carousel for Slider



$('.fashion-slide .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

// Owl Carousel for Popular Product slider

$('.fas-popular-pro .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
 
 // active button for products btuuon

$(".fas-pro-left button").on("click", function () {
	
	$(".fas-pro-left button").removeClass("active");
	$(this).addClass("active");
});


//  isotop plugin

  // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

 var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});

 // products img hover

$(".single-pro img").on("mouseover",function () {
    
    $(".overlay").animate({"bottom":"150px"},"fast");

});
$(".single-pro img").on("mouseleave",function () {
    
    $(".overlay").animate({"bottom":"20px"});

});

// active button for active promo button

$(".promo-btn button").on("mouseover", function () {
    
    $(".promo-btn button").addClass("active-promo-btn");
});
$(".promo-btn button").on("mouseleave", function () {
    
    $(".promo-btn button").removeClass("active-promo-btn");
});

// store indication

$("html").on("mouseover", function () {
    
    $(".scrll-down").animate({"marginTop":"90px"});
    $(".scrll-down").animate({"marginTop":"10px"});
    $(".scrll-down").animate({"marginTop":"90px"});
});

// This code for auto-scroll top

$(window).scroll(function () {
    var goTop = $(window).scrollTop();

 if (goTop < 650) {
    $(".scrl-bar").css({'opacity' : '0'});
 }
 else {
    $(".scrl-bar").css({'opacity' : '1'});
 }

});

$(".scrl-bar").on("click",function () {
    
    $("html").animate({'scrollTop' : '0'},3000);
});




})(jQuery);