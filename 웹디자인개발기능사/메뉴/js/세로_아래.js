// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", () => {
  const mainMenuList = document.querySelectorAll('.main-menu > .menu-item')
  mainMenuList.forEach((e) => {
    const submenu = e.children[1]

    e.addEventListener("mouseover", () => {
      submenu.classList.add('active')
    })

    e.addEventListener("mouseout", () => {
      submenu.classList.remove('active')
    })
  })
})