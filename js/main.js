document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;
    // back top
    var backTop = document.querySelector("#back-top");

    // header
    var header = document.querySelector(".js__header");

    // modal
    var modal = document.querySelector(".js__modal");

    // search
    var navbarLeft = document.querySelector(".js__navbarLeft");
    var search = navbarLeft.querySelector(".js__showSearchPc");

    // sub menu

    var subMenus = document.querySelectorAll(".js__subMenuWrapper");

    // slice
    var oneSlides = document.querySelectorAll(".js__swiperItemsContainer");

    var oneSlidesFade = document.querySelectorAll(
        ".js__swiperItemsContainerFade"
    );

    var twoSlides = document.querySelectorAll(".js__swiperTwoItemsContainer");
    var twoSlidesSecondary = document.querySelectorAll(
        ".js__swiperTwoItemsContainerSecondary"
    );

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

    var threeSlidesSenary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerSenary"
    );
    var threeSlidesOctonary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerOctonary"
    );

    var introOneSlidesFade = document.querySelector(".js__introOneSlidesFade");
    var introTwoSlides = document.querySelector(".js__introTwoSlidesContainer");

    var colectionOneSlidesFade = document.querySelector(
        ".js__swiperItemsColectionContainer"
    );
    var colectionOneSlidesFadeAuto = document.querySelector(
        ".js__swiperItemsColectionAutoContainer"
    );
    // change tab
    var changeTabs = document.querySelectorAll(".js__changeTab");

    // intro page
    // hover map location
    const itemsLocation = document.querySelectorAll(".js__itemLocation");
    const itemsMapLocation = document.querySelectorAll(".js__itemMapLocation");
    const iconChildLocation = document.querySelectorAll(".js__iconChild");
    const backMap = document.querySelector(".js__backMap");
    const mapWrapper = document.querySelector(".js__mapWrapper");

    // cate 1
    const boxMaps = document.querySelectorAll(".js__boxMaps");

    // detail
    const showTableOfContens = document.querySelector(
        ".js__showTableOfContents"
    );

    // upload file
    const uploadFile = document.querySelector(".js__uploadFile");

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

            // modal
            if (modal) {
                var closeModal = modal.querySelector(".js__closeModal");
                closeModal.onclick = function () {
                    if (modal.classList.contains("show")) {
                        modal.classList.remove("show");
                    }
                };
            }

            // search
            if (search) {
                search.onclick = function () {
                    navbarLeft.classList.add("active");
                };
            }

            // sub menu
            if (subMenus) {
                subMenus.forEach((subMenu) => {
                    var showSubMenu = subMenu.querySelector(".js__showSubmenu");
                    var subMenuContent = subMenu.querySelector(
                        ".js__subMenuContent"
                    );
                    var closeSubMenu =
                        subMenu.querySelector(".js__closeSubMenu");
                    var dropdowns =
                        subMenu.querySelectorAll(".js__showDropdown");

                    showSubMenu.onclick = function () {
                        subMenuContent.classList.add("active");
                    };
                    closeSubMenu.onclick = function () {
                        subMenuContent.classList.remove("active");
                    };

                    if (dropdowns) {
                        dropdowns.forEach((dropdown) => {
                            dropdown.onclick = function () {
                                this.classList.toggle("active");
                            };
                        });
                    }
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

                                _this.sliderThreeItemsQuaternary();
                                _this.sliderThreeItemsSenary();
                            };
                        });
                    }
                });
            }

            // hover map location
            itemsLocation.forEach((item, index) => {
                item.addEventListener("mouseenter", () => {
                    _this.handleHoverInItemLocation(index);
                });
            });
            itemsMapLocation.forEach((item, index) => {
                item.addEventListener("mouseenter", () => {
                    _this.handleHoverInItemLocation(index);
                });
                if (windowWidth < 640) {
                    item.addEventListener("click", () => {
                        _this.handleClickItemLocation(index);
                    });
                }
            });
            if (mapWrapper && backMap && windowWidth < 640) {
                backMap.onclick = function () {
                    this.closest(".js__listLocation").style.display = "none";
                    mapWrapper.style.display = "block";
                };
            }

            // cate 1
            if (boxMaps) {
                let activeItem = document.querySelector(
                    ".js__boxMapChildren.active"
                );

                boxMaps.forEach((boxMap) => {
                    const items = boxMap.querySelectorAll(
                        ".js__boxMapChildren"
                    );

                    items.forEach((item) => {
                        item.addEventListener("mouseenter", () => {
                            if (item !== activeItem) {
                                activeItem.classList.remove("active");

                                item.classList.add("active");

                                activeItem = item;
                            }
                        });
                    });
                });
            }

            // muc luc
            if (showTableOfContens) {
                showTableOfContens.onclick = function () {
                    this.parentElement.parentElement.classList.toggle("active");
                };
            }

            // upload file
            if (uploadFile) {
                const text = uploadFile.querySelector(".js__uploadFileText");
                const input = uploadFile.querySelector(".js__uploadFileInput");

                input.onchange = function (e) {
                    var selectedFiles = e.target.files;

                    if (selectedFiles.length > 0) {
                        text.innerText = selectedFiles[0].name;
                    } else {
                        text.innerText = "ĐÍNH KÈM";
                    }
                };
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
                    allowTouchMove: false,
                    allowSlideClick: false,
                    effect: "fade",
                    loop: true,
                    fadeEffect: {
                        crossFade: true,
                    },
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

                slider.addEventListener("click", function (event) {
                    if (event.target.classList.contains("js__moreFull")) {
                        var fullText = event.target
                            .closest(".swiper-slide")
                            .querySelector(".js__removeFixtext");
                        if (fullText) {
                            fullText.classList.toggle("full");
                            event.target.parentElement.classList.toggle("full");
                        }
                    }
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
                        pauseOnMouseEnter: true,
                    },
                    pagination: {
                        el: pagi,
                        clickable: false,
                    },
                });

                const activeCount = item.querySelector(".js__counterActive");
                const totalCount = item.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                const totalSlides = swiper.slides.length;
                const activeSlideIndex = swiper.activeIndex;

                activeCount.textContent = "0" + (activeSlideIndex + 1);
                totalCount.textContent = "0" + totalSlides;
            }
        },
        // slider two item
        sliderTwoItems: function () {
            twoSlides.forEach((item) => {
                var slider = item.querySelector(".js__twoSlides");
                new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    centeredSlides: true,
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                });
            });
        },
        // slider two secondary item
        sliderTwoItemsSecondary: function () {
            twoSlidesSecondary.forEach((item) => {
                var slider = item.querySelector(".js__twoSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoHeight: true,
                    allowTouchMove: true,
                    allowSlideClick: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            centeredSlides: true,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            centeredSlides: true,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                        1200: {
                            slidesPerView: 2,
                            allowTouchMove: false,
                            allowSlideClick: false,
                            spaceBetween: 0,
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
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                let activeSlideIndex = swiper.realIndex + 1;
                let totalSlides = swiper.slides.length - 4;

                // if (swiper.params.loop) {
                //     totalSlides -= 2;

                //     activeSlideIndex =
                //         ((activeSlideIndex % totalSlides) + totalSlides) %
                //         totalSlides;
                //     activeSlideIndex =
                //         activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
                // }

                activeCount.textContent = String(activeSlideIndex).padStart(
                    2,
                    "0"
                );
                totalCount.textContent = String(totalSlides).padStart(2, "0");
            }
        },
        // slider three item
        sliderThreeItems: function () {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    centeredSlides: true,
                    loop: true,
                    autoHeight: true,
                    allowTouchMove: false,
                    allowSlideClick: false,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev || null,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                        768: {
                            slidesPerView: 3,
                            centeredSlides: false,
                        },
                        1024: {
                            slidesPerView: 3,
                            centeredSlides: false,
                        },
                        1200: {
                            slidesPerView: 3,
                            centeredSlides: false,
                        },
                    },
                });

                const activeCount =
                    item.parentElement.parentElement.parentElement.parentElement.querySelector(
                        ".js__counterActive"
                    );
                const totalCount =
                    item.parentElement.parentElement.parentElement.parentElement.querySelector(
                        ".js__counterTotal"
                    );
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
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
                    slidesPerGroup: 1,
                    centeredSlides: true,
                    spaceBetween: 30,
                    loop: true,
                    autoHeight: true,
                    allowTouchMove: true,
                    allowSlideClick: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 3,
                            centeredSlides: true,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 3,
                            centeredSlides: true,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 3,
                            centeredSlides: true,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            allowTouchMove: false,
                            allowSlideClick: false,
                            spaceBetween: 0,
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
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                let activeSlideIndex = swiper.realIndex + 1;
                let totalSlides = swiper.slides.length - 4;

                if (swiper.params.loop) {
                    totalSlides -= 2;

                    // Tính lại chỉ số slide hiện tại nếu sử dụng loop
                    activeSlideIndex =
                        ((activeSlideIndex % totalSlides) + totalSlides) %
                        totalSlides;
                    activeSlideIndex =
                        activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
                }

                activeCount.textContent = String(activeSlideIndex).padStart(
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
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    loop: true,
                    autoHeight: true,
                    allowTouchMove: false,
                    allowSlideClick: false,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });

                const elements = {
                    activeCount: item.querySelector(".js__counterActive"),
                    totalCount: item.querySelector(".js__counterTotal"),
                    imgLarge: item.querySelector(".js__replaceImageLarge"),
                    titleLarge: item.querySelector(".js__replaceTitleLarge"),
                    desLarge: item.querySelector(".js__replaceDesLarge"),
                    imgSmallPrimary: item.querySelector(
                        ".js__replaceImageSmallPrimary"
                    ),
                    titleSmallPrimary: item.querySelector(
                        ".js__replaceTitleSmallPrimary"
                    ),
                    desSmallPrimary: item.querySelector(
                        ".js__replaceDesSmallPrimary"
                    ),
                    imgSmallSecondary: item.querySelector(
                        ".js__replaceImageSmallSecondary"
                    ),
                    titleSmallSecondary: item.querySelector(
                        ".js__replaceTitleSmallSecondary"
                    ),
                    desSmallSecondary: item.querySelector(
                        ".js__replaceDesSmallSecondary"
                    ),
                };
                if (elements) {
                    updateSlideInfo(mySwiper, elements);
                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, elements);
                    });
                }
            });

            function updateSlideInfo(swiper, elements) {
                let activeSlideIndex = swiper.realIndex + 1;
                let totalSlides = swiper.slides.length - 4;
                const slideActive = swiper.slides[swiper.activeIndex];
                const nextSlide = swiper.slides[swiper.activeIndex + 1];
                const duplicateSlide = swiper.slides[swiper.activeIndex + 2];

                const imgLarge = slideActive.querySelector(
                    ".js__getImageSenary"
                );
                const titleLarge = slideActive.querySelector(
                    ".js__getTitleSenary"
                );
                const desLarge = slideActive.querySelector(".js__getDesSenary");

                const imgSmallPrimary = nextSlide.querySelector(
                    ".js__getImageSenary"
                );
                const titleSmallPrimary = nextSlide.querySelector(
                    ".js__getTitleSenary"
                );
                const desSmallPrimary =
                    nextSlide.querySelector(".js__getDesSenary");

                const imgSmallSecondary = duplicateSlide.querySelector(
                    ".js__getImageSenary"
                );
                const titleSmallSecondary = duplicateSlide.querySelector(
                    ".js__getTitleSenary"
                );
                const desSmallSecondary =
                    duplicateSlide.querySelector(".js__getDesSenary");

                elements.imgLarge.src = imgLarge.src;
                elements.titleLarge.innerText = titleLarge.innerText;
                elements.desLarge.innerText = desLarge.innerText;

                elements.imgSmallPrimary.src = imgSmallPrimary.src;
                elements.titleSmallPrimary.innerText =
                    titleSmallPrimary.innerText;
                elements.desSmallPrimary.innerText = desSmallPrimary.innerText;

                elements.imgSmallSecondary.src = imgSmallSecondary.src;
                elements.titleSmallSecondary.innerText =
                    titleSmallSecondary.innerText;
                elements.desSmallSecondary.innerText =
                    desSmallSecondary.innerText;

                if (swiper.params.loop) {
                    totalSlides -= 2;
                    activeSlideIndex =
                        ((activeSlideIndex % totalSlides) + totalSlides) %
                        totalSlides;
                    activeSlideIndex =
                        activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
                }

                elements.activeCount.textContent = String(
                    activeSlideIndex
                ).padStart(2, "0");
                elements.totalCount.textContent = String(totalSlides).padStart(
                    2,
                    "0"
                );
            }
        },
        // slider three quaternary item
        sliderThreeItemsQuaternary: function () {
            threeSlidesQuaternary.forEach((item, index) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: true,
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
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
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
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
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            });

            function updateSlideInfo(swiper, activeCount, totalCount) {
                let activeSlideIndex = swiper.realIndex + 1;
                let totalSlides = swiper.slides.length - 4;

                if (swiper.params.loop) {
                    totalSlides -= 2;
                    activeSlideIndex =
                        ((activeSlideIndex % totalSlides) + totalSlides) %
                        totalSlides;
                    activeSlideIndex =
                        activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
                }

                activeCount.textContent = String(activeSlideIndex).padStart(
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
                    slidesPerView: 1.5,
                    centeredSlides: true,
                    loop: true,
                    spaceBetween: 10,

                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: "auto",
                            spaceBetween: 40,
                        },
                    },
                });

                const activeCount = item.querySelector(".js__counterActive");
                const totalCount = item.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                let activeSlideIndex = swiper.realIndex + 1;
                let totalSlides = swiper.slides.length - 6;

                if (swiper.params.loop) {
                    totalSlides -= 2;

                    // Tính lại chỉ số slide hiện tại nếu sử dụng loop
                    activeSlideIndex =
                        ((activeSlideIndex % totalSlides) + totalSlides) %
                        totalSlides;
                    activeSlideIndex =
                        activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
                }

                activeCount.textContent = String(activeSlideIndex).padStart(
                    2,
                    "0"
                );
                totalCount.textContent = String(totalSlides).padStart(2, "0");
            }
        },
        // slider three senary item
        sliderThreeItemsSenary: function () {
            threeSlidesSenary.forEach((item, index) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    grabCursor: false,
                    slidesPerView: 1,
                    spaceBetween: 50,
                    centeredSlides: true,
                    autoHeight: true,
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
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    mousewheel: true,
                    keyboard: true,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
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
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            });

            function updateSlideInfo(swiper, activeCount, totalCount) {
                let activeSlideIndex = swiper.realIndex + 1;
                let totalSlides = swiper.slides.length - 4;

                if (swiper.params.loop) {
                    totalSlides -= 2;
                    activeSlideIndex =
                        ((activeSlideIndex % totalSlides) + totalSlides) %
                        totalSlides;
                    activeSlideIndex =
                        activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
                }

                activeCount.textContent = String(activeSlideIndex).padStart(
                    2,
                    "0"
                );
                totalCount.textContent = String(totalSlides).padStart(2, "0");
            }
        },
        // slide three octonary
        sliderThreeItemsOctonary: function () {
            threeSlidesOctonary.forEach((item) => {
                var slider = item.querySelector(".js__threeSlides");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    loop: true,
                    autoHeight: true,
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
                    breakpoints: {
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    },
                });
                const activeCount = item.querySelector(".js__counterActive");
                const totalCount = item.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            });
            function updateSlideInfo(swiper, activeCount, totalCount) {
                let activeSlideIndex = swiper.realIndex + 1;
                let totalSlides = swiper.slides.length - 4;

                if (swiper.params.loop) {
                    totalSlides -= 2;

                    // Tính lại chỉ số slide hiện tại nếu sử dụng loop
                    activeSlideIndex =
                        ((activeSlideIndex % totalSlides) + totalSlides) %
                        totalSlides;
                    activeSlideIndex =
                        activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
                }

                activeCount.textContent = String(activeSlideIndex).padStart(
                    2,
                    "0"
                );
                totalCount.textContent = String(totalSlides).padStart(2, "0");
            }
        },
        // intro one slide
        sliderIntroOneFade: function () {
            new Swiper(introOneSlidesFade, {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                effect: "fade",
                allowTouchMove: false,
                allowSlideClick: false,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            });
        },
        // intro two slide
        sliderIntroTwo: function () {
            if (introTwoSlides) {
                var pagi = introTwoSlides.querySelector(".swiper-pagination");
                var slider = introTwoSlides.querySelector(".js__slider");
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    allowTouchMove: false,
                    allowSlideClick: false,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    pagination: {
                        el: pagi,
                        clickable: false,
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 1.5,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    },
                });
                const activeCount =
                    introTwoSlides.querySelector(".js__counterActive");
                const totalCount =
                    introTwoSlides.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }

                function updateSlideInfo(swiper, activeCount, totalCount) {
                    const totalSlides = swiper.slides.length - 1;
                    const activeSlideIndex = swiper.activeIndex;

                    activeCount.textContent = "0" + (activeSlideIndex + 1);
                    totalCount.textContent = "0" + totalSlides;
                }
            }
        },

        // colection one slide
        sliderColectionOneFade: function () {
            if (colectionOneSlidesFade) {
                var slider =
                    colectionOneSlidesFade.querySelector(".js__oneSlides");
                var next = colectionOneSlidesFade.querySelector(
                    ".swiper-button-next"
                );
                var prev = colectionOneSlidesFade.querySelector(
                    ".swiper-button-prev"
                );
                new Swiper(slider, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: true,
                    effect: "fade",
                    allowTouchMove: false,
                    allowSlideClick: false,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });
            }
        },
        // colection one slide auto
        colectionOneSlidesFadeAuto: function () {
            if (colectionOneSlidesFadeAuto) {
                var slider =
                    colectionOneSlidesFadeAuto.querySelector(".js__oneSlides");
                var next = colectionOneSlidesFadeAuto.querySelector(
                    ".swiper-button-next"
                );
                var prev = colectionOneSlidesFadeAuto.querySelector(
                    ".swiper-button-prev"
                );
                var mySwiper = new Swiper(slider, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: true,
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
                const activeCount =
                    colectionOneSlidesFadeAuto.querySelector(
                        ".js__counterActive"
                    );
                const totalCount =
                    colectionOneSlidesFadeAuto.querySelector(
                        ".js__counterTotal"
                    );
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
                function updateSlideInfo(swiper, activeCount, totalCount) {
                    let activeSlideIndex = swiper.realIndex - 1;
                    let totalSlides = swiper.slides.length;

                    if (swiper.params.loop) {
                        totalSlides -= 2;
                        activeSlideIndex =
                            ((activeSlideIndex % totalSlides) + totalSlides) %
                            totalSlides;
                        activeSlideIndex =
                            activeSlideIndex === 0
                                ? totalSlides
                                : activeSlideIndex;
                    }

                    activeCount.textContent = String(activeSlideIndex).padStart(
                        2,
                        "0"
                    );
                    totalCount.textContent = String(totalSlides).padStart(
                        2,
                        "0"
                    );
                }
            }
        },

        // hover in item location
        handleHoverInItemLocation: function (index) {
            document
                .querySelector(".js__itemLocation .js__child.active")
                .classList.remove("active");
            document
                .querySelector(".js__itemMapLocation .js__child.active")
                .classList.remove("active");
            document
                .querySelector(".js__iconChild.active")
                .classList.remove("active");

            itemsLocation[index]
                .querySelector(".js__child")
                .classList.add("active");
            itemsMapLocation[index]
                .querySelector(".js__child")
                .classList.add("active");
            iconChildLocation[index].classList.add("active");
        },
        handleClickItemLocation: function (index) {
            itemsLocation[index].closest(".js__listLocation").style.display =
                "block";

            itemsMapLocation[index].closest(".js__mapWrapper").style.display =
                "none";
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
            // slider two item
            this.sliderTwoItems();
            // slider two secondary item
            this.sliderTwoItemsSecondary();
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
            // slider three senary item
            this.sliderThreeItemsSenary();
            // slide three octonary
            this.sliderThreeItemsOctonary();
            // intro one slide
            this.sliderIntroOneFade();
            // intro two slide
            this.sliderIntroTwo();
            //colection one slide
            this.sliderColectionOneFade();
            // colection one slide auto
            this.colectionOneSlidesFadeAuto();
        },
    };

    app.start();
});
