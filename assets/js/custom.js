$(document).ready(function () {


  // Main menu;

  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop();

    if (scrolling >= 200) {
      $('.header .main-menu').addClass('sticky-top');
    } else {
      $('.header .main-menu').removeClass('sticky-top');
    }
  });


  $('.main-menu .category ul').clone().appendTo('.banner .category');


  // Image size controller;
  let sliderImg = Array.from(document.getElementsByClassName('slider-img'));
  let wImg = sliderImg.forEach(function (wImg) {
    let pWidth = wImg.parentElement.parentElement.parentElement.getElementsByClassName('width-control')[
      0];
    pWidth.setAttribute('style', 'width:' + wImg.width +
      'px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis')
  });

  // Slick slider;
  $('.slider-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
  });

  $('.work-slider-content').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    variableWidth: true
  });

  $('.artist-slider-content').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.recent-blog-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.category-slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // Filtering;
  $('.artist-flow .filter-btns li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });







});