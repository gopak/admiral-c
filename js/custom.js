$(document).ready(function () {
    setTimeout(function(){

        $('.navbar-toggle').click(function () {
            $('body').toggleClass('offcanvas-open');
        });
        $('.offcanvas-fade').click(function () {
            $('body').removeClass('offcanvas-open');
        });        
        
        $(".mobile-nav-list label").on("click", function(e) {
            var $input = $("#" + $(this).attr("for"));
            if ($input.prop("checked")) {
                e.preventDefault();
                $input.prop("checked", false);
            }
        });

        $('[data-carousel-publication]').owlCarousel({
            margin: 15,
            nav: true,
            dots: false,
            lazyLoad: true,
            responsive: {
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

        $('[data-carousel-product]').owlCarousel({
            margin: 15,
            nav: true,
            dots: false,
            lazyLoad: true,
            responsive: {
                0:{
                    items:1
                },
                490: {
                    items:2
                },
                730:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

        $('[data-carousel-banner]').owlCarousel({
            items:1,
            nav: false,
            dots: true,
            lazyLoad: true,
            animateOut: 'fadeOut',
            loop: true,
            // autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true,
            autoHeight: true
        });

        $('[data-toggle="popover"]').popover({
            html : true
        });

        /**
         * Show/Hide block
         *
         * Base HTML:
         * <div>
         *     Main content
         *     <div class="d_n" data-show-hide-text>
         *         Hide content
         *     </div>
         *     <div
         *          data-show-hide-button
         *          data-show-text="Button show text"
         *          data-hide-text="Button hide hide"
         *     >
         *          Button show text
         *     </div>
         * </div>
         *
         * Default value:
         *      data-show-text - 'See More'
         *      data-hide-text - 'See Less'
         *
         */

        $('[data-show-hide-button]').on('click', function(e) {
            var $toggler = $(this);

            toggleBlock(getContinueTextElement($toggler));
            $toggler.text(getTogglerText($toggler));
            $toggler.toggleClass('hide');
        });

        function toggleBlock($block) {
            $block.slideToggle(300);
        }

        function getContinueTextElement($toggler) {
            return $toggler.parent().find('[data-show-hide-text]');
        }

        function getTogglerText($toggler) {
            var showText = $toggler.data('showText') || 'Смотреть больше',
                hideText = $toggler.data('hideText') || 'Скрыть';

            return $toggler.text() == showText
                ? hideText
                : showText;
        }
        
        //

        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        $('[data-autocomplete]').autocomplete({
            source: availableTags
        });

        /*$(".scroll-box").mCustomScrollbar({
            axis:"y"
        });*/
       
    }, 2000);
});
