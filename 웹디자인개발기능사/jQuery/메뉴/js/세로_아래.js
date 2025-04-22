$(() => {
  const mainMenu = $('.main-menu > .menu-item')

  // mainMenu
  // .on('mouseover', function() {
  //   $(this).find('.submenu').stop().slideDown()
  // })
  // .on('mouseout', function() {
  //   $(this).find('.submenu').stop().slideUp()C
  // })

  mainMenu.hover(
    function() {
      $(this).find('.submenu').stop().slideDown()
    },
    function() {
      $(this).find('.submenu').stop().slideUp()
    }
  )
})