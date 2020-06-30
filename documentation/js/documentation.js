jQuery(document).ready(function($) {

	/* ==============================================
    Smooth Scroll
    =============================================== */

    var scrollAnimationTime = 1000,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').bind('click.smoothscroll',function (event) {
        event.preventDefault();

        var target = this.hash;
        var elTarget = $(target).offset().top;

        $('html, body').stop().animate({
            'scrollTop': elTarget
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });

    });

});