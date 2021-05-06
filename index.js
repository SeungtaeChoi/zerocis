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
     //페이지별 scrolltop 값 저장
    let nowPage = 0;
    const saElementList = document.querySelectorAll('.page');
    const pageTopArr = new Array();
    for (const element of saElementList) {
        pageTopArr.push(element.getBoundingClientRect().top);
    }
    //스크롤
    let lastScrollTop = 0;
    window.addEventListener('scroll', function(e){
        if(pageTopArr.includes(lastScrollTop)){
            if (window.scrollY > lastScrollTop){
                nowPage++;
                const nextPage = pageTopArr[nowPage];
                window.scrollTo(0, nextPage, 'smooth');
            } else {
                nowPage--;
                const nextPage = pageTopArr[nowPage];
                window.scrollTo(0, nextPage, 'smooth');
            }
        }
        lastScrollTop = window.scrollY;
    });

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