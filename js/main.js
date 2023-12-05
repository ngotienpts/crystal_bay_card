document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;
    // back top
    var backTop = document.querySelector("#back-top");

    // header
    var header = document.querySelector(".js__header");

    // modal
    var modal = document.querySelector(".js__modal");
    var modalMap = document.querySelector(".js__modalMap");
    var showModalMap = document.querySelector(".js__showModalMap");
    var showModalMap2 = document.querySelector(".js__showModalMap2");

    var modalHoliday = document.querySelector(".js__modalBookHoliday");
    var showModalHoliday = document.querySelector(".js__showModalBookHoliday");

    var modalBooking = document.querySelector(".js__modalBooking");
    var showModalBooking = document.querySelector(".js__showModalBooking");

    var modalMeliday = document.querySelector(".js__modalMeliday");
    var showModalMelidays = document.querySelectorAll(".js__showModalMeliday");

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

    var threeSlidesSecondary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerSecondary"
    );
    var threeSlides = document.querySelector(".js__swiperThreeItemsContainer");
    var threeSlides2 = document.querySelector(
        ".js__swiperThreeItemsContainer2"
    );
    var threeSlidesQuaternary = document.querySelector(
        ".js__swiperThreeItemsContainerQuaternary"
    );
    var threeSlidesSenary = document.querySelector(
        ".js__swiperThreeItemsContainerSenary"
    );
    var threeSlidesTertiary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerTertiary"
    );

    var threeSlidesQuinary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerQuinary"
    );

    var threeSlidesOctonary = document.querySelectorAll(
        ".js__swiperThreeItemsContainerOctonary"
    );

    var introOneSlidesFade = document.querySelector(".js__introOneSlidesFade");
    var introTwoSlides = document.querySelector(".js__introTwoSlidesContainer");

    var colectionOneSlidesFade = document.querySelector(
        ".js__swiperItemsColectionContainer"
    );
    var colectionOneSlidesFadeAutos = document.querySelectorAll(
        ".js__swiperItemsColectionAutoContainer"
    );
    var colectionThreeSlidesNested = document.querySelector(
        ".js__swiperItemsColectionNested"
    );
    var librarySlidesGallery = document.querySelector(
        ".js__libraryPrimaryItemsContainer"
    );
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

    const tabOne = document.getElementById("tab-one");
    const tabTwo = document.getElementById("tab-two");
    const tabThree = document.getElementById("tab-3");
    const tabFor = document.getElementById("tab-4");

    function updateSlideInfo_1(swiper, activeCount, totalCount) {
        const totalSlides = swiper.slides.length / 2 - 1;
        let activeSlideIndex = swiper.realIndex;

        if (swiper.params.loop) {
            activeSlideIndex = (activeSlideIndex + totalSlides) % totalSlides;
        }
        if (activeCount) {
            activeCount.textContent = String(activeSlideIndex + 1).padStart(
                2,
                "0"
            );
        }

        if (totalCount) {
            totalCount.textContent = String(totalSlides).padStart(2, "0");
        }
    }
    function updateSlideInfo_2(swiper, activeCount, totalCount) {
        let activeSlideIndex = swiper.realIndex + 1;
        let totalSlides = swiper.slides.length - 4;

        if (swiper.params.loop) {
            totalSlides -= 2;
            activeSlideIndex =
                ((activeSlideIndex % totalSlides) + totalSlides) % totalSlides;
            activeSlideIndex =
                activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
        }

        activeCount.textContent = String(activeSlideIndex).padStart(2, "0");
        totalCount.textContent = String(totalSlides).padStart(2, "0");
    }
    function updateSlideInfo_3(swiper, activeCount, totalCount) {
        let activeSlideIndex = swiper.realIndex + 1;
        let totalSlides = swiper.slides.length - 4 - 2;

        if (swiper.params.loop) {
            totalSlides -= 2;

            activeSlideIndex =
                ((activeSlideIndex % totalSlides) + totalSlides) % totalSlides;
            activeSlideIndex =
                activeSlideIndex === 0 ? totalSlides : activeSlideIndex;
        }

        activeCount.textContent = String(activeSlideIndex).padStart(2, "0");
        totalCount.textContent = String(totalSlides).padStart(2, "0");
    }
    function switchTab(tabId, idOne, idTwo) {
        document.getElementById(tabId).classList.add("active");
        document
            .getElementById(tabId === idOne ? idTwo : idOne)
            .classList.remove("active");

        document
            .getElementById("count-" + tabId.split("-")[1])
            .classList.add("active");
        document
            .getElementById(
                "count-" + tabId.split("-")[1] ===
                    "count-" + idOne.split("-")[1]
                    ? "count-" + idTwo.split("-")[1]
                    : "count-" + idOne.split("-")[1]
            )
            .classList.remove("active");

        document
            .getElementById("pane-" + tabId.split("-")[1])
            .classList.add("active");
        document
            .getElementById(
                "pane-" + tabId.split("-")[1] === "pane-" + idOne.split("-")[1]
                    ? "pane-" + idTwo.split("-")[1]
                    : "pane-" + idOne.split("-")[1]
            )
            .classList.remove("active");
    }

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

            // modal map bộ sưu tập
            if (showModalMap) {
                showModalMap.onclick = function () {
                    if (modalMap) {
                        const closeModal =
                            modalMap.querySelector(".js__closeModal");

                        modalMap.classList.add("show");
                        closeModal.onclick = function () {
                            if (modalMap.classList.contains("show")) {
                                modalMap.classList.remove("show");
                            }
                        };
                    }
                };
            }
            // modal map bộ sưu tập
            if (showModalMap2) {
                showModalMap2.onclick = function () {
                    if (modalMap) {
                        const closeModal =
                            modalMap.querySelector(".js__closeModal");

                        modalMap.classList.add("show");
                        closeModal.onclick = function () {
                            if (modalMap.classList.contains("show")) {
                                modalMap.classList.remove("show");
                            }
                        };
                    }
                };
            }
            // modal đặt kỳ nghỉ
            if (showModalHoliday) {
                showModalHoliday.onclick = function () {
                    if (modalHoliday) {
                        const closeModal =
                            modalHoliday.querySelector(".js__closeModal");

                        modalHoliday.classList.add("show");
                        closeModal.onclick = function () {
                            if (modalHoliday.classList.contains("show")) {
                                modalHoliday.classList.remove("show");
                            }
                        };
                    }
                };
            }
            // modal cb booking
            if (showModalBooking) {
                showModalBooking.onclick = function () {
                    if (modalBooking) {
                        const closeModal =
                            modalBooking.querySelector(".js__closeModal");

                        modalBooking.classList.add("show");
                        closeModal.onclick = function () {
                            if (modalBooking.classList.contains("show")) {
                                modalBooking.classList.remove("show");
                            }
                        };
                    }
                };
            }

            // modal meliday
            if (showModalMelidays) {
                showModalMelidays.forEach((showModalMeliday) => {
                    showModalMeliday.onclick = function () {
                        if (modalMeliday) {
                            const closeModal =
                                modalMeliday.querySelector(".js__closeModal");

                            modalMeliday.classList.add("show");
                            closeModal.onclick = function () {
                                if (modalMeliday.classList.contains("show")) {
                                    modalMeliday.classList.remove("show");
                                }
                            };
                        }
                    };
                });
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

            // change tab
            if (tabOne) {
                tabOne.onclick = function () {
                    switchTab("tab-one", "tab-one", "tab-two");
                };
            }
            if (tabTwo) {
                tabTwo.onclick = function () {
                    switchTab("tab-two", "tab-two", "tab-one");
                };
            }
            if (tabThree) {
                tabThree.onclick = function () {
                    switchTab("tab-3", "tab-3", "tab-4");
                };
            }
            if (tabFor) {
                tabFor.onclick = function () {
                    switchTab("tab-4", "tab-4", "tab-3");
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
        sliderThreeItems: function () {
            if (threeSlides) {
                var slider = threeSlides.querySelector(".js__threeSlides");
                var next = threeSlides.querySelector(".swiper-button-next");
                var prev = threeSlides.querySelector(".swiper-button-prev");
                var countOne = document.querySelector("#count-one");
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
                    countOne.querySelector(".js__counterActive");
                const totalCount = countOne.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo_1(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo_1(mySwiper, activeCount, totalCount);
                    });
                }
            }
        },
        sliderThreeItems2: function () {
            if (threeSlides2) {
                var slider = threeSlides2.querySelector(".js__threeSlides");
                var next = threeSlides2.querySelector(".swiper-button-next");
                var prev = threeSlides2.querySelector(".swiper-button-prev");
                var countTwo = document.querySelector("#count-two");
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
                    countTwo.querySelector(".js__counterActive");
                const totalCount = countTwo.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo_1(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo_1(mySwiper, activeCount, totalCount);
                    });
                }
            }
        },
        sliderThreeItemsQuaternary: function () {
            if (threeSlidesQuaternary) {
                var slider =
                    threeSlidesQuaternary.querySelector(".js__threeSlides");
                var next = threeSlidesQuaternary.querySelector(
                    ".swiper-button-next"
                );
                var prev = threeSlidesQuaternary.querySelector(
                    ".swiper-button-prev"
                );
                var countThree = document.querySelector("#count-3");
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
                    countThree.querySelector(".js__counterActive");
                const totalCount =
                    countThree.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo_2(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo_2(mySwiper, activeCount, totalCount);
                    });
                }
            }
        },
        sliderThreeItemsSenary: function () {
            if (threeSlidesSenary) {
                var slider =
                    threeSlidesSenary.querySelector(".js__threeSlides");
                var next = threeSlidesSenary.querySelector(
                    ".swiper-button-next"
                );
                var prev = threeSlidesSenary.querySelector(
                    ".swiper-button-prev"
                );
                var countFor = document.querySelector("#count-4");
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
                    countFor.querySelector(".js__counterActive");
                const totalCount = countFor.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo_2(mySwiper, activeCount, totalCount);

                    mySwiper.on("slideChange", function () {
                        updateSlideInfo_2(mySwiper, activeCount, totalCount);
                    });
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
        sliderColectionOneFadeFunc: function () {
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
        colectionOneSlidesFadeAutoFunc: function () {
            if (colectionOneSlidesFadeAutos) {
                colectionOneSlidesFadeAutos.forEach((item) => {
                    var slider = item.querySelector(".js__oneSlides");
                    var next = item.querySelector(".swiper-button-next");
                    var prev = item.querySelector(".swiper-button-prev");
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
                        item.querySelector(".js__counterActive");
                    const totalCount = item.querySelector(".js__counterTotal");
                    if (activeCount && totalCount) {
                        updateSlideInfo(mySwiper, activeCount, totalCount);

                        mySwiper.on("slideChange", function () {
                            updateSlideInfo(mySwiper, activeCount, totalCount);
                        });
                    }
                });
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
        // slider three nested item
        colectionThreeSlidesNestedFunc: function () {
            if (colectionThreeSlidesNested) {
                var slider = colectionThreeSlidesNested.querySelector(
                    ".js__slideOneParent"
                );
                var next = colectionThreeSlidesNested.querySelector(
                    ".swiper-button-next"
                );
                var prev = colectionThreeSlidesNested.querySelector(
                    ".swiper-button-prev"
                );

                var mySwiper = new Swiper(slider, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoHeight: false,
                    allowTouchMove: true,
                    allowSlideClick: true,

                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
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
                    colectionThreeSlidesNested.querySelector(
                        ".js__counterActive"
                    );
                const totalCount =
                    colectionThreeSlidesNested.querySelector(
                        ".js__counterTotal"
                    );
                if (activeCount && totalCount) {
                    updateSlideInfo(mySwiper, activeCount, totalCount);
                    mySwiper.on("slideChange", function () {
                        updateSlideInfo(mySwiper, activeCount, totalCount);
                    });
                }
            }
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
        librarySlidesGalleryFunc: function () {
            if (librarySlidesGallery) {
                var sliderLeftBlock = librarySlidesGallery.querySelector(
                    ".js__libraryPrimaryLeftItemsBlock"
                );
                var sliderRightBlock = librarySlidesGallery.querySelector(
                    ".js__libraryPrimaryRightItemsBlock"
                );
                var sliderLeft = librarySlidesGallery.querySelector(
                    ".js__libraryPrimaryLeftItems"
                );
                var sliderRight = sliderRightBlock.querySelector(
                    ".js__libraryPrimaryRightItems"
                );
                var sliderRightChildrens =
                    librarySlidesGallery.querySelectorAll(
                        ".js__libraryPrimaryRightItemsChildren"
                    );
                var next = sliderLeftBlock.querySelector(".swiper-button-next");
                var prev = sliderLeftBlock.querySelector(".swiper-button-prev");

                if (sliderRightChildrens) {
                    sliderRightChildrens.forEach((sliderRightChildren) => {
                        new Swiper(sliderRightChildren, {
                            slidesPerView: 1.2,
                            slidesPerGroup: 1,
                            loop: true,
                            spaceBetween: 0,
                            allowTouchMove: true,
                            allowSlideClick: true,
                            mousewheel: true,
                            keyboard: false,
                            breakpoints: {
                                640: {
                                    slidesPerView: 1.2,
                                    allowTouchMove: true,
                                    allowSlideClick: true,
                                    keyboard: false,
                                },
                                768: {
                                    slidesPerView: 1,
                                    allowTouchMove: false,
                                    allowSlideClick: false,
                                    keyboard: true,
                                    loop: true,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    allowTouchMove: false,
                                    allowSlideClick: false,
                                    keyboard: true,
                                    loop: true,
                                },
                                1200: {
                                    slidesPerView: 1.2,
                                    allowTouchMove: false,
                                    allowSlideClick: false,
                                    keyboard: true,
                                },
                            },
                        });
                    });
                }
                var galleryLeft = new Swiper(sliderLeft, {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                    centeredSlides: true,
                    autoHeight: true,
                    loop: true,
                    loopedSlides: 4,
                    allowTouchMove: true,
                    allowSlideClick: true,
                    direction: "horizontal",
                    freeMode: true,
                    freeModeSticky: true,
                    breakpoints: {
                        640: {
                            slidesPerView: 1.5,
                            direction: "horizontal",
                            centeredSlides: true,
                            allowTouchMove: true,
                            allowSlideClick: true,
                        },
                        768: {
                            slidesPerView: 2,
                            allowTouchMove: false,
                            allowSlideClick: false,
                            direction: "vertical",
                            centeredSlides: false,
                        },
                        1024: {
                            slidesPerView: 2,
                            allowTouchMove: false,
                            allowSlideClick: false,
                            direction: "vertical",
                            centeredSlides: false,
                        },
                        1200: {
                            slidesPerView: 3,
                            allowTouchMove: false,
                            allowSlideClick: false,
                            direction: "vertical",
                            centeredSlides: false,
                        },
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                });
                var galleryRight = new Swiper(sliderRight, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    loop: true,
                    loopedSlides: 4,
                    allowTouchMove: false,
                    allowSlideClick: false,
                    direction: "horizontal",
                });

                galleryRight.controller.control = galleryLeft;
                galleryLeft.controller.control = galleryRight;
                const activeCount =
                    sliderLeftBlock.querySelector(".js__counterActive");
                const totalCount =
                    sliderLeftBlock.querySelector(".js__counterTotal");
                if (activeCount && totalCount) {
                    updateSlideInfo_3(galleryLeft, activeCount, totalCount);
                    galleryLeft.on("slideChange", function () {
                        updateSlideInfo_3(galleryLeft, activeCount, totalCount);
                    });
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
            // slider three secondary item
            this.sliderThreeItemsSecondary();
            this.sliderThreeItems();
            this.sliderThreeItems2();
            this.sliderThreeItemsQuaternary();
            this.sliderThreeItemsSenary();
            // slider three tertiary item
            this.sliderThreeItemsTertiary();
            // slider three quinary item
            this.sliderThreeItemsQuinary();
            // slide three octonary
            this.sliderThreeItemsOctonary();
            // intro one slide
            this.sliderIntroOneFade();
            // intro two slide
            this.sliderIntroTwo();
            //colection one slide
            this.sliderColectionOneFadeFunc();
            // colection one slide auto
            this.colectionOneSlidesFadeAutoFunc();
            // slider three nested item
            this.colectionThreeSlidesNestedFunc();
            // library
            this.librarySlidesGalleryFunc();
        },
    };

    app.start();
});
