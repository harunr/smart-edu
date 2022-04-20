(function ($) {
    $(function () {


        // Phone nav click function
        $('#phone-nav').on('click touch', function () {
            $('body').addClass('nav-expand');

        });
        $('.menu-close').on('click touch', function () {
            $('body').removeClass('nav-expand');

        });

        $('li a.phase-link').on('click touch', function () {
            $('body').removeClass('nav-expand');

        });


        if($(".about-main-wrap").length){
            $("body").addClass('about-main-content');
        }

        if($(".contact-page").length){
            $("body").addClass('contact-main-content');
        }


        if($(".resources-page").length){
            $("body").addClass('resources-page-content');
        }
        
        if($(".search-no-result").length){
            $("body").addClass('search-no-result-page');
        }
        
        if($(".search-result-content").length){
            $("body").addClass('search-result-content-page');
        }
        
        if($(".themes-description-page").length){
            $("body").addClass('themes-description-content');
        }
        

        if($(".themes-page").length){
            $("body").addClass('themes-page-content');
        }


        if($(".publications-filter-page").length){
            $("body").addClass('publications-filter-content');
        }


        if($(".publications-page").length){
            $("body").addClass('publications-page-content');
        }
        
        if($(".publication-detail-page").length){
            $("body").addClass('publication-detail-content');
        }
        

        if($(".bursary-main-wrap").length){
            $("body").addClass('bursary-page-content');
        }

        
        if($(".event-main-wrap").length){
            $("body").addClass('event-page');
        }


  
        if($(".orgs-we-follow").length){
            $("body").addClass('orgs-page');
        }



        if($(".search-no-result-content").length){
            $("body").addClass('search-no-content');
        }


        if($(".terms-and-condition").length){
            $("body").addClass('terms-and-condition-page');
        }


           // Phone nav click function
           $('.phase-link, .second-phase-btn').on('click touch', function () {
               $('body').addClass('lmip-modal-expand')

        });
        $('.about-imip-close').on('click touch', function () {
            $('body').removeClass('lmip-modal-expand');
        });

      
        /* Header */
        if ($(".main-header-section").length) {
            var $header = $(".main-header-section"),
                $clone = $header.before($header.clone().addClass("fixedTop")),
                $fixedHeader = $('.fixedTop'),
                $mainHeaderHeight = $header.outerHeight(),
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            if ($(window).width() > 767) {
                $fixedHeader.css({
                    top: -$headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight + 300) {

                        $("body").addClass("started");

                        if (fromTop > lastPos) {
                            $fixedHeader.css({
                                top: 0
                            });
                        }
                        lastPos = fromTop;

                    } else {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").removeClass("started");

                    }
                });


            } else {
                $(window).on("scroll", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("over-header");
                    } else {
                        $("body").removeClass("over-header");
                    }
                })
            }
        }
        
        
        /* Header */
        if ($(".about-lmip-header-wrap").length) {
            var $header = $(".about-lmip-header-wrap"),
                $clone = $header.before($header.clone().addClass("modal-header")),
                $fixedHeader = $('.modal-header'),
                $mainHeaderHeight = $header.outerHeight(),
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            if ($(window).width() > 767) {
                $fixedHeader.css({
                    top: -$headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight + 300) {

                        $("body").addClass("modal-started");

                        if (fromTop > lastPos) {
                            $fixedHeader.css({
                                top: 0
                            });
                        }
                        lastPos = fromTop;

                    } else {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").removeClass("modal-started");

                    }
                });


            } else {
                $(window).on("scroll", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("modal-over-header");
                    } else {
                        $("body").removeClass("modal-over-header");
                    }
                })
            }
        }
        
        
        /* Header */
        if ($(window).width() < 768) {
            $('.lmip-searchform input').attr('placeholder', 'Search Publications')
            $('.lmip-searchform .submit-btn input').attr('value', '')
        }

        $(window).resize(function() {
            if ($(window).width() < 768) {
                $('.lmip-searchform .submit-btn input').attr('value', '')
                $('.lmip-searchform input').attr('placeholder', 'Search Publications')
            }
            if ($(window).width() > 767) {
                $('.lmip-searchform .submit-btn input').attr('value', 'Search')
                $('.lmip-searchform input').attr('placeholder', 'Search Publications (Economy, Skills, Employment….)')
            }
        });
        
        
        
        
        
        
        
        if ($('map').length) {
            $('map').imageMapResize();

        }

        $('div.research-programe-item-wrap').each(function () {
            var $$_this = $(this)

            $$_this.find('.research-programe-item').on('mouseenter touch', function () {
                $$_this.find('.research-programe-item').removeClass('hovered');
                $(this).addClass('hovered');
            });
            $$_this.find('.research-programe-item').on('mouseleave touch', function () {
                $$_this.find('.research-programe-item').removeClass('hovered')
                $(this).removeClass('hovered');
            });
        })



        if($('#event-slider').length){
            $('#event-slider').slick({

                centerMode: true,
                centerPadding: '18px',
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                swipe: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 992,
                        settings: {
                            centerMode: true,
                            centerPadding: '18px',
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            swipe: true,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('#event-slider').slick('resize');
        });







        /*  event */
        if ($('.event-img-slider').length) {
            $('.event-img-slider').slick({

                arrows: true,
                infinite: true,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,

            });
            $(window).on('resize', function () {
                $('.event-img-slider').slick('resize');

            });
        }


        $(".event-img-slider").on("init reInit afterChange", function (event, slick) {
            $(".main-studio").html(
                slick.slickCurrentSlide() + 1 + " of " + slick.slideCount
            );
        });



        if ($('#slider-wrap').length) {
            $('#slider-wrap').slick({
                dots: false,
                arrows: true,
                autoplaySpeed: 2000,
                infinite: true,
                navigation: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '#slider-controller',
                draggable: false,
                swipe: false,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            dots: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: true,
                            directionNav: true,
                            arrows: true,
                            loop: false,
                            draggable: false,
                            swipe: false,
                            
                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('#slider-wrap').slick('resize');

            });
        }

        if ($('#slider-controller').length) {
            $('#slider-controller').slick({

                arrows: true,
                infinite: false,
                navigation: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '#slider-wrap',
                dots: false,
                centerMode: false,
                draggable: false,
                focusOnSelect: true,
                swipe: false,

                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            dots: true,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            arrows: false,
                            loop: false,
                            draggable: false,
                            swipe: false,
                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('#slider-controller').slick('resize');

            });
        }

        

        $('div.event-slider-item').click(function () {
            var $_this = $(this)
            var clickedIndex = $_this.attr('data-track') - 1

            console.log(clickedIndex)

            $('#slider-controller div.modal-slider-controller-item').eq(clickedIndex).click()
            $('#light-box-modal').addClass('modal-opened')
            $('body').addClass('modal-active')
        })

        $('.light-box-modal-slider .slick-next').click(function () {

            $('.event-img-slider .slick-next').click()
        })
        $('.light-box-modal-slider .slick-prev').click(function () {

            $('.event-img-slider .slick-prev').click()
        })

        $(".modal-cross").on("click", function () {
            $('#light-box-modal').removeClass('modal-opened')
            $('body').removeClass('modal-active')
        })



        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();

            $('.page-section').each(function (i) {
                if ($(this).position().top + 700 <= scrollDistance) {
                    $('.breadcrumb-item ul li a.breadcrumb-active').removeClass('breadcrumb-active ');
                    $('.breadcrumb-item ul li a').eq(i).addClass('breadcrumb-active ');
                }
            });
        }).scroll();

        $('.breadcrumb-item ul li a[href*="#"]:not([href="#"])').click(function () {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 110
                    }, 600);
                    return false;
                    
                }
               
            }
        });



        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();

            $('.page-section1').each(function (i) {
                if ($(this).position().top < scrollDistance) {
                    $('.about-lmip-modal .breadcrumb-item ul li a').removeClass('breadcrumb-active');
                    $('.about-lmip-modal .breadcrumb-item ul li a').removeClass('modal-breadcrumb-active');
                    $('.about-lmip-modal .breadcrumb-item ul li a').eq(i).addClass('modal-breadcrumb-active');
                }
            });
        }).scroll();

        $('.about-lmip-modal .breadcrumb-item ul li a[href*="#"]:not([href="#"])').click( function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 150
                    }, 600);
                    return false;
                }
            }
        });

        $(window).scroll(function() {
                if ($(this).scrollTop() >= 50) {
                    $('.about-breadcrumb').addClass('position-fixed');
                }
                else {
                    $('.about-breadcrumb').removeClass('position-fixed');
                }
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {
                $('.about-lmip-modal .breadcrumb-item').addClass('position-fixed');
            }
            else {
                $('.about-lmip-modal .breadcrumb-item').removeClass('position-fixed');
            }
        });

        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();

            $('.page-section').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.resources-list-item ul li a.list-active').removeClass('list-active');
                    $('.resources-list-item ul li a').eq(i).addClass('list-active');
                }
            });
        }).scroll();

        $('.resources-list-item ul li a[href*="#"]:not([href="#"])').click(function () {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 200
                    }, 600);
                    return false;
                }
            }
        });


        if ($(window).width() > 767) {
        $('.accordion-trigger').eq(0).addClass('accordion-active')
        $('.accordion-trigger .accordion-hide').eq(0).show()

        $('.accordion-trigger').eq(1).addClass('accordion-active')
        $('.accordion-trigger .accordion-hide').eq(1).show()
        $('.accordion-trigger').eq(2).addClass('accordion-active')
        $('.accordion-trigger .accordion-hide').eq(2).show()

        }

        
        if ($(window).width() < 768) {
            $('.accordion-trigger').eq(0).addClass('accordion-active')
            $('.accordion-trigger .accordion-hide').eq(0).show()
    
    
            }

        // Accordion Function
        $(".accordion-trigger").each(function () {
            
            var $this = $(this);
            $this.find(" > h5").on("click touch", function () {

                if ($(this).parent().hasClass('accordion-active')) {
                    $(this).parent().removeClass('accordion-active')
                    $(this).parent().find(".accordion-hide").slideUp();
                } else {
                    $(this).parent().addClass('accordion-active')
                    $(this).parent().find(".accordion-hide").slideDown();
                }
            })
        })
 
        if ($(window).width() < 767) {
            if ($('#latest-publications-slider').length) {
                $('#latest-publications-slider').slick({
                    dots: true,
                    arrows: false,
                    autoplaySpeed: 2000,
                    centerMode: true,
                    centerPadding: '18px',
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
                $(window).on('resize', function () {
                    $('#latest-publications-slider').slick('resize');
    
                });
            }
        };


        if ($(window).width() < 767) {
            if ($('.home-content #latest-publications').length) {
                $('.home-content #latest-publications').slick({
                    dots: true,
                    arrows: false,
                    autoplaySpeed: 2000,
                    centerMode: true,
                    centerPadding: '18px',
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
                $(window).on('resize', function () {
                    $('.home-content #latest-publications').slick('resize');
    
                });
            }
        };


        if($('#news-event-slider').length){
            $('#news-event-slider').slick({

                centerMode: true,
                centerPadding: '18px',
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                swipe: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 992,
                        settings: {
                            centerMode: true,
                            centerPadding: '18px',
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            swipe: true,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('#news-event-slider').slick('resize');
        });

        
        

        if($('#news-slider').length){
            $('#news-slider').slick({

                centerMode: true,
                centerPadding: '18px',
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                swipe: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 992,
                        settings: {
                            centerMode: true,
                            centerPadding: '18px',
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            swipe: true,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('#news-slider').slick('resize');
        });


        $('div.dropdown').each(function () {
            var $$_this = $(this)

            $$_this.find('label.dropdown-label').on("click touch", function () {
                $$_this.find('.dropdown-list').toggleClass('dropdown-expand');
                $(this).toggleClass('dropdown-active');
            });
        })



        /* selectric */
        if ($("select.selectric-short-by").length) {
            $("select.selectric-short-by").selectric({
                onChange: function (element) {
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        }
        if ($("select.selectric-all").length) {
            $("select.selectric-all").selectric({
                onChange: function (element) {
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        }
        if ($("select.selectric-topic").length) {
            $("select.selectric-topic").selectric({
                onChange: function (element) {
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        }
        /* selectric */

        if($('#latest-publications-slider').length){
            $('#latest-publications-slider').slick({

                centerMode: true,
                centerPadding: '18px',
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                swipe: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 992,
                        settings: {
                            centerMode: true,
                            centerPadding: '18px',
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            swipe: true,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('#latest-publications-slider').slick('resize');
        });




        
        
        
        
        
        
        
        
        
        
        
        
        

        if ($('#graph-slider ').length) {
            $('#graph-slider ').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                swipe: true,
                infinite: true,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('#graph-slider ').slick('resize');

            });
        };


        $('#selected-states > .selected-states-item').eq(0).addClass('graph-active')
        $('.graph-map-wrap area').eq(0).addClass('active')

        $(document).on('click', '#graph-slider .slick-prev', function (e) {
	   e.stopImmediatePropagation();
            var itemIndex = $(this).parents('#graph-slider').find('div.slick-track > div.graph-slider-item.slick-current').attr('data-slick-index')
            $('div.selected-states-item').removeClass('graph-active')
            $('div.selected-states-item').eq(itemIndex).addClass('graph-active')
        })

        $(document).on('click', '#graph-slider .slick-next', function (e) {
	    e.stopImmediatePropagation();
            var itemIndex = $(this).parents('#graph-slider').find('div.slick-track > div.graph-slider-item.slick-current').attr('data-slick-index')
            $('div.selected-states-item ').removeClass('graph-active')
            $('div.selected-states-item ').eq(itemIndex).addClass('graph-active')
            console.log(itemIndex)
        })


        $('.graph-map-wrap area').click(function (e) {
	    e.stopImmediatePropagation();
            e.preventDefault()
            var slideno = $(this).data('slide');
            if ($(this).hasClass('active')) return false
            else {
                $('#graph-slider').slick('slickGoTo', slideno - 1);
                $('.selected-states-item').removeClass('graph-active');
                $('.selected-states-item').eq(slideno - 1).addClass('graph-active');
                $('.graph-map-wrap area').removeClass('active')
                $(this).addClass('active')
            }

        });


        $('.graph-map-wrap area').each(function (i) {
            var $_this = $(this)
            $_this.mouseenter(function () {

                if ($(this).hasClass('active')) return false

                else {
                    $('.selected-states-item').removeClass('graph-hovered');
                    $('.selected-states-item').eq(i).addClass('graph-hovered');
                }

            });
            $_this.mouseleave(function () {
                if ($(this).hasClass('active')) return false
                else {
                    $('.selected-states-item').removeClass('graph-hovered');
                }
            });

        });


        if ($(window).width() > 768) {

        $(function (){
            $(".publications-page .latest-publications-item").slice(0, 8).show();
            $("body").on('click touchstart', '.latest-publications-btn > span', function (e) {
                e.preventDefault();
                $(".publications-page .latest-publications-item:hidden").slice(0, 8).slideDown();
                if ($(".publications-page .latest-publications-item:hidden").length == 0) {
                    $(".latest-publications-btn span").css('visibility', 'hidden');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1000);
            });
        });


        };

        if ($(window).width() < 768) {

        $(function (){
            $(".publications-page .latest-publications-item").slice(0, 4).show();
            $("body").on('click touchstart', '.latest-publications-btn > span', function (e) {
                e.preventDefault();
                $(".publications-page .latest-publications-item:hidden").slice(0, 2).slideDown();
                if ($(".publications-page .latest-publications-item:hidden").length == 0) {
                    $(".latest-publications-btn span").css('visibility', 'hidden');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1000);
            });
        });


        };


        if($('.resources-page .news-event-item-wrap').length){
            $('.resources-page .news-event-item-wrap').slick({

                centerMode: true,
                    centerPadding: '18px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    swipe: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 1000,
                    loop: false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 992,
                        settings: {
                            centerMode: true,
                            centerPadding: '18px',
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            swipe: true,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.resources-page .news-event-item-wrap').slick('resize');
        });
        



        $(window).resize(function() {
            if ($(window).width() < 768) {
                $('.lmip-searchform .submit-btn input').attr('value', '')
            }
            if ($(window).width() > 767) {
                $('.lmip-searchform .submit-btn input').attr('value', 'Search')
            }
        });



    }) // End ready function.






})(jQuery)