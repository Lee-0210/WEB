$(() => {
  const speed = 1000
  const time = 3000
  const $slide = $('.slide')
  const $container = $('.slide-container')
  const size = $slide.width()
  const count = $slide.length
  $container.width(size * count)
  let index = 0;

  $slide.not(':first').hide()

  setInterval(function() {
    $slide.fadeOut(speed);
    $slide.eq(++index % count).fadeIn(speed)
  }, time)
})

// $(() => {
//   let index = 0
//   const speed = 500
//   const time = 3000
//   const $slide = $('.slide')
//   const count = $slide.length
//   $slide.not(':first').hide()

//   setInterval(function() {
//     index = (index + 1) % count
//     $slide.fadeOut(speed)
//     $slide.eq(index).fadeIn(speed)
//   }, time)
// })