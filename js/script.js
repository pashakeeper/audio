$(function () {
    let wd = $(window).width();
    // Add image
    $('.has_submenu').each(function () {
        if ($(this).find('.sub_menu').length > 0) {
            $(this).append('<img class="submenu_icon" src="../img/arrow.svg" alt="Submenu Icon">');
        }
    });
    // Burger 
    $('.burger').click(function (e) {
        e.preventDefault();
        if ($(this).is('.active')) {
            $(this).removeClass('active');
            $('.menu_box').removeClass('visible');
        }
        else {
            $(this).addClass('active');
            $('.menu_box').addClass('visible');
        }
    });
    // Like
    $('.top_slide__head__image_holder__like').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
    });
    // first slider
    $('.top_slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        speed: 1000,
        prevArrow: '<img src="img/slider_arrow.svg" class="prev_arrow" alt="">',
        nextArrow: '<img src="img/slider_arrow.svg" class="next_arrow" alt="">',
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: "unslick"
            },
        ]
    });

    // recommend slider 
    $('.recommend_slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        speed: 1000,
        prevArrow: '<img src="img/slider_arrow.svg" class="prev_arrow_second" alt="">',
        nextArrow: '<img src="img/slider_arrow.svg" class="next_arrow_second" alt="">',
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: "unslick"
            },
        ]
    });

    // To top
    let btn = $('.to_top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    });
    btn.click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '100');
    });
    if (wd < 991) {
        var content = $('.content');
        var button = $('.read_more');
        var maxLength = 220;
        var fullHTML = content.html();
        var trimmedHTML = $.trim(fullHTML).substring(0, maxLength);
        content.html(trimmedHTML + '...');
        var isFullHTMLVisible = false;
        function toggleHTML() {
            if (isFullHTMLVisible) {
                content.fadeOut(400, function () {
                    content.html(trimmedHTML + '...').fadeIn(300);
                });
                button.html('Читати більше <img src="img/ArrowUpRight.svg" alt="">');
            } else {
                content.fadeOut(400, function () {
                    content.html(fullHTML).fadeIn(300);
                });
                button.html('Читати менше <img src="img/ArrowUpRight.svg" alt="">');
            }

            isFullHTMLVisible = !isFullHTMLVisible;
        }
        button.on('click', toggleHTML);
    }
});