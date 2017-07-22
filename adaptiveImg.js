.bock_img {
        border: 1px solid #000;
        height: 200px;
        width:35%;
        overflow: hidden;
        text-align: center;
        line-height: 197px;
        margin: 5px;
        display: inline-block;
        position: relative;
    }
    .bock_img > img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%, -50%);
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
    }

  $(document).ready(function () {
        /*=============================адаптивное изображение===========*/
        $(".bock_img").each(function(){
            var adapBlock = $(this);
            var adapImg = adapBlock.find("img");
            if(adapBlock.height() > adapImg.height()){
                adapImg.css("max-width", "none")
            }
            else if(adapBlock.width() > adapImg.width()){
                adapImg.css("max-height", "none")
            }
        })
    });
