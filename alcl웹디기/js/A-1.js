$(function() {
    $('nav > ul > li')
    .on('mouseenter', function() {
        $('.sub').stop().slideDown()
    })
    .on('mouseleave', function() {
        $('.sub').stop().slideUp()
    })

    // 슬라이드
    let index = 1;
    function moveSlide() {
        index = index % 3
        $('.slide').css('transform', `translateY(${(100 / 3) * -index}%)`)
        index++
    }
    setInterval(moveSlide, 3000)


    // 공지사항 탭
    $('.con h2').on('click', function() {
        $('.con h2').removeClass('on')
        $(this).addClass('on')
    })

    // 팝업창
    let popup_now = false
    $('.pop').on('click', function(event) {
        $('.popup').stop().show();
        popup_now = true
        event.stopPropagation();
    })
    $(window).on('click', function() {
        if(popup_now) {
            $('.popup').stop().hide();
        }
    })
})