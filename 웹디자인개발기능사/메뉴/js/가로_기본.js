// 문서 준비 이벤트
document.addEventListener('DOMcontentLoaded', () => {
  const mainMenuList = document.querySelectorAll('.main-menu > .menu-item')

  mainMenuList.forEach((e) => {
    // 해당 메인 메뉴의 서브 메뉴
    const submenu = e.children[1]

    // 마우스 올렸을 때
    e.addEventListener('mouseover', () => {
      submenu.classList.add('active')
    })
    // 마우스 벗어날 때
    e.addEventListener('mouseout', () => {
      submenu.classList.remove('active')
    })
  })
})