$(document).ready(function() {
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });
});

$('.mobile-menu').on("click", function() {
    $('body').toggleClass('show-menu');

})