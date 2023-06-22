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
        // 현재 이미지 표시;
        $('.slider .sliders a').eq(num).addClass('active');
    }, 3000)

    // tab
    $('.tab-group > a:first-child').click(function(){
        console.log('공지사항 버튼');
        // 기본 버튼 스타일 제거
        $('.tab-group > a').removeClass('active');
        // 현재 버튼 active
        $(this).addClass('active');

        // 이전 콘텐츠 제거
        $('.tab-content > div').removeClass('active');
        // 현재 콘텐츠 표시
        $('.tab-content > div:first-child').addClass('active');
    })

    $('.tab-group > a:last-child').click(function(){
        console.log('갤러리 버튼');
        $('.tab-group > a').removeClass('active');
        $(this).addClass('active');

        // 이전 콘텐츠 제거
        $('.tab-content > div').removeClass('active');
        // 현재 콘텐츠 표시
        $('.tab-content > div:last-child').addClass('active');
    })

});


// 팝업 
$(function(){
    // 공지사항 첫번째 글을 클릭하면
    $('#content1 ul li:first-child').click(function(){
        // 팝업창에 active class 추가
        $('#pop-up').addClass('active');
    })

    // 팝업창 닫기 버튼
    $('.btn-close').click(function(){
        $('#pop-up').removeClass('active');
    })
})
