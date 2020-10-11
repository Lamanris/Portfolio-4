const videoSwiper = document.querySelector('.videoSwiper-container');


let videoSwiper1 = new Swiper(videoSwiper, {
    loop: true,
    navigation: {
        nextEl:'.swiper-button-next-video',
        prevEl:'.swiper-button-prev-video',
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
    navigation: {
        nextEl:'.swiper-button-next-photo',
        prevEl:'.swiper-button-prev-photo',
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1020: {
            slidesPerView: 6,
            spaceBetween: 34,
        }
    }
});
$("#photoButton").on("click",function(){
    setTimeout(function () {
        photoSwiper1.update();
    }, 1);
});
$("#videoButton").on("click",function(){
    setTimeout(function () {
        videoSwiper1.update();
    }, 1);
});
