// $(function() {
//   $('nav > ul > li')
//   .on('mouseover', function() {
//     $(this).find('.sub').stop().slideDown()
//   })
//   .on('mouseleave', function() {
//     $(this).find('.sub').stop().slideUp(0)
//   })
// })

document.addEventListener("DOMContentLoaded", () => {

  // 메뉴
  const navList = document.querySelectorAll('nav > ul > li');
  navList.forEach((e) => {
    e.addEventListener('mouseover', () => {
      e.querySelector('.sub').classList.add('active')
    })
    e.addEventListener('mouseleave', () => {
      e.querySelector('.sub').classList.remove('active')
    })
  })

  // 슬라이드
  const slide = document.querySelector('.image')
  let index = 0;

  function moveSlide() {
    slide.style.transform = `translateX(-${(++index % 3) * 800}px)`
  }

  setInterval(moveSlide, 3000)
})