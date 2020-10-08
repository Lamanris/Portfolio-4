$(document).ready(function(){
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__rightSide').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


let physicWrapper = document.getElementById('servicesBlock__physicWrapper');
let juristicWrapper = document.getElementById('servicesBlock__juristicWrapper');
let physicButton = document.getElementById('physicButton');
let juristicButton = document.getElementById('juristicButton');
let switchLine = document.getElementById('switchLine');

physicButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        juristicButton.classList.remove('active');
        juristicWrapper.classList.remove('active');
        switchLine.classList.remove('juristic');
        this.classList.add('active');
        physicWrapper.classList.add('active');
        switchLine.classList.add('physic')
    }
});

juristicButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        physicButton.classList.remove('active');
        physicWrapper.classList.remove('active');
        switchLine.classList.remove('physic');
        this.classList.add('active');
        juristicWrapper.classList.add('active');
        switchLine.classList.add('juristic')
    }
});

let photoButton = document.getElementById('photoButton');
let videoButton = document.getElementById('videoButton');
let photoSlider = document.getElementById('photo-slider');
let videoSlider = document.getElementById('video-slider');
let ourReviews__switchLine = document.getElementById('ourReviews__switchLine');
let swiperButtonNextPhoto = document.getElementById('swiper-button-next-photo');
let swiperButtonPrevPhoto = document.getElementById('swiper-button-prev-photo');
let swiperButtonNextVideo = document.getElementById('swiper-button-next-video');
let swiperButtonPrevVideo = document.getElementById('swiper-button-prev-video');

photoButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        videoButton.classList.remove('active');
        videoSlider.classList.remove('active');
        ourReviews__switchLine.classList.remove('video');
        swiperButtonNextVideo.classList.remove('active');
        swiperButtonPrevVideo.classList.remove('active');
        this.classList.add('active');
        photoSlider.classList.add('active');
        ourReviews__switchLine.classList.add('photo');
        swiperButtonNextPhoto.classList.add('active');
        swiperButtonPrevPhoto.classList.add('active');
    }
});

videoButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        photoButton.classList.remove('active');
        photoSlider.classList.remove('active');
        ourReviews__switchLine.classList.remove('photo');
        swiperButtonNextPhoto.classList.remove('active');
        swiperButtonPrevPhoto.classList.remove('active');
        this.classList.add('active');
        videoSlider.classList.add('active');
        ourReviews__switchLine.classList.add('video');
        swiperButtonNextVideo.classList.add('active');
        swiperButtonPrevVideo.classList.add('active');
    }
});





