// 문서 준비 이벤트
document.addEventListener('DOMContentLoaded', (e) => {
  const parent = document.querySelector('.slide')
  const slides = document.querySelectorAll('.container .slide img')
  let index = 0
  const size = 1200

  function slide() {
    index = (index + 1) % 3
    first = slides[index % 3]
    for(let i = 0; i < slides.length; i++) {
      const slide = slides[i]
      slide.style.transform = `translateX(calc(-${size}px))`
    }
    parent.insertAdjacentElement('beforeend', first)
  }

  setInterval(slide, 3000)
})
