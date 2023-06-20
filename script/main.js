// main.js
$(function(){
    // 네비게이션
    $('nav .depth1 > li').hover(
        function() {
            $(this).children('.depth2').addClass('active');
        },
        function() {
            $(this).children('.depth2').removeClass('active');
        }
    );

    // slider: fade 효과
    let num = 0; // 이미지 번호

    setInterval(function(){
        num = num + 1; // 이미지 번호 증가
        if(num > 2) num = 0;
        console.log(num);
        // 기존 이미지 제거
        $('.slider .sliders a').removeClass('active');
        // 현재 이미지 푯;
        $('.slider .sliders a').eq(num).addClass('active');
    }, 3000)



});

