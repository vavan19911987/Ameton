window.addEventListener('DOMContentLoaded', function () {
    // "user strict";

    const slider = tns({
        container: '.carousel',
        items: 4,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controls: false,
        speed: 2000,
        responsive: {
            320: {
                nav: true,
                items: 1,

            },
            576: {
                nav: false,
                items: 2,

            },
            768: {
                nav: false,
                items: 2,

            },
            992: {
                nav: false,
                items: 3,

            },
            1200: {
                nav: false,
                items: 4,

            },
           
        }
    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });

});





