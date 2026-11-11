$(document).ready(function () {
  $('#MemberHot-owl-carousel').owlCarousel({
    nav: true,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 20,
    smartSpeed: 450,
    dots: false,
    navText: ["<img src='images/20_back02.svg'>", "<img src='images/20_next02.svg'>"],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      }

    }
  });
})