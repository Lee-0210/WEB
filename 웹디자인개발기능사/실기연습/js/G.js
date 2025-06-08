$(() => {
    $('nav > ul > li')
    .on('mouseenter', function() {
        $('.sub').stop().fadeIn();
    })
    .on('mouseleave', function() {
        $('.sub').stop().fadeOut();
    })

    // 슬라이드
    const $slides = $('.slide > ul');
    const $imgs = $slides.find('li');
    const count = $imgs.length;
    const size = 100;  // % 기준
    const delay = 3000;
    const speed = 500;
    let index = 0;

    // 이미지 복제 배열 만들기
    const list = [];
    $imgs.each(function () {
        list.push($(this).clone());
    });

    // 초기 2개만 보여줌
    $slides.empty();
    $slides.append(list[index]);
    $slides.append(list[index + 1]);

    // 애니메이션 함수
    function animate(value) {
        $.each(list, function (i, $img) {
            $img.css({
                'transition': `transform ${speed}ms ease`,
                'transform': `translateX(${value}%)`
            });
        });
    }

    // 슬라이드 함수
    function slide() {
        animate(-size); // 왼쪽으로 밀기

        // 다음 인덱스 계산
        index = (index + 1) % count;
        const next = (index + 1) % count;

        // 애니메이션 후 DOM 교체
        setTimeout(function () {
            $slides.empty();
            animate(0);  // 위치 초기화
            $slides.append(list[index]);
            $slides.append(list[next]);
        }, speed);
    }

    // 반복 실행
    setInterval(slide, delay);

    // 컨텐츠 탭
    $('.tabmenu > li').on('click', function() {
        $('.tabmenu > li').removeClass('on')
        $(this).addClass('on')
    })

    // 팝업
    $('.pop')
    .on('click', function() {
        $('.popup').show()
    })
    $('.popup .close').on('click', function() {
        $('.popup').hide()
    })
})

// document.addEventListener('DOMContentLoaded', function() {
//     // 이미지 3장
//     const slides = document.querySelector('.slide > ul')
//     const img = document.querySelectorAll('.slide > ul > li')
//     const count = img.length
//     const size = 100
//     const delay = 3000
//     const speed = 500
//     let index = 0

//     // 이미지 슬라이드 복제
//     const list = []
//     for (let i = 0; i < img.length; i++) {
//         const clone = img[i].cloneNode(true)
//         list.push(clone)
//     }

//     // 다 비우고 1번2번 이미지 넣기
//     slides.innerHTML = ''
//     slides.appendChild(list[index])
//     slides.appendChild(list[index+1])

//     // 애니메이션
//     function animate( value ) {
//         for (let i = 0; i < list.length; i++) {
//             const slideImg = list[i];
//             slideImg.style.transform
//             = `translateX( ${value}% )`
//         }
//     }

//     // 슬라이드
//     function slide() {
//         // 사이즈 만큼 슬라이드
//         animate(-size)
//         // index 계산
//         index = (index + 1) % count
//         next = (index + 1) % count
//         // 다음 슬라이드로 전환
//         setTimeout(() => {
//             slides.innerHTML = ''
//             animate(0)
//             slides.appendChild(list[index])
//             slides.appendChild(list[next])
//         }, speed)
//     }
//     // 3초마다 슬라이드
//     setInterval(slide, delay)
// })