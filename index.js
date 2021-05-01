'use strict';

//시작
const pageHeight = document.documentElement.clientHeight;
const page1Height = pageHeight * 0; //page1 scrollTop value
const page2Height = pageHeight * 1; //page2 scrollTop value
const page3Height = pageHeight * 2; //page3 scrollTop value
const page4Height = pageHeight * 3; //page4 scrollTop value
const page5Height = pageHeight * 4; //page5 scrollTop value
const page6Height = pageHeight * 5; //page6 scrollTop value
const menuBtns = ['#menu1','#menu2','#menu3','#menu4'];
let printed_menu = 1; //now printed menu

//메뉴 버튼 클릭
    menuBtns.map(function(id){ 
        document.querySelector(id).addEventListener('click', function(e){
            const target = e.target;
            const link = target.dataset.link;
            if (link == null) {
                return;
            } else {
                scrollIntoView(link);
            }
        });
    });
    function scrollIntoView(selector) {
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({ behavior: 'smooth' });
    }


//스크롤
    menu_btn_change_active(1);
    window.addEventListener('scroll', function(){

        //메뉴 active 여부 체크
        let scrollLocation = document.documentElement.scrollTop;
        if(scrollLocation >= page1Height && scrollLocation < page2Height && printed_menu !== 1){ menu_btn_change_active(1); }
        if(scrollLocation >= page2Height && scrollLocation < page3Height && printed_menu !== 2){ menu_btn_change_active(2); }
        if(scrollLocation >= page3Height && scrollLocation < page6Height && printed_menu !== 3){ menu_btn_change_active(3); }
        if(scrollLocation >= page6Height && printed_menu !== 4){ menu_btn_change_active(4); }

        //페이지별 애니메이션

    });

    
//scroll에 따라 nav menu 버튼 활성화
    function menu_btn_change_active(num){
        menuBtns.map(function(id){ document.querySelector(id).classList.remove('active'); }); //active 모두 삭제
        document.querySelector(menuBtns[num-1]).classList.add('active'); //active 추가
        printed_menu = num; //현재 활성화 값 저장
    }