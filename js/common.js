$(document).ready(function() {
    
    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
       heightDetect();
    });
    
    $(".main_menu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    
    $(".main_menu").click(function() {
        if($(".top_menu").is(":visible")){
            $(".top_text").removeClass("h_opacify");
            $(".top_menu").fadeOut(600);
            $(".top_menu li a").removeClass("fadeInUp animated");
        }else{
            $(".top_text").addClass("h_opacify");
            $(".top_menu").fadeIn(600);
            $(".top_menu li a").addClass("fadeInUp animated");
        }
    });
    
    $(".portfolio_item").each(function(e) {        
        $(this).attr("href", "#portfolio_img_" + e)
            .find(".portfolio_popup")
                .attr("id", "portfolio_img_" + e);
    });
    
    $(".portfolio_item").magnificPopup({
        gallery: {
			enabled: true
        }
    });
    
    $(".top_menu ul a").mPageScroll2id();
    
    $("input,select,textarea").jqBootstrapValidation();
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});