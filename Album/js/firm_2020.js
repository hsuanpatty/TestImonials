$(document).ready(function () {
    // 網頁go top
    $("#gotop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

    // banner-slider
    $('#banner-owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeInRight',
        items: 1,
        nav: false,
        responsiveClass: true,
        loop: true,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true
    });

    // flatpickr設定(日曆選單)
    $(function () {
        /*declaring return datepicker*/
        var FLATPICKER_BACK = flatpickr('#flatpickrBack', {
            disableMobile: true,
            //   defaultDate: "today"
        });
        /*declaring outbound datepicker*/
        $("#flatpickrGo").flatpickr({
            minDate: "today",
            disableMobile: true,
            // defaultDate: "today",
            /* setting initial date of return picker to the one selected in 
            outbound*/
            onChange: function (dateStr, dateObj) {
                FLATPICKER_BACK.set("minDate", dateObj);
                FLATPICKER_BACK.setDate(dateObj);
            }
        });
    });


    // FirmMember {
    $('#FirmMember-owl-carousel').owlCarousel({
        nav: true,
        responsiveClass: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        margin: 20,
        smartSpeed: 450,
        dots: true,
        navText: ["<img src='images/member/20_back.png'>", "<img src='images/member/20_next.png'>"],
        responsive: {
            0: {
                // items: 1
                items: 2
            },
            768: {
                // items: 3
                items: 4
            },
            1024: {
                // items: 4
                items: 6
            }

        }
    });
    // FirmCooperation {
    $('#FirmCooperation-owl-carousel').owlCarousel({
        nav: true,
        responsiveClass: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        margin: 20,
        smartSpeed: 450,
        dots: false,
        paginationNumbers:true,
        navText: ["<img src='images/member/20_back.png'>", "<img src='images/member/20_next.png'>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1024: {
                items: 6
            }

        }
    });

});
