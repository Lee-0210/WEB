// $(() => {
//   const mainMenu = $('#main-menu')
//   const back = $('#back')
//   const submenu = $('.submenu')

//   mainMenu
//   .on('mouseover', () => {
//     submenu.stop().slideDown(300)
//     back.stop().slideDown(300)
//   })
//   .on('mouseleave', () => {
//     submenu.stop().slideUp(500)
//     back.stop().slideUp(500)
//   })
// })

$(() => {
  const mainMenu = $('.main-menu > .menu-item, #back')

  // mainMenu.on('mouseover', () => {
  //   $('.submenu').stop().slideDown()
  //   $('#back').stop().slideDown()
  // })
  // mainMenu.on('mouseout', () => {
  //   $('.submenu').stop().slideUp()
  //   $('#back').stop().slideUp()
  // })

  mainMenu.hover(
    function() {
      $('.submenu, #back').stop().slideDown()
    }, function() {
      $('.submenu, #back').stop().slideUp()
    }
  )
})
