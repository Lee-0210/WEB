const icons = document.getElementsByClassName('icon')
let heartIcon = ''

for(let i = 0; i < icons.length; i++) {
  const icon = icons[i]
  if(icon.classList.contains('icon-heart'))
    heartIcon = icon
  icon.addEventListener('click', () => {
    icon.classList.toggle('selected')
  })
}

// 이미지 더블 클릭 이벤트
const imgBox = document.getElementById('img-box')
imgBox.addEventListener('dblclick', (e) => {
  if(!heartIcon.classList.contains('selected'))
    heartAlert()
  heartIcon.classList.toggle('selected')
})

// 하트 아이콘 클릭 시, 이벤트
heartIcon.addEventListener('click', (e) => {
  if(heartIcon.classList.contains('selected'))
    heartAlert()
})

// 좋아요
function heartAlert() {
  Swal.fire({
    title: "Like it!",
    text: "좋아요",
    imageUrl: "./img/heart.gif",
    imageWidth: 200,
    showConfirmButton: false,
    timer: 1000
  });
}
