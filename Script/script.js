$(document).ready(()=>{
    // $("#cart-li").click(function(){
    //     $('.cart-drop').css('display','block');
    //     $('.cart-drop').css('top','55px');
    // })
    // $('.btn-x').click(function(){
    //     $('.cart-drop').fadeOut();
    // })
    // $('.search-btn-btn').click(()=>{
    //     var a = 0;
        
    //     if(a == 0)
    //     {
    //         $('.search').css('margin-top','0px');
    //         $('.bi-search').attr("class","bi bi-x");
    //         a = 1;
    //     }
    //     else
    //     {
    //         $('.search').css('margin-top','-200px');
    //         $('.bi-x').attr("class","bi bi-search");
    //         a = 0;
    //     }
        
    // })

    $('.btn-cart').click(function(){
        $('.sidebar').css({"right":"0px"});
        $('.sidebar-dark').fadeIn();
    })
    $('.btn-cart-close').click(function(){
        $('.sidebar').css({"right":"-400px"});
        $('.sidebar-dark').fadeOut();
    })
    $('.sidebar-dark').click(function(){
        $('.sidebar').css({"right":"-400px"});
        $(this).fadeOut();
    })
    $('.cart-img-container').mouseover(function(){
        $(this).parent().find('.xxx').css('display','flex');
    })
    $('.cart-img-container').mouseout(function(){
        $('.xxx').css("display","none");
    })
    $('.mobile-close-menu').click(()=>{
        $('.mobile-side').css({"right":"-100%","opacity":"0.1"});
        
    })
    $('.btn-menu').click(function(){
        $('.mobile-side').css({"right":"0","opacity":"1"});
    })

})