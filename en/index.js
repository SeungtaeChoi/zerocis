'use strict';

const content = document.querySelector('#content');
const br = document.createElement("br");


/* #nav */
    const menu_title = document.querySelectorAll('#nav > ul > li > a');
    for(let i=0; i<menu_title.length; i++ ){
        menu_title[i].addEventListener('mouseover', function (e) {
            remove_now_act();
            menu_title[i].parentNode.querySelector('ul').classList.add('act');
        });
    }
    content.addEventListener('mouseover', function(){
        remove_now_act();
    });
    const remove_now_act = () => {
        const now_act = document.querySelector('#nav > ul > li > ul.act');
        if(now_act !== null){
            now_act.classList.remove('act');
        }
    }


/* #content */
    history.scrollRestoration = "manual"; //리로드시 최상단

    /* 첫페이지 마스크 */
    const content_mask = document.querySelector("#content_mask");
    setTimeout(()=>{
        content_mask.classList.remove('s');
        setTimeout(()=>{
            content_mask.style['z-index'] = 'unset';
            page1act();
        },1000);
    },500);

    //section 배치
    const sections = content.querySelectorAll('section');
    for(let i=0; i<sections.length; i++){
        sections[i].style.top = `${100*i}vh`;
    }

    //page1
    const page1act = () => {

    }

    //페이지별 scrolltop 값 저장
    let nowPage = 'page1';
    const vhPage = window.innerHeight; //창 높이
    const saElementList = document.querySelectorAll('.page');
    let pageInfo = {}
    let prePage = null;
    for (let i=0; i<saElementList.length; i++) {
        pageInfo[`page${i+1}`] = {}
        pageInfo[`page${i+1}`].pre = prePage;
        pageInfo[`page${i+1}`].top = saElementList[i].getBoundingClientRect().top;
        let next = null;
        if(saElementList.length >= i+2){ next = `page${i+2}`; }
        pageInfo[`page${i+1}`].next = next;
        prePage = `page${i+1}`;
    }

    //스크롤
    let initScrollY = null;
    let operating = false;
    const saveScrollStart = (e) => { //모바일 위,아래 체크를 위해 저장
        initScrollY = e.touches[0].screenY;
    }
    const setScrollEvent = (e) => {
        if(!operating){
            operating = true;
                        
            //up, down 체크
            let dir;
            if(e.changedTouches){ //모바일
                if(e.changedTouches[0].screenY < initScrollY){ dir = 'down'; } 
                if(e.changedTouches[0].screenY > initScrollY){ dir = 'up'; }
            } else { //pc
                if(e.deltaY>0){ dir = 'down'; }
                if(e.deltaY<0){ dir = 'up'; }
            }

            //실행
            if(dir === 'down'){
                if(pageInfo[nowPage].next !== null) {
                    content.classList.add(`move_${pageInfo[nowPage].next}`);
                    content.classList.remove(`move_${nowPage}`);
                    nowPage = pageInfo[nowPage].next;
                }
            }
            if(dir === 'up'){
                if(pageInfo[nowPage].pre !== null) {
                    content.classList.add(`move_${pageInfo[nowPage].pre}`);
                    content.classList.remove(`move_${nowPage}`);
                    nowPage = pageInfo[nowPage].pre;
                }
            }
            setTimeout(function(){
                operating = false;
                pageAniStart(nowPage);
            }, 1500);
        }
    }
    window.addEventListener('wheel', setScrollEvent); //pc
    window.addEventListener('touchstart', saveScrollStart); //mo
    window.addEventListener('touchend', setScrollEvent); //mo


/* #main */
    //로고
    const page1_logo = document.querySelector("#main .logo_mask");
    //배경이미지
    const page1_bg = document.querySelector("#main .bg");
    setTimeout(function(){
        page1_bg.classList.remove('s');
    },1500);
    //글씨
    setTimeout(function(){
        const hu_txt = document.querySelectorAll('#page1 .hu_txt > li');
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
                tw_title.append(br);
            }
            tw_title.append(tw_title_txt[liIndex][typingIdx]);
            typingIdx++;
        },180);
    }, 2000);


/* #page2~ */
    const pageAniStart = (page) => {
        //배경이미지
        const page_bg = document.querySelector(`#${page} .bg`);
        if(page_bg === null) { return false; }
        setTimeout(function(){
            if(page_bg.classList.contains('s')){ page_bg.classList.remove('s'); }
        },0);
        //글씨
        const s1 = document.querySelector(`#${page} .s1`);
        if(s1){
            setTimeout(function(){
                if(s1.classList.contains('s')){ s1.classList.remove('s'); }
            }, 1000);
        }
        const s2 = document.querySelector(`#${page} .s2`);
        if(s2){
            setTimeout(function(){
                if(s2.classList.contains('s')){ s2.classList.remove('s'); }
            }, 2000);
        }
        const s3 = document.querySelector(`#${page} .s3`);
        if(s3){
            setTimeout(function(){
                if(s3.classList.contains('s')){ s3.classList.remove('s'); }
            }, 3000);
        }
    }