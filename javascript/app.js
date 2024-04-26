jQuery(function($) {
    const $header = $('.header');
    $(window).scroll(function(event) {
        const $current = $(this).scrollTop();
        if ($current > 100) {
            $header.addClass('header-color');
        } else {
            $header.removeClass('header-color');
        }
    });
});