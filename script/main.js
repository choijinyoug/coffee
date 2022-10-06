// 292
const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll',function(){
    console.log(window.scrollY);//스크롤값 확인하기
    if(window.scrollY > 500){
        // badgeEl.style.display= 'none';
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
        });
    }else{
        // badgeEl.style.display= 'block';
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        });
    }
});

// gsap.to(요소, 시간, 속성)

const fadeEl = document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl,index){
    gsap.to(fadeEl, 1,{
        delay:(index+1) * .7,
        opacity:1
    });
});

//커피프로모션 토글아이콘 클릭시 박스 숨기고/나타내기
const promotionEl = document.querySelector('section.promotion');
const toggleBtnEl = document.querySelector('.toggle_btn');

//토글버튼을 클릭하면 프로모션의 크기가 변한다.
toggleBtnEl.addEventListener('click',function(){
    // alert('asfafsfsdfeafa');
    if(promotionEl.classList.contains('hide')){ //만약에 promotion클래스에 hide서식이 있다면
        promotionEl.classList.remove('hide');//높이 663이 되어야
    }else{ //그렇지 않으면
        //높이가 0
        promotionEl.classList.add('hide');//높이 0이 되어야
    }
});
