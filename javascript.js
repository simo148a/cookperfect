//$(document).ready(function () {
//    $(window).scroll(function () {
//        $('.fadeinleft').each(function (i) {
//
//            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//            if (bottom_of_window > bottom_of_element) {
//                $(this).animate({
//                    'opacity': '1',
//                    'margin-left': '0px'
//                }, 1000);
//            }
//
//        });
//    });
//});

//$(function () { // $(document).ready shorthand
//    $('.monster').fadeIn('slow');
//});

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.fadeinleft').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1',
                    'left': '0'
                }, 1500);

            }

        });

    });

});

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.fadeinright').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1',
                    'left': '0'
                }, 1000);

            }

        });

    });

});
