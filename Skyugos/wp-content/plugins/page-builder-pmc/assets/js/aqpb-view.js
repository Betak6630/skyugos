﻿/**
 * Front-end js for Aqua Page Builder blocks
 */
/** Fire up jQuery - let's dance! */
jQuery(document).ready(function ($) {


    /** Tabs & Toggles
	-------------------------------*/
    // Tabs
    if (jQuery().tabs) {
        $(".aq_block_tabs").tabs({
            show: true
        });
    }

    // Toggles
    $('.aq_block_toggle .tab-head, .aq_block_toggle .arrow, .aq_block_faq .tab-head').each(function () {
        var toggle = $(this).parent();

        $(this).click(function () {
            toggle.find('.tab-body').slideToggle();
            return false;
        });

    });

    // Accordion
    $(document).on('click', '.aq_block_accordion_wrapper .tab-head, .aq_block_accordion_wrapper .arrow', function () {
        var $clicked = $(this);

        $clicked.addClass('clicked');

        $clicked.parents('.aq_block_accordion_wrapper').find('.tab-body').each(function (i, el) {
            if ($(el).is(':visible') && ($(el).prev().hasClass('clicked') || $(el).prev().prev().hasClass('clicked')) == false) {
                $(el).slideUp();
            }
        });

        $clicked.parent().children('.tab-body').slideToggle();

        $clicked.removeClass('clicked');

        return false;
    });

    /*acordion*/
    if (jQuery('.accordion').length > 0) {
        jQuery(".accordion").accordion({
            autoHeight: false,
            navigation: true
        });
    }

    /*progress bar*/
    if (jQuery('.progressbar').length > 0) {
        jQuery(".progressbar").progressbar();
    }


    /*toogle*/
    jQuery(".toggle_container").hide();
    jQuery("h2.trigger").click(function () {
        jQuery(this).toggleClass("active").next().slideToggle("slow");
    });


    /*tabs*/
    jQuery(".tabs").tabs();


    /*animate css*/
    jQuery(".pmc-animated").each(function () {
        var id = jQuery(this).attr('id');
        if (jQuery("#" + id).isOnScreen()) { }
        else {
            jQuery("#" + id).removeClass('animated');
        };
    });

    jQuery(window).scroll(function () {
        jQuery(".pmc-animated").each(function () {
            var id = jQuery(this).attr('id');
            if (jQuery("#" + id).isOnScreen()) {
                jQuery("#" + id).addClass('animated');
            }
        });
    });

    /*block team hover*/
    jQuery(".team .social div").each(function () {
        var back = jQuery(this).attr('style');
        if (typeof (back) != 'undefined') {
            var backC = back.split(":");
            jQuery(this).find('a').hover(function () {
                jQuery(this).attr('style', 'background:' + backC[1] + ' !important');
            },
			function () {
			    jQuery(this).attr('style', '');
			});
        }

    });

    /*animate number*/
    function animateValue(id, start, end, duration) {
        var range = end - start;
        var current = start;

        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = jQuery(id);
        var timer = setInterval(function () {
            if (current < (end - 20) && end > 1000) {
                current += 20;
                jQuery(".number-animate").css('opacity', 1);
            }
            if (current < (end - 2) && end < 999) {
                current += 2;
                jQuery(id).css('opacity', 1);
            }
            else {
                current += increment;
            }
            obj.html(current);
            if (current == end) {
                var number = end;
                if (end > 999) {
                    var number1 = end.toString().substr(0, 1);
                    var number2 = end.toString().substr(1, 9);
                    var number = number1 + ',' + number2;
                }
                if (end > 9999) {
                    var number1 = end.toString().substr(0, 2);
                    var number2 = end.toString().substr(2, 9);
                    var number = number1 + ',' + number2;
                }
                obj.html(number);
                clearInterval(timer);

            }
        }, stepTime);
    }


    jQuery(".number-animate").each(function () {
        var numberIn = jQuery(this).attr('id');
        if (jQuery("#" + numberIn).isOnScreen()) {
            animateValue('#' + numberIn, 0, parseInt(jQuery('#' + numberIn).html()), 6000);
            jQuery("#" + numberIn).addClass('done');
        }
    });

    jQuery(window).scroll(function () {
        jQuery(".number-animate").each(function () {
            var numberIn = jQuery(this).attr('id');
            if (jQuery("#" + numberIn).isOnScreen() && !jQuery("#" + numberIn).hasClass('done')) {
                jQuery("#" + numberIn).addClass('done');
                animateValue('#' + numberIn, 0, parseInt(jQuery('#' + numberIn).html()), 6000);
            }
        });
    });

    /*animate scroll to button*/

    jQuery('.pmc-button').click(function () {
        var href = jQuery(this).find('a').attr('href');
        if (href.indexOf('#') !== -1) {
            jQuery("html, body").animate({ scrollTop: jQuery(href).offset().top - 90 }, 1000);
            return false;
        }

    });

    jQuery('.image iframe').hide();

});

window.onload = function () {
    jQuery(".pmc_rain").each(function () {
        var id = jQuery(this).attr('id');
        var height = jQuery('#' + id).outerHeight();
        var id_image = id.replace("_canvas", "");
        var image = document.getElementById(id_image);

        image.onload = function () {

            var engine = new RainyDay({
                parentElement: document.getElementById(id),
                image: this,
                height: height
            });
            engine.rain([[1, 2, 8000]]);
            engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 100);
        };
        image.crossOrigin = 'anonymous';
        image.src = jQuery(this).find('#pmc_rain_img').attr('value');
        jQuery('#' + id_image).attr('height', height + 'px')
    });


};