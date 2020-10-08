const videoSwiper = document.querySelector('.videoSwiper-container');


let videoSwiper1 = new Swiper(videoSwiper, {
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

const photoSwiper = document.querySelector('.photoSwiper-container');

let photoSwiper1 = new Swiper(photoSwiper, {
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 3,
        },
        860: {
            slidesPerView: 6,
            spaceBetween: 34,
        }
    }
});