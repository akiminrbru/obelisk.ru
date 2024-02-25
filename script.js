document.addEventListener("DOMContentLoaded", () => {

    // Перенос доп ссылков в футуре

    let enter = document.querySelector('.zfooter__dop');
    let place = document.querySelector('.zfooter__bot-inner');
    let back = document.querySelector('.zfooter__bot-left');

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 992) {
            if (place) {
                place.append(enter);
            }
        } else {
            if (back) {
                back.append(enter);
            }
        }
    });

    if (window.innerWidth <= 992) {
        if (place) {
            place.append(enter);
        }
    } else {
        if (back) {
            back.append(enter);
        }
    }

    // Перенос смотреть все в популярных котегориях

    let enter2 = document.querySelector('.zmainPopular__all');
    let place2 = document.querySelector('.zmainPopular__inner');
    let back2 = document.querySelector('.zmainPopular__panel');

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 576) {
            place2?.append(enter2);
        } else {
            back2?.append(enter2);
        }
    });

    if (window.innerWidth <= 576) {
        place2?.append(enter2);
    } else {
        back2?.append(enter2);
    }

    // SwiperProducts

    const swiperProducts = new Swiper('.swiperProducts', {
        enabled: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination-products',
        },
        breakpoints: {
        577: {
            enabled: false,
            spaceBetween: 0,
        },
        },
    });

    // SwiperExample

    const swiperExample = new Swiper('.swiperExample', {
        enabled: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination-example',
        },
        breakpoints: {
            577: {
            enabled: false,
            spaceBetween: 0,
            },
        },
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 576) {
            swiperExample.slideTo(0);
            swiperProducts.slideTo(0);
        } 
    });

    // Перенос смотреть все в примерах

    let enter3 = document.querySelector('.zmainExample__all');
    let place3 = document.querySelector('.zmainExample__inner');
    let back3 = document.querySelector('.zmainExample__panel');

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 576) {
            place3?.append(enter3);
        } else {
            back3?.append(enter3);
        }
    });

    if (window.innerWidth <= 576) {
        place3?.append(enter3);
    } else {
        back3?.append(enter3);
    }

    // swiperReviews

    const swiperReviews = new Swiper('.swiperReviews', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination-reviews',
        },
        navigation: {
            nextEl: '.swiper-reviews-next',
            prevEl: '.swiper-reviews-prev',
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });

        // Перенос смотреть все в отзывах

        let enter4 = document.querySelector('.zmainReviews__all');
        let place4 = document.querySelector('.zmainReviews__inner');
        let back4 = document.querySelector('.zmainReviews__panel');
    
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 576) {
                place4?.append(enter4);
            } else {
                back4?.append(enter4);
            }
        });
    
        if (window.innerWidth <= 576) {
            place4?.append(enter4);
        } else {
            back4?.append(enter4);
        }

    // swiperBanner

    const swiperBanner = new Swiper('.swiperBanner', {
        slidesPerView: "auto",
        spaceBetween: 300,
        pagination: {
            el: '.swiper-pagination-banner',
        },
        navigation: {
            nextEl: '.swiper-banner-next',
            prevEl: '.swiper-banner-prev',
        },

        breakpoints: {
            577: {
                spaceBetween: 1000,

            },
        },

        on: {
            init: function () {
                const currentSlide = this.activeIndex + 1;
                document.querySelector('.current-slide').innerHTML = currentSlide;
            } ,
            slideChange: function () {
              const currentSlide = this.activeIndex + 1;
              document.querySelector('.current-slide').innerHTML = currentSlide;
            },
        },
    });
    
    if (swiperBanner) {
        const swiperBanner_wrapper = document.querySelector('.swiperBanner .swiper-wrapper')
        if (swiperBanner_wrapper) {
            const totalSlides = swiperBanner_wrapper.childElementCount;  
            if (totalSlides) {
                document.querySelector('.total-slides').innerHTML = totalSlides;
            }
        }
    }


    // Перенос кнокпи связаться с нами

    let enter5 = document.querySelector('.zheader__contactus');
    let place5 = document.querySelector('.zheader__contactus-wrap');
    let back5 = document.querySelector('.zheader__info');

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 992) {
            place5?.append(enter5);
        } else {
            back5?.append(enter5);
        }
    });

    if (window.innerWidth <= 992) {
        place5?.append(enter5);
    } else {
        back5?.append(enter5);
    }


    // Бургер

    const burger_btn = document.querySelector('.zheader__menu-btn');
    const body_item = document.querySelector('body');
    const mobile_menu = document.querySelector('.zheader__bot');
    

    if (burger_btn) {
        burger_btn.addEventListener('click', (e) => {
            burger_btn.classList.toggle('active');
            body_item.classList.toggle('active');
            mobile_menu.classList.toggle('active');
            catalog.classList.remove('active');
        });
    }

    // Каталог 

    const catalog_back = document.querySelector('.zheader__catalog-btnBack');
    const catalog_open = document.querySelector('.zheader__nav-catalogImg');
    const catalog = document.querySelector('.zheader__catalog');


    if (catalog_back) {
        catalog_back.addEventListener('click', () => {
            catalog.classList.remove('active');
        });
    }

    if (catalog_open) {
        catalog_open.addEventListener('click', () => {
            catalog.classList.add('active');
        });
    }

    // FILTERS

    let filter_panel = document.querySelectorAll('.zcatalogDetail__filter_panel');
    if (filter_panel.length != 0) {
        filter_panel.forEach((el) => {
            el.addEventListener('click', (e) => {
                let filter__inner = e.target.parentNode.querySelector('.zcatalogDetail__filter_inner');
                let filter__arrow = e.target;

                if (filter__arrow?.classList.contains('active')) {
                    filter__arrow?.classList.remove('active');
                } else {
                    filter_panel.forEach((item) => {
                        item?.classList.remove('active');
                    });
                    filter__arrow?.classList.add('active');
                }

                if (filter__inner?.classList.contains('active')) {
                    filter__inner?.classList.remove('active');
                } else {
                    filter_panel.forEach((item) => {
                        item?.parentNode.querySelector('.zcatalogDetail__filter_inner')?.classList.remove('active');
                    });
                    filter__inner.classList.add('active');
                }
            });
        })
    }

});

