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

    /*swiper 초기화, 버튼 누르면 스와이퍼 작동동*/


   
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

        /*슬라이드 바뀔때마다 모든 슬라이드 동영상 정지*/

        swiper1.on('slideChange', function(){
            $("video").each(function(){
                $(this)[0].pause();
                

            });
        });

        /*m_btn 클릭하면 동영상 시작, 정지*/




        let m_btn_1 = $("section .s_inner .content .btn .m_btn_1");
        let m_img_1 = $("section .s_inner .content .btn .m_btn_1 img");

        let s_1 = $("section .s_inner .content .btn .m_btn_1 .s_1");
        let s_2 = $("section .s_inner .content .btn .m_btn_1 .s_2");


        m_btn_1.click(function(){
         let activeIndex = swiper1.activeIndex;
         let currentSlide = $(swiper1.slides[activeIndex]);
         let video = currentSlide.find("video")[0];
         
         

         if(video){
            $(this).toggleClass("video_on");
            

            if(video.paused){
                video.play();
                video.muted = false;
                m_img_1.attr("src", "./img/m_play.svg");
                s_2.attr("srcset", "./img/t_play.svg");
                s_1.attr("srcset", "./img/mo_play.svg");
               

                $(video).off("playing").on("playing", function() {
                    $(video).removeAttr("poster");
                    $(video).css({ "object-fit": "contain" });
                   
                   
                });
                
                
                
            }else{
                video.pause();
                video.muted = true;
                m_img_1.attr("src", "./img/mp_m_button.svg");
                s_2.attr("srcset", "./img/tp_m_button.svg");
                s_1.attr("srcset", "./img/mop_m_button.svg");
            }
                
         }
        });


        // let m_btn_2 = $("section .s_inner .content .btn .m_btn_2");
        // let m_img_2 = $("section .s_inner .content .btn .m_btn_2 img");

        // let s_3 = $("section .s_inner .content .btn .m_btn_2 .s_1");
        // let s_4 = $("section .s_inner .content .btn .m_btn_2 .s_2");


        // m_btn_2.click(function(){
        //  m_img_2.attr("scr","./img/m_play.svg");
        //  s_4.attr("scrset","./img/tp_m_button.svg");
        //  s_3.attr("scrset","./img/mop_m_button.svg");
         
                
         
        // });

        

        

        
       



   

   
 ///
});