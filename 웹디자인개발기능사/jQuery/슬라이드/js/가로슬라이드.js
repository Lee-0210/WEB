$(() => {
  const speed = 1000
  const time = 3000
  const $slide = $('.slide')
  const $container = $('.slide-container')
  const size = $slide.width()
  const count = $slide.length
  $container.width(size * count)

  setInterval(function() {
    $container.animate({
      left : -size,
    }, speed, function() {
      $container.css('left', '0')
      $container.append($('.slide').first())
    })
  }, time)
})