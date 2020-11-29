$(document).ready(function(){
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__rightSide,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('html').toggleClass('lock');
    });
});

    const inputFile = document.querySelectorAll('.sendDocs-popup__input-file');

    /////////// Кнопка «Прикрепить файл» ///////////
    inputFile.forEach(function(el) {
        let textSelector = document.querySelector('.sendDocs-popup__input-file-button-text');
        let fileList;

        // Событие выбора файла(ов)
        el.addEventListener('change', function (e) {

            // создаём массив файлов
            fileList = [];
            for (let i = 0; i < el.files.length; i++) {
                fileList.push(el.files[i]);
            }

            // вызов функции для каждого файла
            fileList.forEach(file => {
                uploadFile(file);
            });
        });

        // Проверяем размер файлов и выводим название
        const uploadFile = (file) => {

            // файла <5 Мб
            if (file.size > 5 * 1024 * 1024) {
                alert('Файл должен быть не более 5 МБ.');
                return;
            }

            // Показ загружаемых файлов
            if (file && file.length > 1) {
                if ( file.length <= 4 ) {
                    textSelector.textContent = `Выбрано ${file.length} файла`;
                }
                if ( file.length > 4 ) {
                    textSelector.textContent = `Выбрано ${file.length} файлов`;
                }
            } else {
                textSelector.textContent = file.name;
            }
        }

    });




let ourWorks__menuItem = document.querySelectorAll('.ourWorks__menuItem');
let ourWorks__example = document.querySelectorAll('.ourWorks__example');

for (let i = 0; i < ourWorks__menuItem.length; i++) {
    ourWorks__menuItem[i].addEventListener('click', function () {
        if (!(this.classList.contains('active'))) {
            for (let i = 0; i < ourWorks__menuItem.length; i++) {
                ourWorks__menuItem[i].classList.remove('active');
                ourWorks__example[i].classList.remove('active');
            }
        }
        this.classList.add('active');
        ourWorks__example[i].classList.add('active');
    });
}

if (document.documentElement.clientWidth <= 950) {
    ourWorks__menuItem.forEach((el) => el.classList.toggle('popup-link'))
}



const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');
const body = document.querySelector('body');
const html = document.querySelector('html');

let unlock = true;

const timeout = 100;

if (popupLinks.length > 0 ) {
    popupLinks.forEach((el) => {
       el.addEventListener('click', function (e) {
           const popupName = el.getAttribute('href').replace('#','');
           const currentPopup = document.getElementById(popupName);
           popupOpen(currentPopup);
           e.preventDefault();
           console.log('2')
       })
    });
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    popupCloseIcon.forEach((el) => {
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    })
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive,false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'))
            }
        })
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        lockPadding.forEach((el) => {
            el.style.paddingRight = lockPaddingValue
        })
    }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');
        html.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        },timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0 ) {
        lockPadding.forEach((el) => {
            el.style.paddingRight = '0px';
        })
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
        html.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
       const popupActive = document.querySelector('.popup.open');
       popupClose(popupActive)
   }
});

let physicButton = document.getElementById('physicButton');
let juristicButton = document.getElementById('juristicButton');
let switchLine = document.getElementById('switchLine');
let juristicItem = document.querySelectorAll('.juristicItem');
let physicItem = document.querySelectorAll('.physicItem');

physicButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        juristicButton.classList.remove('active');
        juristicItem.forEach(el => el.classList.remove('active'));
        switchLine.classList.remove('juristic');
        this.classList.add('active');
        physicItem.forEach(el => el.classList.add('active'));
        switchLine.classList.add('physic')
    }
});

juristicButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        physicButton.classList.remove('active');
        physicItem.forEach(el => el.classList.remove('active'));
        switchLine.classList.remove('physic');
        this.classList.add('active');
        juristicItem.forEach(el => el.classList.add('active'));
        switchLine.classList.add('juristic')
    }
});

let photoButton = document.getElementById('photoButton');
let videoButton = document.getElementById('videoButton');
let videoSliderCard = document.querySelectorAll('.videoSliderCard')
let photoSliderCard = document.querySelectorAll('.photoSliderCard')
let ourReviews__switchLine = document.getElementById('ourReviews__switchLine');
let swiperButtonNextPhoto = document.getElementById('swiper-button-next-photo');
let swiperButtonPrevPhoto = document.getElementById('swiper-button-prev-photo');
let swiperButtonNextVideo = document.getElementById('swiper-button-next-video');
let swiperButtonPrevVideo = document.getElementById('swiper-button-prev-video');

photoButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        videoButton.classList.remove('active');
        videoSliderCard.forEach(el => el.classList.remove('active'));
        ourReviews__switchLine.classList.remove('video');
        swiperButtonNextVideo.classList.remove('active');
        swiperButtonPrevVideo.classList.remove('active');
        this.classList.add('active');
        photoSliderCard.forEach(el => el.classList.add('active'));
        ourReviews__switchLine.classList.add('photo');
        swiperButtonNextPhoto.classList.add('active');
        swiperButtonPrevPhoto.classList.add('active');
    }
});

videoButton.addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
        photoButton.classList.remove('active');
        photoSliderCard.forEach(el => el.classList.remove('active'));
        ourReviews__switchLine.classList.remove('photo');
        swiperButtonNextPhoto.classList.remove('active');
        swiperButtonPrevPhoto.classList.remove('active');
        this.classList.add('active');
        videoSliderCard.forEach(el => el.classList.add('active'));
        ourReviews__switchLine.classList.add('video');
        swiperButtonNextVideo.classList.add('active');
        swiperButtonPrevVideo.classList.add('active');
    }
});



