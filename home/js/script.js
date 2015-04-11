$(document).ready(function(){
    $('iframe').fitVids();
    $('.slideshow').slick({
        lazyLoad: 'ondemand',
        dots: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
        // arrows: false,
        // prevArrow: '.prev',
        // nextArrow: '.next'
    });
});
