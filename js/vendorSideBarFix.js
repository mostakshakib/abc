// Vendor side menu fix 
var bestselloffset = $('.shop_sidebar').offset().top;

$(window).on('scroll', function () {
    var bestSellFix = $(this).scrollTop();

    if (bestSellFix > bestselloffset) {
        $('.shop_sidebar').addClass('best_selling_collapse_fix');
    } else {
        $('.shop_sidebar').removeClass('best_selling_collapse_fix');
    }
});