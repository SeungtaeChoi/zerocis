'use strict';

//Anchor 써서 효과 냄
// document.getElementById('menu1').onclick = menu_btn_click;
// document.getElementById('menu2').onclick = menu_btn_click;
// document.getElementById('menu3').onclick = menu_btn_click;
// document.getElementById('menu4').onclick = menu_btn_click;

// function menu_btn_click(e){
//     console.log(e.target.id);
// }

//menu_btn
let menu_btn_array = document.getElementsByClassName('menu_btn');

//page별 scroll top 높이
const pageHeight = document.documentElement.clientHeight;
const page1Height = pageHeight * 0;
const page2Height = pageHeight * 1;
const page3Height = pageHeight * 2;
const page4Height = pageHeight * 3;
const page5Height = pageHeight * 4;
const page6Height = pageHeight * 5;

//스크롤 시
let printed_page = 1;
menu_btn_change_active(1);
window.addEventListener('scroll', () => {

    // 현재 스크롤바 위치
	let scrollLocation = document.documentElement.scrollTop;

    if(scrollLocation >= page1Height && scrollLocation < page2Height && printed_page !== 1){ menu_btn_change_active(1); }
    if(scrollLocation >= page2Height && scrollLocation < page3Height && printed_page !== 2){ menu_btn_change_active(2); }
    if(scrollLocation >= page3Height && scrollLocation < page6Height && printed_page !== 3){ menu_btn_change_active(3); }
    if(scrollLocation >= page6Height && printed_page !== 4){ menu_btn_change_active(4); }

    // 스크롤바 위치에 따라 menu_btn class 변경
    

	// let windowHeight = window.innerHeight; // 스크린 창
	// let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

	// if(scrollLocation + windowHeight >= fullHeight){
	// 	console.log('끝')
	// }
});

function menu_btn_change_active(num){
    console.log('menu_btn_change_active' + num);
    printed_page = num;
    for (const menu_btn of menu_btn_array) {
        menu_btn.classList.remove('active');
    }
    menu_btn_array[num-1].classList.add('active');
}