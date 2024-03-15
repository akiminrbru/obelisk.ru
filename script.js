document.addEventListener("DOMContentLoaded", () => {
    // Перенос доп ссылков в футуре
    let enter = document.querySelector('.zfooter__dop');
    let place = document.querySelector('.zfooter__bot-inner');
    let back = document.querySelector('.zfooter__bot-left');
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 992) {
            place?.append(enter);
        } else {
            back?.append(enter);
        }
    });
    if (window.innerWidth <= 992) {
        place?.append(enter);
    } else {
        back?.append(enter);
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
            slideTo: 0,
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
            // swiperExample.slideTo(0);
            // swiperProducts.slideTo(0);
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

    // Каталог десктоп

    let desktop_catalog_btn = document.querySelector('.zheader__catalog-btnWrap');
    let desktop_catalog = document.querySelector('.zheader__catalog');

    desktop_catalog_btn?.addEventListener('mouseenter', () => {
        let catalog = desktop_catalog_btn.querySelector(".zheader__catalog");
        catalog.classList.add('active');
    });
    desktop_catalog_btn?.addEventListener('mouseleave', () => {
        let catalog = desktop_catalog_btn.querySelector(".zheader__catalog");
        catalog.classList.remove('active');
    });
    desktop_catalog?.addEventListener('mouseleave', () => {
        desktop_catalog.classList.remove('active');
    })

    // Свайпер на детальной карточки

    const swiper = new Swiper('.swiperCardDetail', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination-cardDetail',
        },
        navigation: {
          nextEl: '.swiper-cardDetail-next',
          prevEl: '.swiper-cardDetail-prev',
        },
    });
    
    // Выбор материала
    let btn_all_color = document.querySelector('.zcardDetail__material_all');
    let color_list = document.querySelector('.zcardDetail__material_list');
    let color_items = document.querySelectorAll('.zcardDetail__material_item');
    let color_info = document.querySelector('.zcardDetail__material_info');
    
    let color_items_array = [];

    if (color_items) {
        color_items_array = Array.from(color_items);
    }

    btn_all_color?.addEventListener('click', (e) => {
        color_list?.classList.toggle('active');
        btn_all_color?.classList.toggle('active');
    });

    color_items_array?.map((el) => {
        let color_input = el?.querySelector('input');
        let color_text = el?.querySelector('.zcardDetail__material_item_title').textContent;
        if (color_input.checked) {
            color_info.querySelector('span').textContent = color_text;
        }
        el?.addEventListener('click', () => {
            if (color_input.checked) {
                color_info.querySelector('span').textContent = color_text;
            }
        });
    });

    // Выбор размера материала

    let btn_openSelector = document.querySelector('.zcardDetail__size_selector_default');
    let selector_list = document.querySelector('.zcardDetail__size_selector_items');
    let selector_items = document.querySelectorAll('.zcardDetail__size_selector_item');

    let selector_item_array = [];
    if (selector_items) {
        selector_item_array = Array.from(selector_items);
    }

    btn_openSelector?.addEventListener('click', () => {
        btn_openSelector?.classList.toggle('active');
        selector_list?.classList.toggle('active');
    });

    selector_item_array?.map((elem) => {
        elem?.querySelector('label')?.addEventListener('click', (e) => {
            selector_list?.classList.remove('active');
            btn_openSelector?.classList.remove('active');

            let item =e.target?.parentNode;
            let text = e.target.textContent;
            let value = e.target?.parentNode?.querySelector('input')?.value;
            let default_text = btn_openSelector?.querySelector('label span');
            let default_value = btn_openSelector?.querySelector('input');
            default_text.textContent = text;
            default_value.value = value;
            selector_item_array?.map((el) => el.classList.remove('active'));
            item?.classList.add('active');
        });
    });

    // Кнопка добавить в корзину
    let btn_add_cart = document.querySelector('.zcardDetail__sidebar_buy_cart');

    btn_add_cart?.addEventListener('click', () => {
        btn_add_cart?.classList.toggle('active');
        if (btn_add_cart?.classList.contains('active')) {
            btn_add_cart.querySelector('span').textContent = "Добавлено в корзину";
        } else {
            btn_add_cart.querySelector('span').textContent = "В корзину";
        }        
    });


    // Читать далее в карточке товара

    let description_read = document.querySelector('.zcardDetail__description_read');
    let description_text = document.querySelector('.zcardDetail__description_text');

    description_read?.addEventListener('click', (e) => {
        description_read.classList.toggle('active');
        description_text.classList.toggle('active');
    });
});

