$(document).ready(function(){
    // ...AbortController.menu
    $(".mainmenu>li").mouseover(
       function(){ $(".submenu").stop().slideDown();
    }
    );
    $(".mainmenu>li").mouseleave(
        function(){
            $(".submenu").stop().slideUp();
        }
    )
    
    
    // tab_menu Script
        $(".tab_menu>li>a").click(
            function(){
                $(this).parent().addClass("on").siblings().removeClass("on");
                return false;
            });
          
        
});