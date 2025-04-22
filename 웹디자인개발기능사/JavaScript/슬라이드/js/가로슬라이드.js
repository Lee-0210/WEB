// 문서 준비 이벤트
document.addEventListener('DOMContentLoaded', (e) => {
  const parent = document.querySelector('.slide')
  const slides = document.querySelectorAll('.container .slide img')
  let infi = 1
  const list = []
  const size = 1200

  for(let i = 0; i < slides.length; i++) {
    list.push(slides[i].cloneNode(true))
  }



  function slide() {
    parent.style.transform = `translateX(${size}px)`

  }


  setInterval(slide, 3000)
})
