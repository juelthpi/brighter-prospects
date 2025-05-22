jQuery(document).ready(function ($) {
  // awards
  $(".testimonial-item-list").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  });
  // menu bg add
  function checkScroll() {
    if ($(window).scrollTop() > 50) {
      $(".header-area").addClass("menu-bg");
    } else {
      $(".header-area").removeClass("menu-bg");
    }
  }

  $(document).on("click", function (event) {
    const $div = $("#outside-click");
    const $navbarText = $("#navbarText");
    if (!$div.is(event.target) && $div.has(event.target).length === 0) {
      $navbarText.removeClass("show");
    }
  });
  // Run on page load
  $(document).ready(function () {
    checkScroll();
  });
  // Run on scroll
  $(window).on("scroll", function () {
    checkScroll();
  });
  // counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
// loader
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").delay(500).fadeOut("slow");
  $("body").delay(500).css({ opacity: 1 });
});
AOS.init({
  duration: 800,
  once: true,
});
