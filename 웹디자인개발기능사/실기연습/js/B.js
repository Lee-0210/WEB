$(function() {
  // 메뉴
  $('nav>ul>li')
  .on('mouseover', () => {
    $('.sub, .menu-bg').stop().slideDown()
  })
  .on('mouseleave', () => {
    $('.sub, .menu-bg').stop().slideUp()
  })

  // 슬라이드
  $('.slide ul li').not(':eq(0)').hide()
  let i = 1;
  function slide() {
    $('.slide ul li').fadeOut()
    $('.slide ul li').eq(i++%3).fadeIn()
  }
  setInterval(slide, 3000)

  //탭메뉴
  $('.tabmenu > li').on('click', function() {
    $('.tabmenu > li').removeClass('on')
    $(this).addClass('on')
  })

  $('.pop').on('click', function() {
    $('.popup').show()
  })
  $('.close button').on('click', function() {
    $('.popup').hide()
  })
})