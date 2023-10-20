document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // header
    var header = document.querySelector(".js__header");

    // search
    var navbarLeft = document.querySelector(".js__navbarLeft");
    var search = navbarLeft.querySelector(".js__showSearchPc");

    // slice
    var oneSlidesFade = document.querySelectorAll(
        ".js__swiperItemsContainerFade"
    );
    var oneSlides = document.querySelectorAll(".js__swiperItemsContainer");
    var threeSlides = document.querySelectorAll(
        ".js__swiperThreeItemsContainer"
    );
    var threeSlidesSecondary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerSecondary"
    );
    var threeSlidesTertiary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerTertiary"
    );
    var threeSlidesQuaternary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerQuaternary"
    );
    var threeSlidesQuinary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerQuinary"
    );

    // show des full
    var showDesFulls = document.querySelectorAll(".js__desShowFull");

    // change tab
    var changeTabs = document.querySelectorAll(".js__changeTab");

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

            // search
            if (search) {
                search.onclick = function () {
                    navbarLeft.classList.add("active");
                };
            }

            // show des full
            if (showDesFulls) {
                showDesFulls.forEach((showDesFull) => {
                    var fullText =
                        showDesFull.querySelector(".js__removeFixtext");
                    var moreIcon = showDesFull.querySelector(".js__moreFull");

                    moreIcon.onclick = function () {
                        fullText.classList.toggle("full");
                        this.classList.toggle("full");
                    };
                });
            }

            if (changeTabs) {
                changeTabs.forEach((changeTab) => {
                    var tabs = changeTab.querySelectorAll(".js__tab");
                    var panes = changeTab.querySelectorAll(".js__pane");

                    if (tabs && panes) {
                        tabs.forEach((tab, index) => {
                            var pane = panes[index];
                            tab.onclick = function () {
                                tab.parentElement
                                    .querySelector(".js__tab.active")
                                    .classList.remove("active");
                                pane.parentElement
                                    .querySelector(".js__pane.active")
                                    .classList.remove("active");

                                this.classList.add("active");
                                pane.classList.add("active");
                            };
                        });
                    }
                });
            }

            // hide cac element khi click ra ngoai
            document.addEventListener("click", function (e) {
                if (search) {
                    if (
                        !search.contains(e.target) &&
                        !e.target.matches(".js__showSearchPc")
                    ) {
                        navbarLeft.classList.remove("active");
                    }
                }
            });
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

                const activeCount = item.querySelector(".js__counterActive");
                const totalCount = item.querySelector(".js__counterTotal");

                updateSlideInfo(mySwiper, activeCount, totalCount);

                mySwiper.on("slideChange", function () {
                    updateSlideInfo(mySwiper, activeCount, totalCount);
                });
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                const totalSlides = swiper.slides.length;
                const activeSlideIndex = swiper.activeIndex;

                activeCount.textContent = "0" + (activeSlideIndex + 1);
                totalCount.textContent = "0" + totalSlides;
            }
        },
        // slider three item
        sliderThreeItems: function () {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    loop: true,
                    autoHeight: true,
                    allowTouchMove: false,
                    allowSlideClick: false,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev || null,
                    },
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

                const activeCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterActive"
                    );
                const totalCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterTotal"
                    );

                updateSlideInfo(mySwiper, activeCount, totalCount);

                mySwiper.on("slideChange", function () {
                    updateSlideInfo(mySwiper, activeCount, totalCount);
                });
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                const totalSlides = swiper.slides.length / 2 - 1;
                let activeSlideIndex = swiper.realIndex;

                if (swiper.params.loop) {
                    activeSlideIndex =
                        (activeSlideIndex + totalSlides) % totalSlides;
                }
                if (activeCount) {
                    activeCount.textContent = String(
                        activeSlideIndex + 1
                    ).padStart(2, "0");
                }

                if (totalCount) {
                    totalCount.textContent = String(totalSlides).padStart(
                        2,
                        "0"
                    );
                }
            }
        },
        // slider three secondary item
        sliderThreeItemsSecondary: function () {
            threeSlidesSecondary.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 1.5,
                    // spaceBetween: 20,
                    slidesPerGroup: 1,
                    loop: true,
                    autoHeight: true,
                    allowTouchMove: false,
                    allowSlideClick: false,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
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
                const activeCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterActive"
                    );
                const totalCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterTotal"
                    );

                updateSlideInfo(mySwiper, activeCount, totalCount);

                mySwiper.on("slideChange", function () {
                    updateSlideInfo(mySwiper, activeCount, totalCount);
                });
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                const totalSlides = swiper.slides.length / 2 - 1;
                let activeSlideIndex = swiper.realIndex;

                if (swiper.params.loop) {
                    activeSlideIndex =
                        (activeSlideIndex + totalSlides) % totalSlides;
                }

                activeCount.textContent = String(activeSlideIndex + 1).padStart(
                    2,
                    "0"
                );
                totalCount.textContent = String(totalSlides).padStart(2, "0");
            }
        },
        // slider three tertiary item
        sliderThreeItemsTertiary: function () {
            threeSlidesTertiary.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 3,
                    // spaceBetween: 20,
                    slidesPerGroup: 1,
                    loop: true,
                    autoHeight: true,
                    allowTouchMove: false,
                    allowSlideClick: false,
                    // autoplay: {
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    pagination: {
                        el: pagi,
                        type: "fraction",
                    },
                });
            });
        },
        // slider three quaternary item
        sliderThreeItemsQuaternary: function () {
            threeSlidesQuaternary.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    grabCursor: false,
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 0,
                    effect: "coverflow",
                    freeMode: false,
                    coverflowEffect: {
                        rotate: 20,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    },
                    loop: true,
                    // autoplay: {
                    //     delay: 2000,
                    //     disableOnInteraction: false,
                    // },
                    mousewheel: true,
                    keyboard: true,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
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
                const activeCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterActive"
                    );
                const totalCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterTotal"
                    );
                const setText = item.parentElement.parentElement.querySelector(
                    ".js__setTextSeptenary"
                );

                updateSlideInfo(mySwiper, activeCount, totalCount, setText);

                mySwiper.on("slideChange", function () {
                    updateSlideInfo(mySwiper, activeCount, totalCount, setText);
                });
            });
            function updateSlideInfo(swiper, activeCount, totalCount, setText) {
                const totalSlides = swiper.slides.length - 6;

                let activeSlideIndex = swiper.realIndex;

                // console.log(activeSlideIndex);
                // console.log(totalSlides);

                const activeSlide = swiper.slides[swiper.activeIndex];

                if (activeSlide !== undefined) {
                    var elementToGetText = activeSlide.querySelector(
                        ".js__getTextSeptenary"
                    );
                    setText.innerHTML = elementToGetText.innerHTML;
                }

                if (swiper.params.loop) {
                    activeSlideIndex =
                        (activeSlideIndex + totalSlides) % totalSlides;
                }

                activeCount.textContent = String(activeSlideIndex + 1).padStart(
                    2,
                    "0"
                );
                totalCount.textContent = String(totalSlides).padStart(2, "0");
            }
        },
        // slider three quinary item
        sliderThreeItemsQuinary: function () {
            threeSlidesQuinary.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    loop: true,
                    spaceBetween: 40,

                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });

                const activeCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterActive"
                    );
                const totalCount =
                    item.parentElement.parentElement.querySelector(
                        ".js__counterTotal"
                    );

                updateSlideInfo(mySwiper, activeCount, totalCount);

                mySwiper.on("slideChange", function () {
                    updateSlideInfo(mySwiper, activeCount, totalCount);
                });
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                const totalSlides = swiper.slides.length / 2 - 1;
                let activeSlideIndex = swiper.realIndex;

                if (swiper.params.loop) {
                    activeSlideIndex =
                        (activeSlideIndex + totalSlides) % totalSlides;
                }
                if (activeCount) {
                    activeCount.textContent = String(
                        activeSlideIndex + 1
                    ).padStart(2, "0");
                }

                if (totalCount) {
                    totalCount.textContent = String(totalSlides).padStart(
                        2,
                        "0"
                    );
                }
            }
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
            // slider three secondary item
            this.sliderThreeItemsSecondary();
            // slider three tertiary item
            this.sliderThreeItemsTertiary();
            // slider three quaternary item
            this.sliderThreeItemsQuaternary();
            // slider three quinary item
            this.sliderThreeItemsQuinary();
        },
    };

    app.start();
});
