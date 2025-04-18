// 댓글 추가
const $content = document.getElementById('content')
function addComment() {
  const writer = document.getElementById('writer').value
  const content = document.getElementById('content').value

  const today = new Date()
  const date = today.toISOString().slice(0, 10) // 2025-04-18
  let commentCard = `
      <div class="comment-card">
        <div class="title">
          <div class="itme">
            <div class="avatar">
              <img src="img/avatar.png" alt="프로필">
            </div>
            <div class="writer">${writer}</div>
          </div>
          <div class="item">
            <div class="date">${date}</div>
          </div>
        </div>
        <div class="content-box">
          <p class="content">
            ${content}
          </p>
        </div>
      </div>
  `

  const commentList = document.getElementById('commentList')
  const card = document.createElement('div')
  card.innerHTML = commentCard
  commentList.appendChild(card)

  document.getElementById('writer').value = ''
  document.getElementById('content').value = ''


}

// [작성] 버튼 클릭 이벤트
const btn = document.getElementById('commentBtn')
btn.addEventListener('click', (e) => {
  addComment()
})

$content.addEventListener('keyup', (e) => {
  if(e.keyCode == 13) {
    addComment()
  }
})