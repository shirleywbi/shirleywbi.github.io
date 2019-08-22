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
    let $grid;
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
            $grid = $('.alime-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    $('.more-projects').hide();

    // EFFECTS: Toggles view more or view less
    $('#view-more-projects').on('click', function () {
        let status = $('#view-more-projects').text();
        if (status.includes('View More')) {
            // Show more projects and scroll to auto-load
            $('.more-projects').show();
            $grid.masonry().append('').masonry('appended', '');
            window.scrollBy(0,1);
            setViewLess();
        } else {
            // Hide more projects
            $('.more-projects').hide();
            $grid.masonry().append('').masonry('appended', '');
            setViewMore();
        }
    });

    // EFFECTS: changes view more button to view less
    function setViewLess() {
        $('#view-more-projects').text('View Less');
    }
    // EFFECTS: changes view less button to view more
    function setViewMore() {
        $('#view-more-projects').text('View More');
    }

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
    let magnificPopup = $.magnificPopup.instance;

    if ($.fn.magnificPopup) {
        $('.video-play-btn').magnificPopup({
            type: 'iframe'
        });
        $('.single-portfolio-content').click(function () {
            let projects = [];
            let index = $(this).attr('project-order');
            $('.all-popups').find('.popup').each(function() {
                projects.push( {
                    src: this
                })
            })
            projects = bringFoward(projects, index);
            magnificPopup.open({
                items: projects,
                gallery: {
                    enabled: true
                }
            });
            $('#scrollUp').hide();
        });
    }

    magnificPopup.close = function () {
        $.magnificPopup.proto.close.call(this);
        $('#scrollUp').show();
    }

    $('.mfp-container').swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            console.log('swiping' + direction)
            magnificPopup.next();
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            magnificPopup.prev();
            console.log('swiping' + direction)
        }
    });

    // EFFECTS: Moves the selected element at index to the front of the array
    function bringFoward(arr, idx) {
        if (idx == 0) return arr;

        let temp = arr[idx];
        for (let i=idx; i>0; i--) {
            arr[i] = arr[i-1];
        }
        arr[0] = temp;
        return arr;
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
            scrollSpeed: 0,
            scrollText: '<a href="#welcome"><i class="fa fa-angle-up"</i></a>'
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);