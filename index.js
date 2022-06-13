$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $("#header").height();
    var viewPortSize = $(window).height();

    var triggerAt = 14;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('#skills-container').css('visibility', 'visible').hide().fadeIn(2000);
        $(this).off('scroll');
    }
});