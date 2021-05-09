'use strict';


/* 메뉴 호버 시 드롭다운 */
    const menu_title = document.querySelectorAll('#nav > ul > li > a');
    for(let i=0; i<menu_title.length; i++ ){
        menu_title[i].addEventListener('mouseover', function (e) {
            remove_now_act();
            menu_title[i].parentNode.querySelector('ul').classList.add('act');
        });
    }

    const content = document.querySelector('#content');
    content.addEventListener('mouseover', function(){
        remove_now_act();
    });

    const remove_now_act = () => {
        const now_act = document.querySelector('#nav > ul > li > ul.act');
        if(now_act !== null){
            now_act.classList.remove('act');
        }
    }



/* 스크롤 이벤트 */
    history.scrollRestoration = "manual"; //리로드시 최상단

    //페이지별 scrolltop 값 저장
    let nowPage = 'p1';
    const vhPage = window.innerHeight; //창 높이
    const saElementList = document.querySelectorAll('.page');
    let pageTopArr = new Array();
    for (const element of saElementList) {
        pageTopArr.push(element.getBoundingClientRect().top);
    }
    const pageInfo = {
        p1:{
            pre:null,
            top:pageTopArr[0],
            next:'p2'
        },
        p2:{
            pre:'p1',
            top:pageTopArr[1],
            next:'p3'
        },
        p3:{
            pre:'p2',
            top:pageTopArr[2],
            next:'p4'
        },
        p4:{
            pre:'p3',
            top:pageTopArr[3],
            next:'p5'
        },
        p5:{
            pre:'p4',
            top:pageTopArr[4],
            next:null
        }
    }
    //스크롤
    let initScrollY = null;
    let operating = false;
    const saveScrollStart = (e) => { //모바일 위,아래 체크를 위해 저장
        initScrollY = e.touches[0].screenY;
    }
    const setScrollEvent = (e) => {
        console.log(1);
        
        if(!operating){
            operating = true;
                        
            //up, down 체크
            let dir;
            if(e.changedTouches){ //모바일
                if(e.changedTouches[0].screenY < initScrollY){
                    dir = 'down';
                } 
                if(e.changedTouches[0].screenY > initScrollY){
                    dir = 'up';
                }
            } else { //pc
                if(e.deltaY>0){ dir = 'down'; }
                if(e.deltaY<0){ dir = 'up'; }
            }

            //실행
            const content = document.querySelector('#content');
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
            console.log(2);

            setTimeout(function(){ operating = false; }, 1300);
        }
    }
    window.addEventListener('wheel', setScrollEvent); //pc
    window.addEventListener('touchstart', saveScrollStart);
    window.addEventListener('touchend', setScrollEvent);

/* page1 */
    //로고
    const page1_logo = document.querySelector("#page1 .logo_wrap");
    setTimeout(function(){
        page1_logo.classList.remove('s');
    },1000);
    //배경이미지
    const page1_bg = document.querySelector("#page1 .bg");
    setTimeout(function(){
        page1_bg.classList.remove('s');
    },1500);
    //글씨
    setTimeout(function(){
        const br = document.createElement("br");

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
/* page2 */

/* 스크롤 페이지 이동 */
    
    
    // //스크롤 시 글씨 나타나는 효과
    // const saTriggerMargin = 300;
    // const saElementList = document.querySelectorAll('.page');

    // const saFunc = function() {
    //     for (const element of saElementList) {
    //         if (!element.classList.contains('show')) {
    //             if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
    //                 element.classList.add('show');
    //             }
    //         }
    //     }
    // }

    // window.addEventListener('scroll', saFunc);


//시작


// const myDropdown = document.querySelector('#language_btn')
// myDropdown.addEventListener('mouseover', function () {
//     document.querySelector('.dropdown-menu').show();
// })


// //스크롤
//     menu_btn_change_active(1);
//     window.addEventListener('scroll', function(){

//         //메뉴 active 여부 체크
//         let scrollLocation = document.documentElement.scrollTop;
//         if(scrollLocation >= page1Height && scrollLocation < page2Height && printed_menu !== 1){ menu_btn_change_active(1); }
//         if(scrollLocation >= page2Height && scrollLocation < page3Height && printed_menu !== 2){ menu_btn_change_active(2); }
//         if(scrollLocation >= page3Height && scrollLocation < page6Height && printed_menu !== 3){ menu_btn_change_active(3); }
//         if(scrollLocation >= page6Height && printed_menu !== 4){ menu_btn_change_active(4); }

//         //페이지별 애니메이션

//     });

    
// //scroll에 따라 nav menu 버튼 활성화
//     function menu_btn_change_active(num){
//         menuBtns.map(function(id){ document.querySelector(id).classList.remove('active'); }); //active 모두 삭제
//         document.querySelector(menuBtns[num-1]).classList.add('active'); //active 추가
//         printed_menu = num; //현재 활성화 값 저장
//     }