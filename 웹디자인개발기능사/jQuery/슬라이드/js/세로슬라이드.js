$(() => {
  const speed = 1000
  const time = 3000
  const $slide = $('.slide')
  const $container = $('.slide-container')
  const size = $slide.height()
  const count = $slide.length
  $container.height(size * count)

  setInterval(function() {
    $container.animate({
      top : -size,
    }, speed, function() {
      $container.css('top', '0')
      $container.append($('.slide').first())
    })
  }, time)
})