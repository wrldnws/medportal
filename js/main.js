
function func() {
    $(document).ready(function () {
        var $nav = $(".fix_side");
        var maxWidth = parseInt($(".fix_side").css('width'));
        var $h = $nav.offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > $h) {
                $nav.addClass("fixed");
                $nav.css('max-width', maxWidth);
            } else {
                $nav.removeClass("fixed");
            }
        });

    })

}
setTimeout(func, 1000);

$(document).ready(function (e) {

    $('.count-list').countdown({
        until: '+0d +0h 15m ',
        format: 'HMS',
        compact: true,
        layout: '<li>' +
        '<span class="digit">{h10}</span>' +
        '<span class="digit">{h1}</span>' +
        '</li>' +
        '<li>' +
        '<span class="digit">{m10}</span>' +
        '<span class="digit">{m1}</span>' +
        '</li>' +
        '<li>' +
        '<span class="digit">{s10}</span>' +
        '<span class="digit">{s1}</span>' +
        '</li>'
    }).removeClass('hidden');

});