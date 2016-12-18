function returnShortcodeValue(shortcode, id) {
    var shop = jQuery('#pmc-show-shop').attr('value');
    switch (shortcode) {
        case "one_half":
            out = "half,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "one_half_last":
            out = "half_last,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "one_third":
            out = "one_third,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "one_third_last":
            out = "one_third_last,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "two_thirds":
            out = "two_thirds,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "two_thirds_last":
            out = "two_thirds_last,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "one_fourth":
            out = "one_fourth,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "one_fourth_last":
            out = "one_fourth_last,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "three_fourths":
            out = "three_fourths,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "three_fourths_last":
            out = "three_fourths_last,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "one_fifth":
            out = "one_fifth,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "one_fifth_last":
            out = "one_fifth_last,content|input_content_textarea|<p>Your content here...</p>";
            break;
        case "accordion":
            out = "accordion,content|input-content-append-accordion|New option content"
            break;
        case "tabs":
            out = "tabgroup,content|input-content-append-tab|New option content"
            break;
        case "toggle":
            out = "toggle,title|input|Title|Toogle title,content|input_content_textarea|Your content here";
            break;
        case "progressbar":
            out = "progressbar,progress|input|Progress|30,color|color|Color|#fff,content|input_content|Your content here";
            break;
        case "pmc_progress_circle":
            out = "pmc_progress_circle,progress|input|Progress|30,radius|input|Radius|60,background_color|color|Background color|#000,border_color|color|Border color|#000,progress_border|color|Progress border color|#000,content|input_content|Your content";
            break;
        case "break":
            out = "break";
            break;
        case "break_line":
            out = "break_line,border_color|color|Color";
            break;
        case "dropcap":
            out = "dropcap,content|input_content|Your content here";
            break;
        case "list_comment":
            out = "list_comment,content|input-content-append-list|New option content|list item..."
            break;
        case "list_circle":
            out = "list_circle,content|input-content-append-list|New option content|list item..."
            break;
        case "list_plus":
            out = "list_plus,content|input-content-append-list|New option content|list item..."
            break;
        case "list_ribbon":
            out = "list_ribbon,content|input-content-append-list|New option content|list item..."
            break;
        case "list_settings":
            out = "list_settings,content|input-content-append-list|New option content|list item..."
            break;
        case "list_star":
            out = "list_star,content|input-content-append-list|New option content|list item..."
            break;
        case "list_image":
            out = "list_image,content|input-content-append-list|New option content|list item..."
            break;
        case "list_link":
            out = "list_link,content|input-content-append-list|New option content|list item..."
            break;
        case "list_mail":
            out = "list_mail,content|input-content-append-list|New option content|list item..."
            break;
        case "list_arrow":
            out = "list_arrow,content|input-content-append-list|New option content|list item..."
            break;
        case "list_tick":
            out = "list_tick,content|input-content-append-list|New option content|list item..."
            break;
        case "list_arrow_point":
            out = "list_arrow_point,content|input-content-append-list|New option content|list item..."
            break;
        case "box_1":
            out = "info,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,content|input_content|Your content";
            break;
        case "box_2":
            out = "success,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,content|input_content|Your content";
            break;
        case "box_3":
            out = "question,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,content|input_content|Your content";
            break;
        case "box_4":
            out = "error,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,content|input_content|Your content";
            break;
        case "font_icon":
            out = "font_icon,height|input|Height|14px,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,color|color|Color|#000";
            break;
        case "button_icon":
            out = "button_icon,link|input|Link,target|select|target,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,background_color|color|Background color|#000,border_color|color|Border color|#000,text_color|color|Text color|#000,content|input_content|Your content";
            break;
        case "button_simple":
            out = "button_simple,link|input|Link,target|select|target,background_color|color|Background color|#000,border_color|color|Border color|#000,text_color|color|Text color|#000,content|input_content|Your content";
            break;
        case "button_round":
            out = "button_round,link|input|Link,target|select|target,background_color|color|Background color|#000,border_color|color|Border color|#000,text_color|color|Text color|#000,content|input_content|Your content";
            break;
        case "button_simple_icon":
            out = "button_simple_icon,link|input|Link,target|select|target,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,background_color|color|Background color|#000,border_color|color|Border color|#000,text_color|color|Text color|#000,content|input_content|Your content";
            break;
        case "button_only_icon":
            out = "button_only_icon,link|input|Link,target|select|target,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,background_color|color|Background color|#000,border_color|color|Border  color|#000";
            break;
        case "button_social":
            out = "button_social,link|input|Link,target|select|target,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,background_color|color|Background color|#000,border_color|color|Border color|#000,text_color|color|Text color|#000,content|input_content|Your content";
            break;
        case "button_simple_double":
            out = "button_simple_double,link|input|Link,target|select|target,background_color|color|Background color|#000,background_color_double|color|Background double color|#000,text_color|color|Text color|#000,content|input_content|Your content";
            break;
        case "button_icon_double":
            out = "button_icon_double,link|input|Link,target|select|target,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,background_color|color|Background color|#000,background_color_double|color|Background double color|#000,text_color|color|Text color|#000";
            break;
        case "pmc_icon":
            out = "pmc_icon,link|input|Link,target|select|target,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,background_color|color|Background color|#000,border_color|color|Border color|#000,size|select|Select size";
            break;
        case "pricing_tables":
            out = "pricing_tabels,background_color|color|Background color,width|input|Width,highlighted|heighlighted|Highlighted color,title|input|Title,price|input|Price|$999.99,price_title|input~Price title|per mont,button|input|Button text|SIGN UP,button_link|input|Buton link,content|input-content-append-pricing-table|New option content"
            break;
        case "pricing_tables_circle":
            out = "pricing_tabels_circle,background_color|color|Background color,background_color_circle|color|Background color,border_color_circle|color|Border color,title|input|Title,price|input|Price|$999.99,price_title|input~Price title|per mont,button|input|Button text|SIGN UP,button_link|input|Buton link,content|input-content-append-pricing-table|New option content"
            break;
        case "pricing_tables_icon":
            out = "pricing_tabels_icon,background_color|color|Background color,icon|input_image|Icon URL,title|input|Title,price|input|Price|$999.99,price_title|input~Price title|per mont,button|input|Button text|SIGN UP,button_link|input|Buton link,content|input-content-append-pricing-table|New option content"
            break;
        case "pricing_tables_white":
            out = "pricing_tabels_white,background_color|color|Background color,button_color|color|Button color,border_color_circle|color|Border color,title|input|Title,price|input|Price|$999.99,price_title|input~Price title|per mont,button|input|Button text|SIGN UP,button_link|input|Buton link,content|input-content-append-pricing-table|New option content"
            break;
        case "count_block":
            out = "count_block,text_color|color|Text color|#2a2b2c,background_color|color|background color|#fff,number|input|Number for count|500,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,content|input_content_textarea|Your content";
            break;
        case "count_block_simple":
            out = "count_block_simple,text_color|color|Text color|#2a2b2c,number|input|Number for count|500,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,content|input_content_textarea|Your content";
            break;
        case "google_map":
            out = "google_map,zoom|input|Zoom|8,width|input|Width|500,height|input|Height|300,address|input|Adress,image|input_image|Image URL,style|select|Select map style,bounce|select|Bounce?,enable_mouse_zoom|select|Enable mouse wheel?";
            break;
        case "google_map_more":
            out = "google_map_more,zoom|input|Zoom|8,width|input|Width|500,height|input|Height|300,address|input|<a href ='http://www.gps-coordinates.net/' target='_blank'>Google Cordinates</a> (seperate with *),image|input_image|Image URL,style|select|Select map style,bounce|select|Bounce?,enable_mouse_zoom|select|Enable mouse wheel?";
            break;
        case "pmc_box":
            out = "pmc_box,border_color|color|Border color|#000,text_color|color|Text color|#000,background_color|color|Background color|#000,content|input_content_textarea|Your content";
            break;
        case "pmc_box_icon":
            out = "pmc_box_icon,title|input|Title|HEADING,link|input|Link,target|select|target,animated|select|Select animation,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,border_color|color|Border color|#000,text_color|color|Text color|#000,size|select|Select size,icon_location|select|Select icon location,content|input_content_textarea|Your content";
            break;
        case "pmc_quote":
            out = "pmc_quote,border_color|color|Border color|#000,content|input_content_textarea|Your content";
            break;
        case "image_circle_1":
            out = "image_circle_1,link|input|Link,target|select|target,title|input|Title|HEADING,border_color_1|color|Border color|#000,border_color_2|color|Border color|#000,image|input_image|Image URL,content|input_content_textarea|Your content";
            break;
        case "image_square_1":
            out = "image_square_1,link|input|Link,target|select|target,title|input|Title|HEADING,border_color_1|color|Border color|#000,image|input_image|Image URL,content|input_content_textarea|Your content";
            break;
        case "pmc_image":
            out = "pmc_image,link|input|Link,image|input_image|Image URL,animated|select|Select animation,icon|input|<a target='_blank' href='http://fortawesome.github.io/Font-Awesome/icons/'>Font Awesome icon</a>|fa-picture-o,content|input_content|Your content";
            break;
        case "lightbox":
            out = "lightbox,image|input_image|Big image URL,small_image|input_image|Small image URL";
            break;
        case "scroll_link":
            out = "scroll_link,link|input|Scroll link (#link),content|input_content|Link dispay title";
            break;
        default:
            out = '';

    }

    if (shop == true) {
        switch (shortcode) {
            case "woocommerce_cart":
                out = "woocommerce_cart";
                break;
            case "woocommerce_checkout":
                out = "woocommerce_checkout";
                break;
            case "woocommerce_order_tracking":
                out = "woocommerce_order_tracking";
                break;
            case "woocommerce_my_account":
                out = "woocommerce_my_account,order_count|input|Number of orders to show|6";
                break;
            case "recent_products":
                out = "recent_products,per_page|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order";
                break;
            case "featured_products":
                out = "featured_products,per_page|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order"
                break;
            case "product_id":
                out = "product_id,sku|input|Show product by SKU"
                break;
            case "product_sku":
                out = "product_sku,sku|input|Show product by SKU"
                break;
            case "products_id":
                out = "products ids,ids|input|Show products by ID's,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order";
                break;
            case "products_sku":
                out = "products sku,skus|input|Show products by SKU's,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order";
                break;
            case "add_to_cart_sku":
                out = "add_to_cart,sku|input|Add to cart by SKU"
                break;
            case "add_to_cart_id":
                out = "add_to_cart,id|input|Add to cart by ID"
                break;
            case "add_to_cart_url_sku":
                out = "add_to_cart_url,sku|input|Add to cart URL by SKU"
                break;
            case "add_to_cart_url_id":
                out = "add_to_cart_url,id|input|Add to cart URl by ID"
                break;
            case "product_page_sku":
                out = "product_page,sku|input|Product singe page by SKU"
                break;
            case "product_page_id":
                out = "product_page,id|input|Product singe page by ID"
                break;
            case "product_category":
                out = "product_category,category|input|Category,per_page|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order";
                break;
            case "product_categories":
                out = "product_categories,ids|input|Category id's,number|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order,parent|checkbox|Show only top categories?,hide_empty|checkbox|Hide empty?";
                break;
            case "sale_products":
                out = "sale_products,per_page|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order"
                break;
            case "best_selling_products":
                out = "best_selling_products,per_page|input|Post per page|8,columns|input|Number of columns|4"
                break;
            case "top_rated_products":;
                out = "top_rated_products,per_page|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order"
                break;
            case "product_attribute":
                out = "product_attribute,attribute|input|Attributs,per_page|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:,order|select|Order";
                break;
            case "related_products":
                out = "related_products,per_page|input|Post per page|8,columns|input|Number of columns|4,orderby|select|Order by:";
                break;
        }
    }
    jQuery('.ui-dialog-titlebar-close').click();

    out = out.split(",");
    var name = out[0];
    var html_out = '';
    var html_out_content = '';
    if (out.length == 1) {
        html_out = 'No options for this shortcode!'
    }
    for (i = 1, l = out.length; i < l; i++) {
        var out_html = out[i].split("|");
        var item_value = '';
        if (out_html.length > 3) {
            item_value = out_html[3];
        }
        switch (out_html[1]) {
            case 'input':
                html_out = html_out + '<div class="shortcode-option">' + out_html[2] + '<input type="text" name="' + out_html[0] + '" value="' + item_value + '"/>' + '</div>';
                break;
            case 'select':
                html_out = html_out + '<div class="shortcode-option">' + out_html[2] + pmc_select(out_html[0]) + '</div>';
                break;
            case 'checkbox':
                html_out = html_out + '<div class="shortcode-option">' + out_html[2] + '<input type="checkbox" class="pmc_checkbox" name="' + out_html[0] + '" value="0" />' + '</div>';
                break;
            case 'input_content':
                html_out = html_out + '<div class="shortcode-option">' + out_html[2] + '<input class="pmc_content_out" type="text" name="' + out_html[0] + '" value="' + item_value + '"/>' + '</div>';
                break;
            case 'input_content_textarea':
                html_out = html_out + '<div class="shortcode-option">' + out_html[2] + '<textarea class="pmc_content_out" type="text" name="' + out_html[0] + '"/></textarea>' + '</div>';
                break;
            case 'color':
                html_out = html_out + '<div class="shortcode-option">' + out_html[2] + '<input class="input-color-picker"  type="text" name="' + out_html[0] + '" value="' + item_value + '" data-default-color="#333"/>' + '</div>';
                break;
            case 'input_image':
                html_out = html_out + '<div class="shortcode-option">' + out_html[2] + '<input type="text" class="input-upload" id="upload-' + Math.floor((Math.random() * 10) + 1) + '" name="' + out_html[0] + '" value="' + item_value + '" ><a href="#" class="aq_upload_button button">Upload</a>' + '</div>';
                break;
            case 'input-content-append-list':
                html_out = html_out + '<div class="shortcode-option add-new">' + out_html[2] + '<input class="input-content-append-list" type="text" name="' + out_html[0] + '" value="List item ..." />' + '</div>';
                break;
            case 'input-content-append-tab':
                html_out = html_out + '<div class="shortcode-option add-new">' + out_html[2] + '<br><br>Tab title<input class="input-content-append-tab-title" type="text" name="' + out_html[0] + '" value="Title" /><br>Tab content<textarea type="text" class="input-content-append-tab-content" name="' + out_html[0] + '" value="Some text ..." /></textarea>' + '</div>';
                break;
            case 'input-content-append-accordion':
                html_out = html_out + '<div class="shortcode-option add-new">' + out_html[2] + '<br><br>Accordion title<input class="input-content-append-accordion-title" type="text" name="' + out_html[0] + '" value="Title" /><br>Accordion content<textarea type="text" class="input-content-append-accordion-content" name="' + out_html[0] + '" value="Some text ..."/></textarea>' + '</div>';
                break;
            case 'input-content-append-pricing-table':
                html_out = html_out + '<div class="shortcode-option add-new">' + out_html[2] + '<br><br>Pricing option background color<input class="input-color-picker input-content-append-table-color" type="text" name="' + out_html[0] + '" value="#fff" /><br>Pricing content<input type="text" class="input-content-append-table-content" name="' + out_html[0] + '" value="Table option" />' + '</div>';
                break;
        }


    }
    var append_text = '';
    if (out.length != 1) {
        var check_append = out_html[1].split("-");
        var append_text = '';
        if (check_append[2] == 'append') {
            append_text = '<div class="pmc-new-options"><div class="pmc-new-options-content"></div><div class="pmc-new-options-button">Add new option</div></div>';
        }
    }
    html_out = html_out + append_text + '<div class="create_shortcode">Add shortcode</div>';
    jQuery('#select-shorcode-add').html(html_out);
    jQuery('#select-shorcode-add textarea').val('Some text..');
    jQuery('.input-color-picker').wpColorPicker();

    function pmc_select(name) {
        var html = '';
        switch (name) {
            case 'orderby':
                html = '<div class="shortcode-option"><select name="' + name + '"><option value="name">Title</option><option value="date">Date</option></select></div>';
                break;
            case 'order':
                html = '<div class="shortcode-option"><select name="' + name + '"><option value="ASC">Ascending</option><option value="DESC">Descending</option></select></div>';
                break;
            case 'target':
                html = '<div class="shortcode-option"><select name="' + name + '"><option value="_blank">New tab</option><option value="self">Inside this tab</option></select></div>';
                break;
            case 'size':
                html = '<div class="shortcode-option"><select name="' + name + '"><option value="small">Small</option><option value="medium">Medium</option><option value="big">Large</option></select></div>';
                break;
            case 'icon_location':
                html = '<div class="shortcode-option"><select name="' + name + '"><option value="left">Left</option><option value="top">Top</option><option value="large">Large</option></select></div>';
                break;
            case 'full_width':
            case 'bounce':
            case 'heighlighted':
            case 'enable_mouse_zoom':
                html = '<div class="shortcode-option"><select name="' + name + '"><option value="false">False</option><option value="true">True</option></select></div>';
                break;
            case 'style':
                html = '<div class="shortcode-option"><select name="' + name + '"><option value="">None</option><option value="bubbly">Bubbly</option><option value="gowalla">Gowalla</option><option value="grayscale">Greyscale</option><option value="blue">Blue</option></select></div>';
                break;
            case 'animated':
                html = '<br>      <select name="' + name + '"><optgroup label="Attention Seekers">           <option value="bounce">bounce</option>           <option value="flash">flash</option>           <option value="pulse">pulse</option>           <option value="rubberBand">rubberBand</option>           <option value="shake">shake</option>           <option value="swing">swing</option>           <option value="tada">tada</option>           <option value="wobble">wobble</option>         </optgroup>          <optgroup label="Bouncing Entrances">           <option value="bounceIn">bounceIn</option>           <option value="bounceInDown">bounceInDown</option>           <option value="bounceInLeft">bounceInLeft</option>           <option value="bounceInRight">bounceInRight</option>           <option value="bounceInUp">bounceInUp</option>         </optgroup>          <optgroup label="Bouncing Exits">           <option value="bounceOut">bounceOut</option>           <option value="bounceOutDown">bounceOutDown</option>           <option value="bounceOutLeft">bounceOutLeft</option>           <option value="bounceOutRight">bounceOutRight</option>           <option value="bounceOutUp">bounceOutUp</option>         </optgroup>          <optgroup label="Fading Entrances">           <option value="fadeIn">fadeIn</option>           <option value="fadeInDown">fadeInDown</option>           <option value="fadeInDownBig">fadeInDownBig</option>           <option value="fadeInLeft">fadeInLeft</option>           <option value="fadeInLeftBig">fadeInLeftBig</option>           <option value="fadeInRight">fadeInRight</option>           <option value="fadeInRightBig">fadeInRightBig</option>           <option value="fadeInUp">fadeInUp</option>           <option value="fadeInUpBig">fadeInUpBig</option>         </optgroup>          <optgroup label="Fading Exits">           <option value="fadeOut">fadeOut</option>           <option value="fadeOutDown">fadeOutDown</option>           <option value="fadeOutDownBig">fadeOutDownBig</option>           <option value="fadeOutLeft">fadeOutLeft</option>           <option value="fadeOutLeftBig">fadeOutLeftBig</option>           <option value="fadeOutRight">fadeOutRight</option>           <option value="fadeOutRightBig">fadeOutRightBig</option>           <option value="fadeOutUp">fadeOutUp</option>           <option value="fadeOutUpBig">fadeOutUpBig</option>         </optgroup>          <optgroup label="Flippers">           <option value="flip">flip</option>           <option value="flipInX">flipInX</option>           <option value="flipInY">flipInY</option>           <option value="flipOutX">flipOutX</option>           <option value="flipOutY">flipOutY</option>         </optgroup>          <optgroup label="Lightspeed">           <option value="lightSpeedIn">lightSpeedIn</option>           <option value="lightSpeedOut">lightSpeedOut</option>         </optgroup>          <optgroup label="Rotating Entrances">           <option value="rotateIn">rotateIn</option>           <option value="rotateInDownLeft">rotateInDownLeft</option>           <option value="rotateInDownRight">rotateInDownRight</option>           <option value="rotateInUpLeft">rotateInUpLeft</option>           <option value="rotateInUpRight">rotateInUpRight</option>         </optgroup>          <optgroup label="Rotating Exits">           <option value="rotateOut">rotateOut</option>           <option value="rotateOutDownLeft">rotateOutDownLeft</option>           <option value="rotateOutDownRight">rotateOutDownRight</option>           <option value="rotateOutUpLeft">rotateOutUpLeft</option>           <option value="rotateOutUpRight">rotateOutUpRight</option>         </optgroup>          <optgroup label="Specials">           <option value="hinge">hinge</option>           <option value="rollIn">rollIn</option>           <option value="rollOut">rollOut</option>         </optgroup>          <optgroup label="Zoom Entrances">           <option value="zoomIn">zoomIn</option>           <option value="zoomInDown">zoomInDown</option>           <option value="zoomInLeft">zoomInLeft</option>           <option value="zoomInRight">zoomInRight</option>           <option value="zoomInUp">zoomInUp</option>         </optgroup>          <optgroup label="Zoom Exits">           <option value="zoomOut">zoomOut</option>           <option value="zoomOutDown">zoomOutDown</option>           <option value="zoomOutLeft">zoomOutLeft</option>           <option value="zoomOutRight">zoomOutRight</option>           <option value="zoomOutUp">zoomOutUp</option>         </optgroup>       </select></div>';
                break;

        }
        return html;
    }

    function pmc_add_new_options() {
        var html_new_options = '';
        switch (out_html[1]) {
            case 'input-content-append-list':
                html_new_options = '<div class="shortcode-option add-new">' + out_html[2] + '<input class="input-content-append-list" type="text" name="' + out_html[0] + '" value="List item..." />' + '</div>';
                break;
            case 'input-content-append-tab':
                html_new_options = '<div class="shortcode-option add-new">' + out_html[2] + '<br><br>Tab title<input class="input-content-append-tab-title" type="text" name="Title" value="Title" /><br>Tab content<textarea type="text" class="input-content-append-tab-content" name="' + out_html[0] + '" /></textarea>' + '</div>';
                break;
            case 'input-content-append-accordion':
                html_new_options = '<div class="shortcode-option add-new">' + out_html[2] + '<br><br>Accordion title<input class="input-content-append-accordion-title" type="text" name="Title" value="Title" /><br>Accordion content<textarea type="text" class="input-content-append-accordion-content" name="' + out_html[0] + '" value="Some text ..."/></textarea>' + '</div>';
                break;
            case 'input-content-append-pricing-table':
                html_new_options = '<div class="shortcode-option add-new">' + out_html[2] + '<br><br>Pricing option background color<input class="input-color-picker input-content-append-table-color" type="text" name="' + out_html[0] + '" value="#fff" /><br>Pricing content<input type="text" class="input-content-append-table-content" name="' + out_html[0] + '" value="Table option" />' + '</div>';
                break;
        }
        jQuery('.pmc-new-options-content').append(html_new_options);
        jQuery('.pmc-new-options-content textarea').last().val('Some text..');
        jQuery('.input-color-picker').wpColorPicker()
    }

    jQuery('#select-shorcode-add').dialog({
        title: 'Shorcode options',
        resizable: true,
        modal: true,
        hide: 'fade',
        width: 310,
        height: 'auto',
        dialogClass: 'pmc_shortcode_dialog_add'
    }
    );

    jQuery('.pmc-new-options-button').click(function () {
        pmc_add_new_options();

    });

    jQuery('.create_shortcode').click(function () {
        var html_shortcode = '';
        var html_shortcode_content = '';
        var html_shortcode_content_element = '';
        jQuery('#select-shorcode-add input, #select-shorcode-add select, #select-shorcode-add textarea').each(function () {

            if (jQuery(this).attr('type') == 'button') { return }
            if (jQuery(this).attr('value') != '') {

                switch (jQuery(this).attr('class')) {
                    case 'input-content-append-list':
                        html_shortcode_content = html_shortcode_content + '<li>' + jQuery(this).attr('value') + '</li>';
                        break;
                    case 'pmc_content_out':
                        html_shortcode_content = jQuery(this).attr('value');
                        break;
                    case 'input-content-append-tab-title':
                        html_shortcode_content_element = '[tab title="' + jQuery(this).attr('value') + ']';
                        break;
                    case 'input-content-append-tab-content':
                        html_shortcode_content_element = html_shortcode_content_element + jQuery(this).attr('value') + '[/tab]';
                        html_shortcode_content = html_shortcode_content + html_shortcode_content_element;
                        html_shortcode_content_element = '';
                        break;
                    case 'input-content-append-accordion-title':
                        html_shortcode_content_element = '[atab title="' + jQuery(this).attr('value') + ']';
                        break;
                    case 'input-content-append-accordion-content':
                        html_shortcode_content_element = html_shortcode_content_element + jQuery(this).attr('value') + '[/atab]';
                        html_shortcode_content = html_shortcode_content + html_shortcode_content_element;
                        html_shortcode_content_element = '';
                        break;
                    case 'input-color-picker input-content-append-table-color wp-color-picker':
                    case 'input-color-picker input-content-append-table-color':
                        html_shortcode_content_element = '[pricing_options background_color="' + jQuery(this).attr('value') + '"]';
                        break;
                    case 'input-content-append-table-content':
                        html_shortcode_content_element = html_shortcode_content_element + jQuery(this).attr('value') + '[/pricing_options]';
                        html_shortcode_content = html_shortcode_content + html_shortcode_content_element;
                        html_shortcode_content_element = '';
                        break;
                    default:
                        html_shortcode = html_shortcode + jQuery(this).attr('name') + '="' + jQuery(this).attr('value') + '" ';
                        break;
                }
            }
        });

        html_shortcode = '[' + name + ' ' + html_shortcode + ' ]';
        if (html_shortcode_content != '') {
            html_shortcode = html_shortcode + html_shortcode_content + '[/' + name + ']';
        }

        if (typeof id !== 'undefined') {
            tinyMCE.get(id).insertContent(html_shortcode);
            tinyMCE.get(id).execCommand('mceRepaint');
            jQuery('.ui-dialog-titlebar-close').click();
        } else {
            tinyMCE.activeEditor.insertContent(html_shortcode);
            tinyMCE.activeEditor.execCommand('mceRepaint');
            jQuery('.ui-dialog-titlebar-close').click();
        }
    });


    jQuery('.pmc_checkbox').change(function () {
        if (jQuery(this).is(":checked")) {
            jQuery(this).attr('value', 1);
        }
        else {
            jQuery(this).attr('value', 0);

        }

    });

}

jQuery(document).ready(function ($) {
    var content = $('.select-shortcode').attr('id');
    $('#' + content).hide();

    var button = $('.add_shortcode_button').attr('id');
    var isotopec = $('.shortcodes_buttons').attr('id');
    $(document).on("click", '#' + button, function () {

        $('#' + content).dialog({
            title: 'Select PMC ShortCode',
            resizable: true,
            modal: true,
            hide: 'fade',
            width: 1090,
            height: 600,
            dialogClass: 'pmc_shortcode_dialog'
        });//end dialog   
        $('.shortcodes_buttons').isotope();
        $('.shortcodes_buttons').isotope('reLayout');
        $('#remove a:first-child').click();
    });
    $('.shortcode-buttons').unbind('click').click(function () {
        var shortcode = jQuery(this).attr('id');
        var id_out = jQuery(this).attr('content');
        returnShortcodeValue(shortcode, id_out);


    });
    $(document).on("click", '.add_shortcode_button', function () {
        var id = $(this).parent().find('textarea').attr('id');
        $('.shortcode-buttons').attr('content', id);
    });

    jQuery('#insert').attr("disabled", true);
    jQuery('#insert').addClass("disabled");
    jQuery('#select_shortcode').change(function () {
        if (jQuery(this).val() == '') {
            jQuery('#insert').attr("disabled", true);
            jQuery('#insert').addClass("disabled");
        } else {
            jQuery('#insert').removeAttr("disabled");
            jQuery('#insert').removeClass("disabled");
        }
    });

    jQuery('.shortcode-help').click(function () {

        jQuery('#tab-link-customize-display, #tab-panel-customize-display').removeClass('active');
        jQuery('#tab-link-pmc_shortcode,#tab-panel-pmc_shortcode').addClass('active');
        setTimeout(function () { jQuery("html, body").animate({ scrollTop: 0 }, "slow"), 5000 });
        jQuery('#contextual-help-link').click();
    });


    jQuery(function () {

        var $container = jQuery('#shortcodes_buttons');
        $container.isotope({
            itemSelector: '#shortcodes_buttons .shortcode-buttons'
        });



        jQuery('#remove a').click(function () {
            var $this = jQuery(this);
            // don't proceed if already selected
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents('#remove');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');

            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
            // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[key] = value;
            if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                // changes in layout modes need extra logic
                changeLayoutMode($this, options)
            } else {
                // otherwise, apply new options
                $container.isotope(options);
            }

            return false;
        });
        jQuery(window).on('load', function () {
            $container.isotope('reLayout');
        });

        jQuery(window).resize(function () {
            $container.isotope('reLayout');
        });
    });

});