$(function() {
  // 메뉴
  $('nav > ul > li')
  .on('mouseover', function() {
    $(this).children('.sub').stop().slideDown(1000)
  })
  .on('mouseleave', function() {
    $(this).children('.sub').stop().hide()
  })

  const slide = $('.slide ul')
  let index = 0;
  function moveSlide() {
    slide.css('transform', `translateY(${((++index)%3) * -350}px)`)
  }

  setInterval(moveSlide, 3000)

  // 팝업
  $('.pop').on('click', function() {
    $('.popup').show();
    return false;
  })
  $('.popcon .close button').on('click', function() {
    $('.popup').hide();
  })
})