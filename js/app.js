$(function () {

    let m1 = $(".main_line main .header .m1");
    let mI = $(".main_line main .header .m1 img");
    let audio = $(".main_line main .header .m1 .bg")[0];

    m1.click(function () {
        m1.toggleClass("music_on");

        if(audio.paused){
            audio.play();
            mI.attr('src', './img/main_musico.svg')


        }else{
            audio.pause();
            mI.attr('src', './img/main_musicx.svg')


        }

        if (m1.hasClass("music_on")) {
            mI.attr('src', './img/main_musico.svg')
        } else {
            mI.attr('src', './img/main_musicx.svg')
        }



    });


    let mI2 = $(".main_line main .header .m1 source");

    m1.click(function () {
        m1.toggleClass("music_on2");

        if (m1.hasClass("music_on2")) {
            mI2.attr('srcset', './img/t_musico.svg')
        } else {
            mI2.attr('srcset', './img/t_musicx.svg')
        }
    });


    let list = [

        {
            day: '1992. 04. 02.',
            position: 'Position Drum',
            name: '김건재',
            name2: 'kim Geon-jae',
            img: './img/m_kimgeonjae.jpg'

        },

        {
            day: '1992. 02. 05.',
            position: 'Position Guitar',
            name: '김춘추',
            name2: 'kim Chun-chu',
            img: './img/m_kimchunchu.jpg'

        },

        {
            day: '1994. 04. 21.',
            position: 'Position Vocal',
            name: '김한주',
            name2: 'kim Han-joo',
            img: './img/m_kimhanjoo.jpg'

        },

        {
            day: '1994. 04. 30.',
            position: 'Position Bass',
            name: '최웅희',
            name2: 'Choi Woong-hee',
            img: './img/m_choiwoonghee.jpg'

        },





    ];

    let v1 = $(".s_1 .allbox .v_box .box1");
    let v2 = $(".s_1 .allbox .v_box .box2");
    let v3 = $(".s_1 .allbox .v_box .box3");
    let v4 = $(".s_1 .allbox .v_box .box4");

    let p1 = $(".s_1 .allbox .img_box .box .p1");
    let p2 = $(".s_1 .allbox .img_box .box .p2");
    let p3 = $(".s_1 .allbox .img_box .box .p3");
    let img1 = $(".s_1 .allbox .img_box .box img");
    let r_name = $(".s_1 .allbox .img_box .r_name p");


    v1.on('click', function () {
        p1.text(list[0].day);
        p2.text(list[0].position);
        p3.text(list[0].name);
        img1.attr('src', list[0].img);
        r_name.text(list[0].name2)
    });

    v2.on('click', function () {
        p1.text(list[1].day);
        p2.text(list[1].position);
        p3.text(list[1].name);
        img1.attr('src', list[1].img);
        r_name.text(list[1].name2)
    });

    v3.on('click', function () {
        p1.text(list[2].day);
        p2.text(list[2].position);
        p3.text(list[2].name);
        img1.attr('src', list[2].img);
        r_name.text(list[2].name2)
    });

    v4.on('click', function () {
        p1.text(list[3].day);
        p2.text(list[3].position);
        p3.text(list[3].name);
        img1.attr('src', list[3].img);
        r_name.text(list[3].name2)
    });


    let ham = $(".main_line main .header .ham");
    let h_menu = $(".main_line main .h_menu");
    let close = $(".main_line main .h_menu .ham_menu ul li:first-child");


    ham.click(function () {
        h_menu.css({ display: 'block' }),
            ham.css({ display: 'none' })
    });

    close.click(function () {
        h_menu.css({ display: 'none' }),
            ham.css({ display: 'block' })
    });

    $(window).resize(function(){
        let w = innerWidth;

        if(w > 767){
            ham.css({display:'none'})
            h_menu.css({display:'none'})
        } else{
            ham.css({display:'block'})
        }
    });

    let shop_b = $(".s_3 .shop_b");

    shop_b.mouseover(function () {
        $(this).css({
            transform : "scale(1.1)",
            transition : "transform 0.4s"
        });
    });

    shop_b.mouseout(function () {
        $(this).css({
            transform : "scale(1)",
            transition : "transform 0.4s"
        });
    });




   


    











    ///////
});