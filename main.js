$(document).ready(function() {
    if ($(window).width() <= 500) {
        $('.mission-box').css({'width':'80%'});
        console.log('test');
    } else {
        $('.mission-box').css({'width':'40%'});
    } 
    $(window).resize(function() {
        if ($(window).width() <= 500) {
            $('.mission-box').css({'width':'80%'});
            console.log('test');
        } else {
            $('.mission-box').css({'width':'40%'});
        }
    });
});

$(document).scroll(function() {
    var topDist = $
});
