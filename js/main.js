// 원하는 페이지 이동 효과
const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const projectBtn = document.querySelector('#project');
const animationBtn = document.querySelector('#Animation');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => {
  gsap.to(window, 0.8, {
    scrollTo: '#front-page',
  });
});

aboutBtn.addEventListener('click', () => {
  gsap.to(window, 0.8, {
    scrollTo: '#about-page',
  });
});
projectBtn.addEventListener('click', () => {
  gsap.to(window, 0.8, {
    scrollTo: '#project-page',
  });
});
animationBtn.addEventListener('click', () => {
  gsap.to(window, 0.8, {
    scrollTo: '#animation-page',
  });
});
contactBtn.addEventListener('click', () => {
  gsap.to(window, 0.8, {
    scrollTo: '#contact-page',
  });
});

gsap.from('header', {
  duration: 1.5,
  y: '-100%',
  ease: 'bounce',
});

// 실시간 좌표값 출력
window.addEventListener('scroll', function () {
  let pageYOffset = window.pageYOffset;
  //출력용
  document.querySelector('.pageYOffset').innerText = parseInt(pageYOffset);
});

// 문자 타이핑 효과
const content = "Hi. I'm WonHyo, \n Front-end Portfolio.";
const text = document.querySelector('.text');
let i = 0;

function typing() {
  let txt = content[i++]; //content 문자열안에있는 글자를 i 에 하나씩 삽입 , 그것을 txt로 보냄
  text.innerHTML += txt === '\n' ? '<br/>' : txt; //txt에 담긴것을 다 합하여 text값안에 넣음
  //변수 = 조건식 ? 값1 : 값2;
  //조건식을 판단하여 조건식이 참이면 값1, 조건식이 거짓이면 값2를 변수에 대입
  if (i > content.length) {
    //i가 글자열보다 많아질경우 i값을 0으로 되돌려 무한반복하게한다.
    text.textContent = '';
    i = 0;
  }
}
setInterval(typing, 200);

// ScrollMagic
// 스크롤시 요소들 동작 효과
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

// Swiper 효과
const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 500,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// Swiper 카드 효과
const contactswiper = new Swiper('.contactSwiper', {
  effect: 'cards',
  grabCursor: true,
});

// 스크롤시 애니메이션

const modules = document.querySelectorAll('.module');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    // gsap.to(요소,지속시간,옵션);
    if (window.scrollY > 7800) {
      gsap.to(modules, 0.8, {
        backgroundColor: '#2D4059',
      });

      if (window.scrollY > 9000) {
        gsap.to(modules, 0.8, {
          backgroundColor: '#EA5455',
        });

        if (window.scrollY > 11600) {
          gsap.to(modules, 0.8, {
            backgroundColor: '#F07B3F',
          });

          if (window.scrollY > 13500) {
            gsap.to(modules, 0.8, {
              backgroundColor: '#FFD460',
            });
          }
        }
      } //window.scrollY = 창의 스크롤 높이값
    } else {
      gsap.to(modules, 0.8, {
        backgroundColor: 'black',
      });
    }
  }, 300)
);

// 가로모드
gsap.registerPlugin(ScrollTrigger);
let container = document.getElementById('container');

gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
  ease: 'none',
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true, // 활성 상태에서 트리거 요소 고정
    scrub: 1, // 부드러운 스크러빙, 스크롤바를 "잡는"데 1초가 걸립니다.
    end: () => '+=' + container.offsetWidth,
  },
});

// 이메일js로 이메일 보내기
$(document).ready(function () {
  emailjs.init('user_MWZRpsWnm4YIDFQB5atlu');
  //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
  $('input[name=submit]').click(function () {
    var templateParams = {
      //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
      name: $('input[name=name]').val(),
      phone: $('input[name=phone]').val(),
      email: $('input[name=email]').val(),
      message: $('textarea[name=message]').val(),
    };

    emailjs
      .send('service_2przm0g', 'template_rrc8vu3', templateParams)
      //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('SUCCESS!');
        },
        function (error) {
          console.log('FAILED...', error);
          alert('FAILED...');
        }
      );
  });
});

// GSAP Animation
gsap.set('svg', {
  visibility: 'visible',
});

let tl = gsap.timeline({ repeat: -1 });
tl.to('#allBoxes rect', {
  transformOrigin: '107% 50%',
  rotation: gsap.utils.wrap([180, -180]),
  stagger: { each: 0.14 },
}).to(
  '#allBoxes',
  {
    x: -112,
    duration: tl.recent().duration(),
    ease: 'linear',
  },
  0
);

gsap.set('#ref', {
  scaleY: -1,
  transformOrigin: '50% 50%',
});
