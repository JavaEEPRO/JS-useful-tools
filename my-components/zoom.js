            $(document).ready(function(){
                $('.main-ad-photo').zoom();
            });

            // // Using Colorbox with Zoom
            // $(document).ready(function(){
            //     $('a.photo').zoom({
            //         url: '/resources/img/default.jpg',
            //         callback: function(){
            //             $(this).colorbox({href: this.src});
            //         }
            //     });
            // });

            $(document).ready(function(){
                $('.main-ad-photo')
                    .wrap('<span style="display:inline-block"></span>')
                    .css('display', 'block')
                    .parent()
                    .zoom();
            });

            // $('.main-ad-photo').loupe({
            //     width: 200, // width of magnifier
            //     height: 150 // height of magnifier
            //     //loupe: 'loupe' // css class for magnifier
            // });
