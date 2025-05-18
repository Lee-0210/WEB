$(() => {

  // 네비
  $('nav > ul > li')
  .on('mouseenter', function() {
    $('nav > ul > li').children('.sub').stop().slideDown()
  })
  .on("mouseleave", function() {
    $('nav > ul > li').children('.sub').stop().slideUp()
  })

  // 슬라이드
  let index = 1;
  function moveSlide() {
    $('.slide > ul > li').fadeOut()
    $('.slide > ul > li').eq(index++ % 3).fadeIn()
  }
  setInterval(moveSlide, 3000)
})