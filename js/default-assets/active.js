(function ($) {
    'use strict';

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    $(window).on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#alimeNav').classyNav();
    }

    // *********************************
    // :: 5.0 Masonary Gallery Active Code
    // *********************************

    if ($.fn.imagesLoaded) {
        $('.alime-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.alime-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // EFFECTS: loads more projects, resizes the section, and hides show more button
    $('#view-more-projects').on('click', function () {
        // Loads more projects
        $('.more-projects').removeClass('hide');
        
        // Resizes the section
        let currHeight = $('#alime-portfolio').height();
        let maxHeight = Math.max.apply(null, $('.more-projects').map(function () {
            return $(this).height();
        }).get());
        $('#alime-portfolio').height(currHeight + maxHeight);
        
        // Hides show more button
        $('#view-more-projects').hide('slow');
    });

    // ***********************************
    // :: 5.9 NavBar Active Code
    // ***********************************
    
    // Dynamic changes for navigation bar
    $(window).on('scroll', function () {
        let scrollOffset = $(window).scrollTop();
        let navHeight = $('.classy-nav-container').height();
        let welcomeSection = $('#welcome').offset().top;
        let projectSection = $('#projects').offset().top - navHeight;
        let aboutSection = $('#about-me').offset().top - navHeight;
        let contactSection = $('#contact-us').offset().top;
        
        let scrollHeight = $(document).height();
        let scrollPosition = $(window).height() + $(window).scrollTop();
        let bottom = (scrollHeight - scrollPosition) === 0;

        $('#nav li').removeClass('active');
        if (bottom) {
            $('#nav-contact').addClass('active');
        } else if (scrollOffset >= 0 && scrollOffset < projectSection) {
            $('#nav-welcome').addClass('active');
        } else if (scrollOffset >= projectSection && scrollOffset < aboutSection) {
            $('#nav-projects').addClass('active');
        } else if (scrollOffset >= aboutSection && scrollOffset < contactSection) {
            $('#nav-about').addClass('active');
        } else {
            $('#nav-contact').addClass('active');
        } 
    });    

    // ***********************************
    // :: 6.0 Portfolio Button Active Code
    // ***********************************
    
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // ********************************
    // :: 7.0 Search Button Active Code
    // ********************************
    $('.search-btn').on('click', function () {
        $('.search-form').toggleClass('search-form-active');
    })

    // ************************
    // :: 8.0 Stick Active Code
    // ************************

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });

    // *********************************
    // :: 9.0 Magnific Popup Active Code
    // *********************************
    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
        // $('.single-portfolio-content').magnificPopup({
        //     delegate: 'a',
        //     type: 'image',
        //     gallery: {
        //         enabled: true,
        //         preload: [0, 2],
        //         navigateByImgClick: true,
        //         tPrev: 'Previous',
        //         tNext: 'Next'
        //     }
        // });
        $('.single-portfolio-content').click(function () {
            let items = [];
            let titles = [];
            $(this).find('.hover-text').each(function() {
                titles.push( {
                    title: this.textContent
                });
            });
           console.log(titles)
           let test = [ { src: $("<div>" + titles[0].title + "</div>")}]
            $.magnificPopup.open({
                items: test,
                gallery: {
                    enabled: true
                }
            });          
        });
    }

    // Styling Code for Slider Contents
    function stylingSlider() {
        // TODO
    }

    // **************************
    // :: 10.0 Tooltip Active Code
    // **************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if ($(window).width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.5
        });
    }

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        $(window).scrollUp({
            scrollSpeed: 1000,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);