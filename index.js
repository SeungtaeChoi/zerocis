/* fullpage */
    $(document).ready(function() {
        $('#fullpage').fullpage({
            //options here
            navigation:true,
            autoScrolling:true,
            scrollHorizontally: true,
            touchSensitivity:15,
            afterLoad: function(origin, destination){
                const section = destination - 1;

                //내용 실행
                pageAniStart(section);
            },
        });
    });

    
/* main */
    const main_page = $('#main').find('.page');

    //#nav
    const menu_title = document.querySelectorAll('#nav > ul > li > a');
    for(let i=0; i<menu_title.length; i++ ){
        menu_title[i].addEventListener('mouseover', function (e) {
            remove_now_act();
            this.parentNode.querySelector('ul').classList.add('act');
        });
    }
    main_page.on('mouseover', function(){
        remove_now_act();
    });
    const remove_now_act = () => {
        const now_act = document.querySelector('#nav > ul > li > ul.act');
        if(now_act !== null){
            now_act.classList.remove('act');
        }
    }

    const base_sec = 3000;

    //마스크
    const content_mask = document.querySelector("#content_mask");
    setTimeout(()=>{
        content_mask.classList.remove('s');
        setTimeout(()=>{
            content_mask.style['z-index'] = 'unset';
        },0);
    },base_sec);

    //로고
    const main_logo = document.querySelector("#main .logo_mask");
    //배경이미지
    const main_bg = document.querySelector("#main .bg.s");
    if(main_bg){
        setTimeout(function(){
            main_bg.classList.remove('s');
        },base_sec);
    }

    //글씨
    setTimeout(function(){
        const hu_txt = document.querySelectorAll('#main .hu_txt > li');
        const tw_title = document.querySelector('.tw-title');
        tw_title.classList.remove('s');

        let tw_title_txt = new Array();
        for(let i=0; i<hu_txt.length; i++){
            const split_txt = hu_txt[i].innerText.split('');
            tw_title_txt.push(split_txt);
        } //글 배열

        let typingIdx=0;
        let liIndex = 0;
        const liLength = hu_txt.length;
        let typing = setInterval(function(){
            if(tw_title_txt[liIndex].length === (typingIdx)){
                liIndex++; //줄바꿈
                typingIdx=0; //처음부터 시작
                if(liLength === liIndex) { //모든 줄 출력되면 중지
                    return clearInterval(typing);
                }
                const br = document.createElement("br");
                tw_title.append(br);
            }
            tw_title.append(tw_title_txt[liIndex][typingIdx]);
            typingIdx++;
        },150);
    }, base_sec+1000);


/* page2 ~ */
    const pageAniStart = (section) => {
        if(section === 0) { return; }
        const bg_sec = 0;

        //배경이미지
        const page_bg = $('.section').eq(section).find('.bg');
        if(page_bg === null) { return false; }
        setTimeout(function(){
            if(page_bg.hasClass('s')){ page_bg.removeClass('s'); }
        },0);

        //마스크
        const mask_darken = $('.section').eq(section).find('.mask.darken');
        if(mask_darken === null) { return false; }
        setTimeout(function(){
            if(mask_darken.hasClass('s')){ mask_darken.removeClass('s'); }
        },0);
        //글씨
        const s1 = $('.section').eq(section).find('.s1');
        if(s1){
            setTimeout(function(){
                if(s1.hasClass('s')){ s1.removeClass('s'); }
            }, bg_sec+1000);
        }
        const s2 = $('.section').eq(section).find('.s2');
        if(s2){
            setTimeout(function(){
                if(s2.hasClass('s')){ s2.removeClass('s'); }
            }, bg_sec+2000);
        }
        const s3 = $('.section').eq(section).find('.s3');
        if(s3){
            setTimeout(function(){
                if(s3.hasClass('s')){ s3.removeClass('s'); }
            }, bg_sec+3000);
        }
        const s4 = $('.section').eq(section).find('.s4');
        if(s4){
            setTimeout(function(){
                if(s4.hasClass('s')){ s4.removeClass('s'); }
            }, bg_sec+4000);
        }
        const s5 = $('.section').eq(section).find('.s5');
        if(s5){
            setTimeout(function(){
                if(s5.hasClass('s')){ s5.removeClass('s'); }
            }, bg_sec+5000);
        }
    }