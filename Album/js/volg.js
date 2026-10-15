$(document).ready(function() {

  // 忘記密碼
  $($('#menu button').eq(0).addClass('active').find('a').attr('href'))
    .siblings('.content')
    .hide();


  $('#menu button').click(function() {

    $($(this).find('a').attr('href'))
      .show()
      .siblings('.content')
      .hide();

    $(this)
      .addClass('active')
      .siblings('.active')
      .removeClass('active');

  });



  // 大tab
  $('.nav-pills, .pull-right').tabdrop();



  var $btn = $('.VOLG-tab button.tablinksd');

  $($btn.eq(0).find('a').attr('href'))
    .siblings('.tab_inner')
    .hide();


  $btn.click(function() {

    $($(this).find('a').attr('href'))
      .show()
      .siblings('.tab_inner')
      .hide();


    $(this)
      .addClass('active')
      .siblings('.active')
      .removeClass('active');

  });




  // tab導覽
  var $li = $('.first li');


  $(".first").each(function(index) {

    $($(this)
      .find("li:eq(0)")
      .addClass('active')
      .find('a')
      .attr('href'))
      .siblings('.ul_inner')
      .hide();

  });



  $li.click(function() {

    $($(this).find('a').attr('href'))
      .show()
      .siblings('.ul_inner')
      .hide();


    $(this)
      .addClass('active')
      .siblings('.active')
      .removeClass('active');

  });




  // 禁止 dropdown 點擊關閉
  $(".list").on("click", function(e) {

    e.stopPropagation();

  });




  // checkbox
  $('.list .ul_inner label input').click(function() {

    if ($(this).prop('checked')) {

      $(this)
        .closest('.ul_inner')
        .siblings()
        .not('.third_list')
        .find('label input:checkbox')
        .prop('checked', false);

    }

  });





  // 全選
  $(".ul_inner label .all").click(function() {

    if (this.checked == true) {


      $("label .individual:not('.third_list .individual')")
        .prop("checked", true);


      $(this)
        .closest('.ul_inner')
        .siblings()
        .not('.third_list')
        .find('label input:checkbox')
        .prop('checked', false);


    } else {


      $("label .individual:not('.third_list .individual')")
        .prop("checked", false);


    }

  });





  $(".third_list label .all").click(function() {


    if (this.checked == true) {


      $("label .individual:not('.ul_inner .individual')")
        .prop("checked", true);


    } else {


      $("label .individual:not('.ul_inner .individual')")
        .prop("checked", false);


    }


  });





  $('label .individual').click(function() {


    $(this)
      .closest('label')
      .siblings()
      .find('.all:checkbox')
      .prop('checked', false);



    if ($(this).prop("checked")) {

      $(this).prop("checked", true);


    } else {

      $(this).prop("checked", false);

    }


  });







  // 最新文章
$('.volg-owl').owlCarousel({

  nav:false,

  responsiveClass:true,

  loop:true,

  dots:true,

  autoplay:true,

  margin:20,

  autoplayTimeout:5000,      // 原本 10000 → 改 5000

  autoplaySpeed:800,         // 切換動畫速度

  smartSpeed:800,            // 拖曳/切換速度

  autoplayHoverPause:true,

  responsive:{
    0:{
      items:1
    }
  }

});







  // 匠玩 podcast
  $('.e_down_box').owlCarousel({

    nav:false,

    loop:true,

    margin:20,

    autoplayTimeout:5000,

    autoplayHoverPause:true,


    responsive:{


      0:{

        items:1,

        dots:true,

        autoplay:true

      },


      500:{

        items:2,

        dots:true,

        autoplay:true

      },


      768:{

        items:3,

        dots:true,

        autoplay:true

      },


      1024:{

        items:4,

        dots:false,

        autoplay:false

      }


    }

  });







  // 禁止往上
  $('.stop_top').on('click', function(event) {

    event.preventDefault();

    $('html,body').stop();

  });






  // tab_e
  $('.tab_e').owlCarousel({

    loop:true,

    nav:true,

    dots:false,

    autoplay:true,

    autoplayTimeout:8000,

    autoplayHoverPause:true,

    items:1

  });



});




// =====================================================
// OverlayScrollbars
// 延後初始化，避免刷新前寬度錯誤
// =====================================================

$(window).on('load', function(){


  setTimeout(function(){


    $(".VOLG-tab").overlayScrollbars({

      className:"os-theme-thin-dark"

    });


  },200);


});