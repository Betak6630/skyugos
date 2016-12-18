/**
 * AQPB js
 *
 * contains the core js functionalities to be used
 * inside AQPB
 */

jQuery.noConflict();

/** Fire up jQuery - let's dance! **/
jQuery(document).ready(function ($) {

    /** Variables 
	------------------------------------------------------------------------------------**/
    var min = $('#blocks-to-edit').width() / 12;
    var block_archive,
		block_number,
		parent_id,
		block_id,
		intervalId,
		resizable_args = {
		    grid: min,
		    handles: 'w,e',
		    maxWidth: $('#blocks-to-edit').width(),
		    minWidth: min,
		    resize: function (event, ui) {
		        ui.helper.css("height", "inherit");
		        ui.helper.css("top", 0);
		    },
		    stop: function (event, ui) {
		        ui.helper.css('left', ui.originalPosition.left);
		        ui.helper.removeClass(function (index, css) {
		            return (css.match(/\bspan\S+/g) || []).join(' ');
		        }).addClass(block_size($(ui.helper).css('width')));
		        ui.helper.find('> div > .size').val(block_size($(ui.helper).css('width')));
		        ui.helper.css('top', 0);

		    }
		},
		tabs_width = $('.aqpb-tabs').outerWidth(),
		mouseStilldown = false,
		max_marginLeft = 720 - Math.abs(tabs_width),
		activeTab_pos = $('.aqpb-tab-active').position(),
		act_mleft,
		$parent,
		$clicked;



    /** Functions 
	------------------------------------------------------------------------------------**/

    /** create unique id **/
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;


    }



    /** Get correct class for block size **/
    function block_size(width) {
        var span = "span12";

        width = parseInt(width);
        var widthAll = $('#blocks-to-edit').width();
        var span_IN = Math.round((width / widthAll) * 100);



        if (span_IN < 17) { span = "span2"; }
        else if (span_IN > 20 && span_IN < 26) { span = "span3"; }
        else if (span_IN > 30 && span_IN < 34) { span = "span4"; }
        else if (span_IN > 38 && span_IN < 42) { span = "span5"; }
        else if (span_IN > 47 && span_IN < 52) { span = "span6"; }
        else if (span_IN > 55 && span_IN < 59) { span = "span7"; }
        else if (span_IN > 62 && span_IN < 68) { span = "span8"; }
        else if (span_IN > 72 && span_IN < 76) { span = "span9"; }
        else if (span_IN > 80 && span_IN < 84) { span = "span10"; }
        else if (span_IN > 89 && span_IN < 92) { span = "span11"; }
        else if (span_IN > 93) { span = "span12"; }

        return span;
    }

    /** Blocks resizable dynamic width **/
    function resizable_dynamic_width(blockID) {
        var blockPar = $('#' + blockID).parent(),
			maxWidth = parseInt($(blockPar).parent().parent().css('width'));

        //set maxWidth for blocks inside columns
        if ($(blockPar).hasClass('default-column-clock')) {
            $('#' + blockID + '.ui-resizable').resizable("option", "maxWidth", maxWidth);
        }

        //set widths when the parent resized
        $('#' + blockID).bind("resizestop", function (event, ui) {
            if ($('#' + blockID).hasClass('block-aq_column_block')) {
                var $blockColumn = $('#' + blockID),
					new_maxWidth = parseInt($blockColumn.css('width'));
                child_maxWidth = new Array();

                //reset maxWidth for child blocks
                $blockColumn.find('ul.blocks > li').each(function () {
                    child_blockID = $(this).attr('id');
                    $('#' + child_blockID + '.ui-resizable').resizable("option", "maxWidth", new_maxWidth);
                    child_maxWidth.push(parseInt($('#' + child_blockID).css('width')));
                });

                //get maxWidth of child blocks, use it to set the minWidth for column
                var minWidth = Math.max.apply(Math, child_maxWidth);
                $('#' + blockID + '.ui-resizable').resizable("option", "minWidth", minWidth);
            }
        });

    }

    /** Update block order **/
    function update_block_order() {
        $('ul.blocks').each(function () {
            $(this).children('li.block').each(function (index, el) {
                $(el).find('.order').last().val(index + 1);

                if ($(el).parent().hasClass('column-blocks')) {
                    parent_order = $(el).parent().siblings('.order').val();
                    $(el).find('.parent').last().val(parent_order);

                } else {
                    $(el).find('.parent').last().val(0);
                    if ($(el).hasClass('block-aq_column_block')) {
                        block_order = $(el).find('.order').last().val();
                        $(el).find('li.block').each(function (index, elem) {
                            $(elem).find('.parent').val(block_order);
                        });
                    }
                }

            });
        });
    }

    /** Update block number **/
    function update_block_number() {
        $('ul.blocks li.block').each(function (index, el) {
            $(el).find('.number').last().val(index + 1);
        });
    }

    function columns_sortable() {
        //$('ul#blocks-to-edit, .block-aq_column_block ul.blocks').sortable('disable');
        $('#page-builder .column-blocks').sortable({
            placeholder: 'placeholder',
            connectWith: '#blocks-to-edit, .column-blocks',
            items: 'li.block'
        });
    }

    /** Menu functions **/
    function moveTabsLeft() {
        if (max_marginLeft < $('.aqpb-tabs').css('margin-left').replace("px", "")) {
            $('.aqpb-tabs').animate({ 'marginLeft': ($('.aqpb-tabs').css('margin-left').replace("px", "") - 21) + 'px' },
			1,
			function () {
			    if (mouseStilldown) {
			        moveTabsLeft();
			    }
			});
        }
    }

    function moveTabsRight() {
        if ($('.aqpb-tabs').css('margin-left').replace("px", "") < 0) {
            $('.aqpb-tabs').animate({ 'marginLeft': Math.abs($('.aqpb-tabs').css('margin-left').replace("px", "")) * (-1) + 21 + 'px' },
			1,
			function () {
			    if (mouseStilldown) {
			        moveTabsRight();
			    }
			});
        }
    }

    function centerActiveTab() {
        if ($('.aqpb-tab-active').hasClass('aqpb-tab-add')) {
            act_mleft = 690 - $('.aqpb-tab-active').position().left - $('.aqpb-tab-active').width();
            $('.aqpb-tabs').css('margin-left', act_mleft + 'px');
        } else
            if (720 < activeTab_pos.left) {
                act_mleft = 730 - activeTab_pos.left;
                $('.aqpb-tabs').css('margin-left', act_mleft + 'px');
            }
    }

    /** Actions
	------------------------------------------------------------------------------------**/
    /** Apply CSS float:left to blocks **/
    $('li.block').css('float', 'none');

    /** Open/close blocks **/
    $(document).on('click', '#page-builder a.block-edit', function () {
        var element = $(this).attr('id');
        if ($('#' + element).hasClass('inner')) {
            var blockID = $(this).parents('.description.prebuild').attr('id')
        }
        else {
            var blockID = $(this).parents('li').attr('id');
        }

        $('#' + blockID + ' > .block-settings').slideToggle('fast');

        if ($('#' + blockID).hasClass('block-edit-active') == false) {
            $('#' + blockID).addClass('block-edit-active');
            if ($('.block-edit-active').find('#shortcodes').hasClass('shortcodes')) {
                tinymce.init({
                    selector: '.block-edit-active .pmc-editor',
                    width: '100%',
                    height: 200,
                    convert_urls: false,
                    force_br_newlines: false,
                    force_p_newlines: false,
                    forced_root_block: '',

                    plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table contextmenu paste textcolor"
                    ],
                    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image| forecolor backcolor emoticons"

                });
            }
        } else {
            $('#' + blockID).removeClass('block-edit-active');
        };

        return false;
    });



    /** Blocks resizable **/
    $('ul.blocks li.block').each(function () {
        var blockID = $(this).attr('id'),
			blockPar = $(this).parent();

        //blocks resizing
        $('#' + blockID).resizable(resizable_args);

        //set dynamic width for blocks inside columns
        resizable_dynamic_width(blockID);


        //trigger resize
        $('#' + blockID).trigger("resize");
        $('#' + blockID).trigger("resizestop");

        //disable resizable on .not-resizable blocks
        $(".ui-resizable.not-resizable").resizable("destroy");

    });

    /** Blocks draggable (archive) **/
    $('#blocks-archive > li.block').each(function () {
        $(this).draggable({
            connectToSortable: "#blocks-to-edit, .prebuild",
            helper: 'clone',
            revert: 'invalid',
            create: function (event, ui) {

            },
            start: function (event, ui) {
                $(ui.helper).hide();
                $(ui.helper).addClass("ui-draggable-helper");
                block_archive = $(this).attr('id');

                setTimeout(
				function () { $(ui.helper).show(); }
				, 30);
                $(ui.helper).removeClass('isotope-item');


            }
        });
    });

    /** Blocks sorting (settings) **/
    $('#blocks-to-edit, .prebuild').sortable({
        placeholder: "placeholder",
        handle: '.block-handle, .block-settings-column, .prebuild',
        connectWith: '#blocks-archive, .column-blocks',
        items: 'li.block'
    });

    /** Columns Sortable **/
    columns_sortable();

    /** Sortable bindings **/
    $("ul.blocks").bind("sortstart", function (event, ui) {
        ui.placeholder.css('width', ui.helper.css('width'));
        ui.placeholder.css('height', (ui.helper.css('height').replace("px", "") - 13) + 'px');
        $('.empty-template').remove();
    });

    $("ul.blocks, ul.prebuild").bind("sortstop", function (event, ui) {

        //if coming from archive
        if (ui.item.hasClass('ui-draggable')) {


            //remove draggable class
            ui.item.removeClass('ui-draggable');
            ui.item.removeClass('isotope-item');

            //set random block id
            block_number = makeid();

            //replace id
            ui.item.html(ui.item.html().replace(/<[^<>]+>/g, function (obj) {
                return obj.replace(/__i__|%i%/g, block_number)
            }));

            ui.item.attr("id", block_archive.replace("__i__", block_number));
            var block_id = 'aq_block_' + block_number + '_text';

            setTimeout(function () {
                jQuery('.mceEditor').css('width', '100%').css('minHeight', '240px');
                jQuery('.mceLayout').css('width', '100%').css('minHeight', '240px');
                jQuery('.mceIframeContainer').css('width', '100%').css('minHeight', '240px');
                jQuery('#' + block_id + '_ifr').css('width', '100%').css('minHeight', '240px');
            }, 500)


            tinymce.init({
                selector: "textarea#" + block_id,
                width: '100%',
                height: 200,
                convert_urls: false,
                force_br_newlines: false,
                force_p_newlines: false,
                forced_root_block: '',

                plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table contextmenu paste textcolor"
                ],
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image| forecolor backcolor emoticons"

            });


            /*add number*/
            ui.item.addClass('prebuild-drop');
            $('.prebuild-column-wrapper.prebuild-drop .description.prebuild input').each(function () {
                var change = $(this).attr('name');
                if (typeof change !== 'undefined') {
                    var new_string = change.replace('aq_blocks[aq_block_1]', 'aq_blocks[aq_block_' + block_number + ']');
                    var change = $(this).attr('name', new_string);
                }
            })

            //if column, remove handle bar
            if (ui.item.hasClass('block-aq_column_block-normal')) {
                ui.item.find('.block-bar').remove();
                ui.item.find('.block-settings').removeClass('block-settings').addClass('block-settings-column');
            }


            if ((ui.item.parent('.prebuild-column').length && ui.item.hasClass('block-aq_column_block')) || (ui.item.parent('.column-blocks').length && ui.item.hasClass('block-aq_column_block'))) {
                alert("You can't add columns to this block!");
                ui.item.remove();

            }


            //init resize on newly added block
            ui.item.resizable(resizable_args);

            //set dynamic width for blocks inside columns
            resizable_dynamic_width(ui.item.attr('id'));

            //trigger resize
            ui.item.trigger("resize");
            ui.item.trigger("resizestop");

            //open on drop
            ui.item.find('a.block-edit').click();

            $('#' + block_id).attr('class', 'full pmc-editor pmc-editor-' + block_id);





            //disable resizable on .not-resizable blocks
            $(".ui-resizable.not-resizable").resizable("destroy");

        }

        //if moving column inside column, cancel it
        /*if(ui.item.hasClass('block-aq_column_block')) {
			if(ui.item.parent().hasClass('column-blocks')) { 
				$(this).sortable('cancel');
				return false;
			}
			columns_sortable();
		}*/
        columns_sortable();
        //@todo - resize column to maximum width of dropped item	
        //update order & parent ids
        update_block_order();

        //update number
        update_block_number();
        //if add id to aray prebuild item


        //if add id to aray prebuild item
        if (ui.item.find('.aq-sortable-list').length) {
            ui.item.find('.aq-sortable-list').each(function () {
                var name = '';
                var id = $(this).attr('rel');
                var element = $(this).attr('id');
                var name = $(this).attr('alt');
                $(this).addClass('current');
                $('.current input').each(function () {
                    var change = $(this).attr('name');
                    if (typeof change !== 'undefined') {
                        if (change.indexOf("aq_blocks") == -1) {
                            var new_string = 'aq_blocks[' + id + '][' + name + ']' + change;
                            var old_id = $(this).attr('id');
                            var new_id = id + '_' + name + old_id;
                            $(this).attr('name', new_string);
                            $(this).attr('id', new_id);
                        }
                    }
                });
                $(this).removeClass('current');
                $(this).addClass('done');
            });
        }
    });
    jQuery('.aq-sortable-list').each(function () {
        if (jQuery(this).find('.done').length == 0) {
            var name = '';
            var id = $(this).attr('rel');
            var element = $(this).attr('id');
            var name = $(this).attr('alt');
            $(this).addClass('current');
            $('.current input').each(function () {
                var change = $(this).attr('name');
                if (typeof change !== 'undefined') {
                    if (change.indexOf("aq_blocks") == -1) {
                        var new_string = 'aq_blocks[' + id + '][' + name + ']' + change;
                        var old_id = $(this).attr('id');
                        var new_id = id + '_' + name + old_id;
                        $(this).attr('name', new_string);
                        $(this).attr('id', new_id);
                    }
                }
            });
            $(this).removeClass('current');
        }
    });



    /** Blocks droppable (removing blocks) **/
    $('#page-builder-archive').droppable({
        accept: "#blocks-to-edit .block, .prebuild .block",
        tolerance: "pointer",
        over: function (event, ui) {
            $(this).find('#removing-block').fadeIn('fast');
            ui.draggable.parent().find('.placeholder').hide();
        },
        out: function (event, ui) {
            $(this).find('#removing-block').fadeOut('fast');
            ui.draggable.parent().find('.placeholder').show();
        },
        drop: function (ev, ui) {
            ui.draggable.remove();
            $(this).find('#removing-block').fadeOut('fast');
        }
    });

    /** Delete Block (via "Delete" anchor) **/
    $(document).on('click', '.block-control-actions a', function () {
        $clicked = $(this);
        $parent = $(this.parentNode.parentNode.parentNode);

        if ($clicked.hasClass('delete')) {
            $parent.find('> .block-bar .block-handle').css('background', 'red');
            $parent.slideUp(function () {
                $(this).remove();
                update_block_order();
                update_block_number();
            }).fadeOut('fast');
        } else if ($clicked.hasClass('close')) {
            $parent.find('> .block-bar a.block-edit').click();
        }
        return false;
    });

    /** Disable blocks archive if no template **/
    $('#page-builder-column.metabox-holder-disabled').click(function () { return false })
    $('#page-builder-column.metabox-holder-disabled #blocks-archive .block').draggable("destroy");

    /** Confirm delete template **/
    $('a.template-delete').click(function () {
        var agree = confirm('You are about to permanently delete this template. \'Cancel\' to stop, \'OK\' to delete.');
        if (agree) {
            return


        } else { return false }
    });

    /** Cancel template save/create if no template name **/
    $('#save_template_header, #save_template_footer, #save_template_fixed').click(function () {
        var template_name = $('#template-name').val().trim();
        if (template_name.length === 0) {
            $('.major-publishing-actions .open-label').addClass('form-invalid');
            return false;
        }
    });

    $('.template-duplicate').click(function () {
        $('#action').attr('value', 'copy');
        document.forms["update-page-template"].submit();

    });
    $('#update-page-template').on('submit', function (e) {
        //document.forms["update-page-template"].submit();
        //alert($("#update-page-template").serialize());
        if ($('#action').attr('value') != 'create') {
            tinyMCE.triggerSave();
            e.preventDefault();
            $('#saving-bar').show();
            $.ajax({
                url: $('#pmc-plugin-url').attr('value') + "save.php",
                type: 'post',
                data: $("#update-page-template").serialize(),
                success: function (d) {
                    $('#saving-bar').html('<i class="fa fa-smile-o"></i><br><span>Saved!</span>');
                    $('#saving-bar').delay(1500).fadeOut(300);
                    $('.block-edit-active > .block-settings').slideToggle('fast');
                    $('.block-edit-active').removeClass('block-edit-active');
                    if ($('.live-preview-iframe').is(':visible')) {
                        var rand = Math.random();
                        $('#iframe').attr('src', $('#pmc-plugin-url-live').attr('value') + '&' + rand);
                    }

                },
                error: function (d) {
                    $('#saving-bar').html('<i class="fa fa-frown-o"></i><br><span>Error!</span>');
                    $('#saving-bar').delay(1500).fadeOut(300);
                    $('.block-edit-active > .block-settings').slideToggle('fast');
                    $('.block-edit-active').removeClass('block-edit-active');

                }
            });
        }
        else {
            document.forms["update-page-template"].submit();
        }
    });

    $('#save_template_fixed	').on('click', function (e) {
        tinyMCE.triggerSave();
        e.preventDefault();
        $('#saving-bar').show();
        $.ajax({
            url: $('#pmc-plugin-url').attr('value') + "save.php",
            type: 'post',
            data: $("#update-page-template").serialize(),
            success: function (d) {
                $('#saving-bar').html('<i class="fa fa-smile-o"></i><br><span>Saved!</span>');
                $('#saving-bar').delay(1500).fadeOut(300);
                $('.block-edit-active > .block-settings').slideToggle('fast');
                $('.block-edit-active').removeClass('block-edit-active');
                if ($('.live-preview-iframe').is(':visible')) {
                    var rand = Math.random();
                    $('#iframe').attr('src', $('#pmc-plugin-url-live').attr('value') + '&' + rand);
                }
            },
            error: function (d) {
                $('#saving-bar').html('<i class="fa fa-frown-o"></i><br><span>Error!</span>');
                $('#saving-bar').delay(1500).fadeOut(300);
                $('.block-edit-active > .block-settings').slideToggle('fast');
                $('.block-edit-active').removeClass('block-edit-active');

            }
        });


    });

    $(document).on('click', '.live-preview-button', function () {
        var rand = Math.random();
        if ($('.live-preview-iframe').is(':hidden')) {
            $('#iframe').attr('src', $('#pmc-plugin-url-live').attr('value') + '&' + rand);
            $('.fa-chevron-up').show();
            $('.fa-chevron-down').hide()
        }
        else {
            $('.fa-chevron-down').show();
            $('.fa-chevron-up').hide();
        }
        $('.live-preview-iframe').slideToggle('fast');
    });



    /** Nav tabs scrolling **/
    if (720 < tabs_width) {
        $('.aqpb-tabs-arrow').show();
        centerActiveTab();
        $('.aqpb-tabs-arrow-right a').mousedown(function () {
            mouseStilldown = true;
            moveTabsLeft();
        }).bind('mouseup mouseleave', function () {
            mouseStilldown = false;
        });

        $('.aqpb-tabs-arrow-left a').mousedown(function () {
            mouseStilldown = true;
            moveTabsRight();
        }).bind('mouseup mouseleave', function () {
            mouseStilldown = false;
        });

    }

    /** Sort nav order **/
    $('.aqpb-tabs').sortable({
        items: '.aqpb-tab-sortable',
        axis: 'x',
    });

    /** Apply CSS float:left to blocks **/
    $('li.block').css('float', '');

    /** prompt save on page change **
	var aqpb_html = $('#update-page-template').html();
	$(window).bind('beforeunload', function(e) {
		var aqpb_html_new = $('#update-page-template').html();
		if(aqpb_html_new != aqpb_html) { 
			return "The changes you made will be lost if you navigate away from this page.";
		}
	}); */

    // what fish?
    $('.help-iniside i').click(function () {
        $('.help-iniside .help-iniside-text').empty();
        $('.help-iniside').css('display', 'none');

    });




    $('.inside .help').click(function () {
        var id = $(this).attr('id');
        var text = $('.inside .help-text-' + id).html()
        $('.help-iniside .help-iniside-text').empty();
        $('.help-iniside .help-iniside-text').html(text);
        $('.help-iniside').css('display', 'block');

    });

    $('.show-column').click(function () {
        $('#page-builder-column').css('display', 'block');

    });

    $('.builder-button').click(function () {
        jQuery("#page-builder-column").addClass('page-builder-column-fixed');
        jQuery(".builder-button.close").fadeIn(0);

    });

    jQuery('.shortcode-help').click(function () {
        return false;
    });

    $('.builder-button.close').click(function () {
        jQuery("#page-builder-column").removeClass('page-builder-column-fixed');
        jQuery(".builder-button.close").fadeOut(0);
    });



    jQuery("#aqpb-body .block-aq_start_content_block").each(function () {
        jQuery(this).attr('style', 'backgroud:#eee; border-top:4px solid; margin-top:20px');
        jQuery(this).find('.block-bar').css('margin-top', '0')
        var next = jQuery(this).next();

        if (jQuery('.block-aq_end_content_block').size() == 1) { return; }
        var end_style = next.attr('class');
        if (next.next().length > 0) {
            while (end_style.search("block-aq_end_content_block") == -1) {
                end_style = next.attr('class');
                next.css('background', '#eee');
                next = next.next();

            }
            next.prev().attr('style', 'backgroud:#eee; border-bottom:4px solid;margin-bottom:20px');
        }




    });

    jQuery("#aqpb-body .Prebuild").each(function () {
        jQuery(this).attr('style', ' border-top:4px solid; border-bottom:4px solid; margin-top:12px;margin-bottom:10px');
        jQuery(this).find('.block-bar').css('margin-top', '0')


    });




});

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 550) {

        jQuery(".show-column").fadeIn(250);

    }
    else {
        jQuery("#page-builder-column").removeClass('page-builder-column-fixed');
        jQuery(".show-column").fadeOut(250);
        jQuery(".builder-button.close").fadeOut(0);
    }
});


/**
 * Fields JS
 *
 * JS functionalities for some of the default fields
 */
jQuery(document).ready(function ($) {
    /** Colorpicker Field
	----------------------------------------------- */
    function aqpb_colorpicker() {
        $('#page-builder .input-color-picker').each(function () {
            var $this = $(this),
				parent = $this.parent();

            $this.wpColorPicker();
        });
    }

    aqpb_colorpicker();

    $('ul.blocks').bind('sortstop', function () {
        aqpb_colorpicker();
    });

    /** Media Uploader
	----------------------------------------------- */
    $(document).on('click', '.aq_upload_button', function (event) {
        var $clicked = $(this), frame,
			input_id = $clicked.prev().attr('id'),
			media_type = $clicked.attr('rel');

        event.preventDefault();

        // If the media frame already exists, reopen it.
        if (frame) {
            frame.open();
            return;
        }

        // Create the media frame.
        frame = wp.media.frames.aq_media_uploader = wp.media({
            // Set the media type
            library: {
                type: media_type
            },
            view: {

            }
        });

        // When an image is selected, run a callback.
        frame.on('select', function () {
            // Grab the selected attachment.
            var attachment = frame.state().get('selection').first();

            $('#' + input_id).val(attachment.attributes.url);

            if (media_type == 'image') $('#' + input_id).parent().parent().parent().find('.screenshot img').attr('src', attachment.attributes.url);

        });
        frame.open();

    });

    /** Sortable Lists
	----------------------------------------------- */
    // AJAX Add New <list-item>
    function aq_sortable_list_add_item(action_id, items) {

        var blockID = items.attr('rel'),
			numArr = items.find('li').map(function (i, e) {
			    return $(e).attr("rel");
			});

        var maxNum = Math.max.apply(Math, numArr);
        if (maxNum < 1) { maxNum = 0 };
        var newNum = maxNum + 1;

        var data = {
            action: 'aq_block_' + action_id + '_add_new',
            security: $('#aqpb-nonce').val(),
            count: newNum,
            block_id: blockID
        };

        $.post(ajaxurl, data, function (response) {
            var check = response.charAt(response.length - 1);

            //check nonce
            if (check == '-1') {
                alert('An unknown error has occurred');
            } else {
                items.append(response);
            }

        });
    };

    // Initialise sortable list fields
    function aq_sortable_list_init() {
        $('.aq-sortable-list').sortable({
            containment: "parent",
            placeholder: "ui-state-highlight"
        });
    }
    aq_sortable_list_init();

    $('ul.blocks').bind('sortstop', function () {
        aq_sortable_list_init();
    });


    $(document).on('click', 'a.aq-sortable-add-new', function () {
        var action_id = $(this).attr('rel'),
			items = $(this).parent().children('ul.aq-sortable-list');

        aq_sortable_list_add_item(action_id, items);
        aq_sortable_list_init
        return false;
    });

    // Delete Sortable Item
    $(document).on('click', '.aq-sortable-list a.sortable-delete', function () {
        var $parent = $(this.parentNode.parentNode.parentNode);
        $parent.children('.block-tabs-tab-head').css('background', 'red');
        $parent.slideUp(function () {
            $(this).remove();
        }).fadeOut('fast');
        return false;
    });

    // Open/Close Sortable Item
    $(document).on('click', '.aq-sortable-list .sortable-handle a', function () {
        var $clicked = $(this);

        $clicked.addClass('sortable-clicked');

        $clicked.parents('.aq-sortable-list').find('.sortable-body').each(function (i, el) {
            if ($(el).is(':visible') && $(el).prev().find('a').hasClass('sortable-clicked') == false) {
                $(el).slideUp();
            }
        });
        $(this.parentNode.parentNode.parentNode).children('.sortable-body').slideToggle();

        $clicked.removeClass('sortable-clicked');

        return false;
    });



});