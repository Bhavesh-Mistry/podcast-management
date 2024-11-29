$(document).ready(function () {


   // slider icon disable
   $(".slider-trending").on("afterChange", function (event, slick, currentSlide) {
      const $prevArrow = $(".sliderArrows .prev");
      const $nextArrow = $(".sliderArrows .next");

      if (currentSlide === 0) {
         $prevArrow.addClass("slick-disabled");
      } else {
         $prevArrow.removeClass("slick-disabled");
      }

      if (currentSlide === slick.slideCount - 1) {
         $nextArrow.addClass("slick-disabled");
      } else {
         $nextArrow.removeClass("slick-disabled");
      }
   });

   // trending podcast & episodes slider
   $(".slider-trending").slick({
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 6,
      prevArrow: $(".sliderArrows .prev"),
      nextArrow: $(".sliderArrows .next"),
      arrows: true,
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 5,
            },
         },
         {
            breakpoint: 1399,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });

});