$(document).ready(function(){

    const navs = $("aside ul li a");
    let content = $("#content");
    let clickedBtn;

    // DEFAULT CONTENT
    function showContent(url){
        $.ajax({
            url: url,
            cache: false,
            success: function(html){
              content.html(html);
            }
        });

        return true;
    }

    function activateNav(nav){
        $("aside ul li").removeClass("active");
        $(nav).parent().addClass("active");
        showContent($(nav).attr("href"))
    }

    navs.each(function(){
        $(this).on("click", function(e){
            e.preventDefault();
            $("aside ul li").removeClass("active");
            $(this).parent().addClass("active");
            showContent($(this).attr("href"))
        })
    });
    
    $(document).on("click", ".global-btn", function() {
        showContent($(this).data("url"));
        clickedBtn = $(this).data("url");
        navs.each(function(nav){
            if (clickedBtn == $(this).attr("href")) {
                activateNav($(this))
            }
        })

    });

    showContent("pages/dashboard.html");

});