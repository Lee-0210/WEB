// 문서 준비 이벤트
document.addEventListener('DOMContentLoaded', () => {
  const mainMenuList = document.querySelectorAll('.main-menu > .menu-item')

  mainMenuList.forEach((e) => {
    // 모든 서브 메뉴
    const subMenuList = e.querySelectorAll('.submenu')

    // 마우스 올렸을 때
    e.addEventListener('mouseover', () => {
      subMenuList.forEach((submenu) => {
        submenu.classList.add('active')
      })
    })

    // 마우스 벗어날 때
    e.addEventListener('mouseout', () => {
      subMenuList.forEach((submenu) => {
        submenu.classList.remove('active')
      })
    })
  })
})