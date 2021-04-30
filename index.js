'use strict';

//인터넷 익스플로러 체크
if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
    window.location = "microsoft-edge:" + window.location.href;
    console.log(1);
}

//시작
const pageHeight = document.documentElement.clientHeight;
const page1Height = pageHeight * 0; //page1 scrollTop value
const page2Height = pageHeight * 1; //page2 scrollTop value
const page3Height = pageHeight * 2; //page3 scrollTop value
const page4Height = pageHeight * 3; //page4 scrollTop value
const page5Height = pageHeight * 4; //page5 scrollTop value
const page6Height = pageHeight * 5; //page6 scrollTop value
const menu_btn_array = document.getElementsByClassName('menu_btn'); //nav menu botton list
let printed_menu = 1; //now printed menu

//스크롤 할 때
menu_btn_change_active(1);
window.addEventListener('scroll', () => {

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
    for (const menu_btn of menu_btn_array) { menu_btn.classList.remove('active'); } //active 모두 삭제
    menu_btn_array[num-1].classList.add('active'); //active 추가
    printed_menu = num; //현재 활성화 값 저장
}