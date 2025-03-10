$(function (){

    let ham = $("header .h_inner .ham");
    let h_menu = $("header .h_inner .h_menu");
    let close = $("header .h_inner .h_menu .ham_menu ul li:first-child");

    ham.click(function(){
        h_menu.css({display:'block'});
        ham.css({display:'none'})
    });

    close.click(function(){
        h_menu.css({display:'none'});
        ham.css({display:'block'})
    });

   

    $(window).resize(function(){
        let w = innerWidth;

        if(w>767){
         h_menu.css({display:'none'});
         ham.css({display:'none'});
        }else{
            ham.css({display:'block'});
        }
    })
///
});