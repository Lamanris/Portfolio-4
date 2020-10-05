const swiper = document.querySelector('.swiper-container');


let mySwiper = new Swiper(swiper, {
    loop: true,
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
        },
        860: {
            slidesPerView: 3,
            spaceBetween: 77,
        }
    }
});