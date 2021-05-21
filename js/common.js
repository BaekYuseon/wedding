$(function(){
    $(".hamburger").click(function(){
        $("#side_menu_wrap").css({right:"0"})
        $("#header_wrap").css({ opacity:"0.5"})
        $("#content_wrap").css({ opacity:"0.5"})
        $("#footer_wrap").css({ opacity:"0.5"})
        $("#category_content").css({ opacity:"0.5"})
        $("#detali_wrap").css({ opacity:"0.5"})
    });

    $(".close_menu").click(function(){
        $("#side_menu_wrap").css({right:"-36vw"})
        $("#header_wrap").css({opacity:"1"})
        $("#content_wrap").css({opacity:"1"})
        $("#footer_wrap").css({ opacity:"1"})
        $("#category_content").css({ opacity:"1"})
        $("#detali_wrap").css({ opacity:"1"})
    });

    $(function(){
        $(".search").click(function(){
            $(".search_wrap").css({opacity:"1"})
        });
        
        $(".mini_search i").click(function(){
            $(".search_wrap").css({opacity:"0"})
        });
        
    });
});