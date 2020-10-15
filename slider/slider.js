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
            spaceBetween: 20
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

const ourCasesPhysicSwiper = document.querySelector('.ourCases__swiper-physicContainer');

let ourCasesPhysicSwiper1 = new Swiper(ourCasesPhysicSwiper, {
    loop: true,
    navigation: {
        nextEl:'.ourCases__swiper-button-next',
        prevEl:'.ourCases__swiper-button-prev',
    },


    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        940: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

const ourCasesJuristicSwiper = document.querySelector('.ourCases__swiper-juristicContainer');

let ourCasesJuristicSwiper1 = new Swiper(ourCasesJuristicSwiper, {
    loop: true,
    navigation: {
        nextEl:'.ourCases__swiper-button-next',
        prevEl:'.ourCases__swiper-button-prev',
    },


    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        940: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});
$("#physicButton").on("click",function(){
    setTimeout(function () {
        ourCasesPhysicSwiper1.update();
    }, 1);
});
$("#juristicButton").on("click",function(){
    setTimeout(function () {
        ourCasesJuristicSwiper1.update();
    }, 1);
});