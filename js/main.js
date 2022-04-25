const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

// search영역의 input에 focus 시 실행되는 함수
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// search영역의 input에 focus 해제 시 실행되는 함수
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 화면 스크롤 시 실행되는 함수(lodash throttle 함수 사용)
const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // 배지 비노출
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        // 배지 노출
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수, 시간(밀리세컨드 단위로));
// gsap.to(요소, 지속시간, 옵션);