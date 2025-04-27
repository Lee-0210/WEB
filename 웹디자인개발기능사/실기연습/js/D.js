$(function() {
  $('nav > ul > li')
  .on('mouseover', function() {
    $(this).children('.sub').stop().slideDown()
  })
  .on('mouseleave', function() {
    $(this).children('.sub').stop().slideUp()
  })

  let index = 0;
  function moveSlide() {
    index = (index + 1) % 3
    $('.slide > ul').css('transform', `translateX(calc((100%/3)*${-index}))`)
  }
  setInterval(moveSlide, 3000)

  // 탭
  $('.con > ul > li').on('click', function() {
    $('.con > ul > li').removeClass('on')
    $(this).addClass('on')
    return false;
  })

  // 팝업
  $('.pop').on('click', function() {
    $('.popup').show()
    return false;
  })
  $('.popup > .close > button').on('click', function() {
    $('.popup').hide()
  })
})