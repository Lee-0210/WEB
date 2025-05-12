$(function() {
  // 메뉴
  $("nav > ul > li")
  .on("mouseover", function() {
    $(this).children(".sub").stop().fadeIn();
  })
  .on("mouseleave", function() {
    $(this).children(".sub").stop().fadeOut();
  })

  // 팝업
  $(".pop").on("click", function() {
    $(".popup").show()
    return false;
  })
  $(".popup .close button").on("click", function() {
    $(".popup").hide()
  })

  // 슬라이드
  let index = 0;
  function moveSlide() {
    index = (index + 1) % 3
    $(".slide > ul").css("transform", `translateY(${-700 * index}px)`)
  }
  setInterval(moveSlide, 3000)
})