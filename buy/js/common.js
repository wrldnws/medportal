var _beforeAfter = function () {
    document.querySelectorAll('.cocoen').forEach(function (element) {
        new Cocoen(element);
    });
};
function countup(className){
    var countBlockTop = $("."+className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll( function (){
        if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){
            show = false;

            $('.'+className).spincrement({
                from: 0,
                duration: 3000,
            });
        }
    })
};
$(function() {
    $('.pre_toform').click(function () {
        $("html, body").animate({scrollTop: $('#order_form').offset().top - 200}, 1000);
        return false;
    });
    $("a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });

    _beforeAfter();

    $('#comments-slider').slick({
        adaptiveHeight: true,
        fade: true,
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    countup("count", $(".count").text());
    countup("count2", $(".count2").text());
    countup("count3", $(".count3").text());
    countup("count4", $(".count4").text());
});
