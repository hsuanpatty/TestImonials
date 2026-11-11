$(document).ready(function() {

    // 燈箱
    var $a = $('.fancybox a')
    $a.on('click', function() {
        $(this).next('.modal').fadeIn('slow').addClass('show');
    });

    $('.close').on('click', function() {
        $('.modal').fadeOut('fast').removeClass('show');
    });

    $('.modal').on('click', function() {
        $('.modal').fadeOut('fast').removeClass('show');
    });
})