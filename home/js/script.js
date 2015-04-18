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
    // $('#menu').sticky({topSpacing:0});
    console.log('hello');
    $('#menu').on('click', '.menuItem', function(evt) {
        // var id = $(evt.target).attr('href');

        var id = $(evt.target).data('target');
        // console.log('event target href =');

        $(id).removeClass('tohide');
        $(id).addClass('toshow');

        // if(id==='#works'){
        //     $(id).css('background-color', '#000');
        // } else {
        //     $(id).css('background-color', 'white');
        // }

        var siblings = $(evt.target).parent().siblings();
        console.log(siblings.length);
        for(var i = 0; i < siblings.length; i++){
            var id2 = $(siblings[i]).find('a').data('target');
            console.log(id2);

            $(id2).addClass('tohide');
            $(id).removeClass('toshow');
        }
        console.log($('.tohide'));
        console.log($('.toshow'));

    });
});
