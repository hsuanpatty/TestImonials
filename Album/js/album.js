$(document).ready(function() {

  /* =====================================================
     1. 忘記密碼
  ===================================================== */

  $('#menu button').eq(0).addClass('active');

  var firstMenuHref = $('#menu button').eq(0).find('a').attr('href');

  if (firstMenuHref && firstMenuHref.charAt(0) === '#') {
    $(firstMenuHref).siblings('.content').hide();
  }

  $('#menu button').on('click', function() {
    var href = $(this).find('a').attr('href');

    if (href && href.charAt(0) === '#' && $(href).length) {
      $(href).show().siblings('.content').hide();

      $(this)
        .addClass('active')
        .siblings('.active')
        .removeClass('active');
    }
  });


  /* =====================================================
     2. 大 TAB
  ===================================================== */

  if ($.fn.tabdrop) {
    $('.nav-pills, .pull-right').tabdrop();
  }


  /* =====================================================
     3. VOLG 頁面 TAB
     修正重點：
     - 只處理有對應內容區塊的內部錨點
     - 外部網址不會被誤判成 TAB
     - 避免 href 不存在造成錯誤
  ===================================================== */

  var $btn = $('.VOLG-tab button.tablinksd');

  function getTabPanel($button) {
    var href = $button.find('a').attr('href');

    if (!href || href.charAt(0) !== '#') {
      return $();
    }

    var $panel = $(href);

    if (!$panel.length) {
      return $();
    }

    return $panel;
  }

  // 只隱藏第一個具有有效內容區塊的 TAB 之其他內容
  var $firstValidTab = $btn.filter(function() {
    return getTabPanel($(this)).length > 0;
  }).eq(0);

  if ($firstValidTab.length) {
    getTabPanel($firstValidTab)
      .siblings('.tab_inner')
      .hide();
  }

  // TAB 點擊事件
  $btn.on('click', function(event) {
    var $this = $(this);
    var $panel = getTabPanel($this);

    // 沒有對應的內部內容區塊，就不執行 TAB 切換
    // 讓一般外部連結維持原本的連結行為
    if (!$panel.length) {
      return;
    }

    event.preventDefault();

    $panel
      .show()
      .siblings('.tab_inner')
      .hide();

    $this
      .addClass('active')
      .siblings('.active')
      .removeClass('active');
  });


  /* =====================================================
     4. TAB 導覽
  ===================================================== */

  var $li = $('.first li');

  $('.first').each(function() {
    var $firstLi = $(this).find('li:eq(0)');

    $firstLi.addClass('active');

    var href = $firstLi.find('a').attr('href');

    if (href && href.charAt(0) === '#' && $(href).length) {
      $(href).siblings('.ul_inner').hide();
    }
  });

  $li.on('click', function() {
    var href = $(this).find('a').attr('href');

    if (!href || href.charAt(0) !== '#' || !$(href).length) {
      return;
    }

    $(href)
      .show()
      .siblings('.ul_inner')
      .hide();

    $(this)
      .addClass('active')
      .siblings('.active')
      .removeClass('active');
  });


  /* =====================================================
     5. 禁止 dropdown 點擊關閉
  ===================================================== */

  $('.list').on('click', function(event) {
    event.stopPropagation();
  });


  /* =====================================================
     6. Checkbox
  ===================================================== */

  $('.list .ul_inner label input').on('click', function() {

    if ($(this).prop('checked')) {
      $(this)
        .closest('.ul_inner')
        .siblings()
        .not('.third_list')
        .find('label input:checkbox')
        .prop('checked', false);
    }

  });


  /* =====================================================
     7. 全選
  ===================================================== */

  $('.ul_inner label .all').on('click', function() {

    if (this.checked === true) {

      $("label .individual:not('.third_list .individual')")
        .prop('checked', true);

      $(this)
        .closest('.ul_inner')
        .siblings()
        .not('.third_list')
        .find('label input:checkbox')
        .prop('checked', false);

    } else {

      $("label .individual:not('.third_list .individual')")
        .prop('checked', false);

    }

  });


  /* =====================================================
     8. 第三層全選
  ===================================================== */

  $('.third_list label .all').on('click', function() {

    if (this.checked === true) {

      $("label .individual:not('.ul_inner .individual')")
        .prop('checked', true);

    } else {

      $("label .individual:not('.ul_inner .individual')")
        .prop('checked', false);

    }

  });


  /* =====================================================
     9. 個別 Checkbox
  ===================================================== */

  $('label .individual').on('click', function() {

    $(this)
      .closest('label')
      .siblings()
      .find('.all:checkbox')
      .prop('checked', false);

    if ($(this).prop('checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }

  });


  /* =====================================================
     10. 最新文章輪播
  ===================================================== */

  if ($.fn.owlCarousel && $('.volg-owl').length) {

    $('.volg-owl').owlCarousel({
      nav: false,
      responsiveClass: true,
      loop: true,
      dots: true,
      autoplay: true,
      margin: 20,
      autoplayTimeout: 5000,
      autoplaySpeed: 800,
      smartSpeed: 800,
      autoplayHoverPause: true,

      responsive: {
        0: {
          items: 1
        }
      }
    });

  }


  /* =====================================================
     11. 匠玩 Podcast 輪播
  ===================================================== */

  if ($.fn.owlCarousel && $('.e_down_box').length) {

    $('.e_down_box').owlCarousel({
      nav: false,
      loop: true,
      margin: 20,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,

      responsive: {
        0: {
          items: 1,
          dots: true,
          autoplay: true
        },

        500: {
          items: 2,
          dots: true,
          autoplay: true
        },

        768: {
          items: 3,
          dots: true,
          autoplay: true
        },

        1024: {
          items: 4,
          dots: false,
          autoplay: false
        }
      }
    });

  }


  /* =====================================================
     12. stop_top
     修正重點：
     - 停止頁面捲動動畫
     - 不阻止有實際網址的外部連結開啟
  ===================================================== */

  $('.stop_top').on('click', function(event) {

    var href = $(this).find('a').attr('href');

    $('html, body').stop();

    // 只有沒有網址或單純 # 的連結才阻止預設行為
    if (!href || href === '#') {
      event.preventDefault();
    }

  });


  /* =====================================================
     13. TAB_E 輪播
  ===================================================== */

  if ($.fn.owlCarousel && $('.tab_e').length) {

    $('.tab_e').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      items: 1
    });

  }

});


/* =========================================================
   14. OverlayScrollbars
   延後初始化，避免刷新前寬度錯誤
========================================================= */

$(window).on('load', function() {

  if (!$.fn.overlayScrollbars || !$('.VOLG-tab').length) {
    return;
  }

  setTimeout(function() {

    $('.VOLG-tab').overlayScrollbars({
      className: 'os-theme-thin-dark'
    });

  }, 200);

});
