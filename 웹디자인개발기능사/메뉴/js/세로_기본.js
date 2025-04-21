// 문서 준비 이벤트
document.addEventListener('DOMContentLoaded', () => {
  const mainMenuList = document.querySelectorAll('.main-menu > .menu-item')

  mainMenuList.forEach((menu) => {
    // 해당 메뉴의 서브
    const submenu = menu.children[1]

    // 마우스 올렸을 때
    menu.addEventListener('mouseover', () => {
      submenu.classList.add('active')
    })

    // 마우스 벗어날 때
    menu.addEventListener('mouseout', () => {
      submenu.classList.remove('active')
    })
  })
})