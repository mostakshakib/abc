    // blog side menu fix 
    var blogoffset = $('.blog_body_right').offset().top;

    $(window).on('scroll', function () {
        var blog_right = $(this).scrollTop();
        if (blog_right > blogoffset) {
            $('.blog_body_right').addClass('blog_body_right_fix');
        } else {
            $('.blog_body_right').removeClass('blog_body_right_fix');
        }
    });