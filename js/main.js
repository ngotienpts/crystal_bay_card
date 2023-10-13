document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // header
    var header = document.querySelector(".js__header");

    // slice
    var oneSlidesFade = document.querySelectorAll(
        ".js__swiperItemsContainerFade"
    );
    var oneSlides = document.querySelectorAll(".js__swiperItemsContainer");
    var threeSlides = document.querySelectorAll(
        ".js__swiperThreeItemsContainer"
    );

    // show des full
    var showDesFulls = document.querySelectorAll(".js__desShowFull");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            if (backTop) {
                backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                };
            }

            // show des full
            if (showDesFulls) {
                showDesFulls.forEach((showDesFull) => {
                    var fullText =
                        showDesFull.querySelector(".js__removeFixtext");
                    var moreIcon = showDesFull.querySelector(".js__moreFull");

                    moreIcon.onclick = function () {
                        console.log(123);
                        fullText.classList.toggle("full");
                        this.classList.toggle("full");
                    };
                });
            }
        },
        // slider one item
        sliderOneItems: function () {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    effect: "fade",
                    loop: true,
                    fadeEffect: {
                        crossFade: true,
                    },
                    allowTouchMove: false,
                    allowSlideClick: false,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });
            });
        },
        // slider one item fade
        sliderOneItemsFade: function () {
            oneSlidesFade.forEach((item) => {
                var pagi = item.querySelector(".swiper-pagination");
                var slider = item.querySelector(".js__swiperOneItemsFade");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    effect: "fade",
                    allowTouchMove: false,
                    allowSlideClick: false,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: pagi,
                        clickable: false,
                    },
                });

                var activeCount = item.querySelector(".js__counterActive");
                var totalCount = item.querySelector(".js__counterTotal");

                updateSlideInfo(mySwiper, activeCount, totalCount);

                mySwiper.on("slideChange", function () {
                    updateSlideInfo(mySwiper, activeCount, totalCount);
                });
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                var totalSlides = swiper.slides.length;
                var activeSlideIndex = swiper.activeIndex;

                activeCount.textContent = "0" + (activeSlideIndex + 1);
                totalCount.textContent = "0" + totalSlides;
            }
        },
        // slider three item
        sliderThreeItems: function () {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    autoHeight: true,

                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    },
                });
            });
        },
        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;

            if (backTop) {
                const backTopVisible = scrollY > 300;
                backTop.style.opacity = backTopVisible ? 1 : 0;
                backTop.style.visibility = backTopVisible
                    ? "visible"
                    : "hidden";
            }

            if (header) {
                const isSticky = scrollY > 50;
                if (isSticky !== this.isSticky) {
                    header.classList.toggle("sticky", isSticky);
                    this.isSticky = isSticky;
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },
        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // window scroll
            this.windowScroll();
            // slider one item
            this.sliderOneItems();
            // one slide fade
            this.sliderOneItemsFade();
            // slider three item
            this.sliderThreeItems();
        },
    };

    app.start();
});
