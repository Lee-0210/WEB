$(function() {
    $('nav > ul > li')
    .on('mouseenter', function() {
        $(this).children('.sub').stop().slideDown()
    })
    .on('mouseleave', function() {
        $(this).children('.sub').stop().slideUp()
    })

    // 슬라이드
    let index = 1;
    function moveSlide() {
        index %= 3
        $('.slide ul').css('transform', `translateX(${(-100/3) * index}%)`)
        index++;
    }

    setInterval(moveSlide, 3000)

    // 탭
    $('.con > div').on('click', function() {
        $('.con > div > h2').removeClass('on')
        $(this).children('h2').addClass('on')
    })
})