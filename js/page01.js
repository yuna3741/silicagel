$(function(){
    let ham = $("header .h_inner .ham");
    let h_menu = $("header .h_inner .h_menu");
    let close = $("header .h_inner .h_menu .ham_menu ul li:first-child");
    let figure = $(".s_2 .s_inner figure");
    let name = $(".s_2 .s_inner figure p")

    ham.click(function(){
        h_menu.css({display:'block'});
        ham.css({display:'none'})
    });

    close.click(function(){
        h_menu.css({display:'none'});
        ham.css({display:'block'})
    });

   


    
function Name(){
    let w = $(window).width();
    if(w > 767){

        figure.each(function(){

            $(this).find('p').css({display:'none'})

            $(this).on('mouseover', function(){
                $(this).find('p').css({display:'block'})
            })
    
            $(this).on('mouseout', function(){
                $(this).find('p').css({display:'none'})
            })
    
    
        });
    }else{

        figure.each(function(){
            $(this).find('p').css({display:'block'})
                
            });
            figure.off('mouseover mouseout');
    }
}
   Name();

        $(window).resize(function(){
            Name();
        });

   

    $(window).resize(function(){
        let w = innerWidth;

        if(w>767){
         h_menu.css({display:'none'});
         ham.css({display:'none'});


         

        }else{
            ham.css({display:'block'});
            
        }
    });


    ///
});