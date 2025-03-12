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
    });


   
    const swiper1 = new Swiper(".mySwiper_1", {
            cssMode: true,
            navigation: {
                nextEl: ".r_btn_1",
                prevEl: ".l_btn_1",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true
        });

        const swiper2 = new Swiper(".mySwiper_2", {
            cssMode: true,
            navigation: {
                nextEl: ".r_btn_2",
                prevEl: ".l_btn_2",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true
        });

       const swiper3 = new Swiper(".mySwiper_3", {
            cssMode: true,
            navigation: {
                nextEl: ".r_btn_3",
                prevEl: ".l_btn_3",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true
        });

        swiper1.on('slideChange', function(){
            $("video").each(function(){
                $(this)[0].pause();
                

            });
        });



        let m_btn_1 = $("section .s_inner .content .btn .m_btn_1");


        m_btn_1.click(function(){
         let activeIndex = swiper1.activeIndex;
         let currentSlide = $(swiper1.slides[activeIndex]);
         let video = currentSlide.find("video")[0];

         if(video){
            $(this).toggleClass("video_on");

            if(video.paused){
                video.play();
                video.muted = false;
            }else{
                video.pause();
                video.muted = true;
            }
                
         }
        });

        
       



   

   
 ///
});