$(document).ready(function(){
    $('.slick--autoplay').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 2000
    });
});

$(document).ready(function(){
    $('.slick--visual-design').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: true,
        fade: true,
        speed: 1000,
        prevArrow: $(".visual-design-slides__prev"),
        nextArrow: $(".visual-design-slides__next")
    });
});