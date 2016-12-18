/* <![CDATA[ */

(function ($) {



    "use strict";



    $(document).ready(function () {



        $("#pmc-import").submit(function (e) {



            if (!confirm("The import will start now!")) {

                e.preventDefault();

                return;

            }



        });



    });



})(jQuery);

/* ]]> */