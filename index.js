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

/* Page1 */

    //배경 축소
    const bg_reduce_delay = 1000;
    const cursor_txt_delay = 1500;
    const cursor_txt_speed = 180;
    const page1_bg = document.querySelector('#page1 .bg');
    setTimeout(function(){
        page1_bg.classList.remove('s');
        page1_bg.classList.add('e');
    }, bg_reduce_delay);

    //로고 보임 + 사라짐
    const page1_logo = document.querySelector('#page1 .logo_wrap');
    setTimeout(function(){
        page1_logo.classList.remove('e');
        page1_logo.classList.add('s');
    }, 0);
    setTimeout(function(){
        page1_logo.classList.remove('s');
        page1_logo.classList.add('e');
    }, bg_reduce_delay);

    //글 써지는 효과
    setTimeout(function(){
        const br = document.createElement("br");
        const page1_desc = document.querySelector('#page1 .desc');
        const hu_txt = document.querySelectorAll('#page1 .hu_txt > li');
        const tw_title = document.querySelector('.tw-title');

        page1_desc.classList.remove('s');
        page1_desc.classList.add('e');

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
        }, cursor_txt_speed);
    }, cursor_txt_delay);

    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');
    const page3 = document.querySelector('#page3');
    const page4 = document.querySelector('#page4');
    const page5 = document.querySelector('#page5');
    const pageArr = new Array(page1, page2, page3, page4, page5);

    //스크롤 시 본문
    let operating = false;
    let nowPageNum = 0;
    window.addEventListener('wheel', function(event){
        const nowPage = pageArr[nowPageNum];
        let dir;
        let nextPage;
        
        if(!operating){
            if(event.deltaY < 0){
                dir = 'up';
                nextPage = pageArr[nowPageNum-1];
                if(nextPage === undefined) { return; }
                nowPageNum--;
            } else {
                dir = 'down';
                nextPage = pageArr[nowPageNum+1];
                if(nextPage === undefined) { return; }
                nowPageNum++;
            }
            operating = true;
            scrollTo(nowPage, nextPage, dir);
        }
    });

    function scrollTo(nowPage, nextPage, dir) {
        nextPage.classList.add('next');

        setTimeout(function(){ //z-index 변경되고 실행
            if(dir === 'up'){
                nowPage.classList.add('up');
            } else if(dir === 'down') {
                nowPage.classList.add('down');
            }

            nextPage.classList.add('now');
            nextPage.classList.remove('next');
        }, 300);
        
        setTimeout(function(){
            if(nowPage.classList.contains('up')){ nowPage.classList.remove('up'); }
            if(nowPage.classList.contains('down')){ nowPage.classList.remove('down'); }
            if(nowPage.classList.contains('now')){ nowPage.classList.remove('now'); }
            
        },1000);

        setTimeout(function(){ operating = false; },2000);
        
    }


/* 스크롤 페이지 이동 */
    const pageHeight = document.documentElement.clientHeight;
    const page1Height = pageHeight * 0; //page1 scrollTop value
    const page2Height = pageHeight * 1; //page2 scrollTop value
    const page3Height = pageHeight * 2; //page3 scrollTop value
    const page4Height = pageHeight * 3; //page4 scrollTop value
    const page5Height = pageHeight * 4; //page5 scrollTop value
    let printed_menu = 1; //now printed menu

    // //스크롤 시 글씨 나타나는 효과
    // const saTriggerMargin = 300;
    // const saElementList = document.querySelectorAll('.sa');

    // const saFunc = function() {
    //     for (const element of saElementList) {
    //         if (!element.classList.contains('show')) {
    //             if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
    //                 element.classList.add('show');
    //             }
    //         }
    //     }
    // }

    // window.addEventListener('load', saFunc);
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
