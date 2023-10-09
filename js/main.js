document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // header
    var header = document.querySelector(".js__header");

    // slice
    // var oneSlides = document.querySelectorAll(".js__swiperItemsContainer");
    // var fiveSlides = document.querySelectorAll(".js__swiperFiveItemsContainer");

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
        },
        // slider one item
        // sliderOneItems: function () {
        //     oneSlides.forEach((item) => {
        //         var pagi = item.querySelector(".swiper-pagination");
        //         var slider = item.querySelector(".js__swiperItems");
        //         new Swiper(slider, {
        //             slidesPerView: 1,
        //             spaceBetween: 30,
        //             slidesPerGroup: 1,
        //             autoHeight: true,
        //             effect: "fade",
        //             pagination: {
        //                 el: pagi,
        //                 clickable: true,
        //             },
        //         });
        //     });
        // },
        // slider five item
        // sliderFiveItems: function () {
        //     fiveSlides.forEach((item) => {
        //         var pagi = item.querySelector(".swiper-pagination");
        //         var slider = item.querySelector(".js__swiperItems");
        //         new Swiper(slider, {
        //             slidesPerView: 1.5,
        //             spaceBetween: 20,
        //             slidesPerGroup: 1,
        //             autoHeight: true,
        //             pagination: {
        //                 el: pagi,
        //                 clickable: true,
        //             },
        //             breakpoints: {
        //                 640: {
        //                     slidesPerView: 2,
        //                 },
        //                 768: {
        //                     slidesPerView: 2,
        //                 },
        //                 1024: {
        //                     slidesPerView: 4,
        //                 },
        //                 1200: {
        //                     slidesPerView: 5,
        //                 },
        //             },
        //         });
        //     });
        // },
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
        },
    };

    app.start();
});
