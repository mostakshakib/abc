$(function () {
    'use strict';

    // Nav Fix
    var navoffset = $('#main_nav').offset().top;

    $(window).on('scroll', function () {
        var nav = $(this).scrollTop();
        if (nav > navoffset) {
            $('#main_nav').addClass('fixed_nav');
        } else {
            $('#main_nav').removeClass('fixed_nav');
        }
    });

    // Banner slider js
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // CounDown js start
    $('.counDown').countdown('2025/01/01', function (event) {
        $(this).html(event.strftime('%d days %H:%M:%S'));
    });

    // Increment Decrement start
    $('#handleCounter').handleCounter({
        minimum: 1,
        maximize: null,
    })

    // Product Right slider slider js
    $('.pd_right_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prev_p"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_p"></i>',
        dots: false,
        fade: true,
    });

    // Logo Slider slider js
    $('.logo_slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });

    // Shop Category slider js
    $('.shop_category_slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });

    // Shop CounDown js start
    $('.item_countdown_days').countdown('2021/10/01', function (event) {
        $(this).html(event.strftime('%d'));
    });
    $('.item_countdown_hours').countdown('2021/10/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.item_countdown_mins').countdown('2021/10/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('.item_countdown_secs').countdown('2021/10/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    // Calender

    $(function () {
        $('#wrapper .version strong').text('v' + $.fn.pignoseCalendar.version);

        function onSelectHandler(date, context) {
            /**
             * @date is an array which be included dates(clicked date at first index)
             * @context is an object which stored calendar interal data.
             * @context.calendar is a root element reference.
             * @context.calendar is a calendar element reference.
             * @context.storage.activeDates is all toggled data, If you use toggle type calendar.
             * @context.storage.events is all events associated to this date
             */

            var $element = context.element;
            var $calendar = context.calendar;
            var $box = $element.siblings('.box').show();
            var text = 'You selected date ';

            if (date[0] !== null) {
                text += date[0].format('YYYY-MM-DD');
            }

            if (date[0] !== null && date[1] !== null) {
                text += ' ~ ';
            } else if (date[0] === null && date[1] == null) {
                text += 'nothing';
            }

            if (date[1] !== null) {
                text += date[1].format('YYYY-MM-DD');
            }

            $box.text(text);
        }



        // Blog Calendar
        $('.blog_calender').pignoseCalendar({
            select: onSelectHandler
        });

    });

    // Blog Post slider js
    $('.post_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prev_post"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_post"></i>',
        dots: false,
        fade: true,
    });

    // Zoom slider
    var myCarousel = document.querySelector('#carouselExampleIndicators')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: false,
        wrap: false,
    });

    // Popup

    $('.pop_close').on('click', function () {
        $('.pop_up').fadeOut();
    });

    // PreLoader

    $(window).on('load', function () {
        $('.pre_loader').delay(500).fadeOut();
    });

    // CounterUP

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});