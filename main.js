const $body = $("body");
const $header = $(".page-header");
const scrollClass = "scroll";

$(window).on("scroll", () => {
    if (this.matchMedia("(min-width: 992px)").matches) {
        const scrollY = $(this).scrollTop();
        scrollY > 0
            ? $body.addClass(scrollClass)
            : $body.removeClass(scrollClass);
    } else {
        $body.removeClass(scrollClass);
    }
});

$(".page-header .nav-link .navbar-brand").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 71
    }, 600);
});

var titles = ['ux/ui designer', 'front end web developer', 'product manager'];

var t = setInterval(function() {
    var randomNumber = Math.round(Math.random() * (titles.length-1));
    $('#title').html(titles[randomNumber]);
}, 2000);