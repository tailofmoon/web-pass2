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
});