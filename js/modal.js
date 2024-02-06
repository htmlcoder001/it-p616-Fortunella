const modal = Array.from(document.querySelectorAll('.modal-banner'));


const btn = document.getElementById('btn_close1')
btn.addEventListener('click', () => {
  modal[0].style.opacity = '0';
  modal[0].style.visibility = 'hidden';
})
const btn1 = document.getElementById('btn_close2')
btn1.addEventListener('click', () => {
  modal[1].style.opacity = '0';
  modal[1].style.visibility = 'hidden';
})
const btn2 = document.getElementById('btn_close3')
btn2.addEventListener('click', () => {
  modal[2].style.opacity = '0';
  modal[2].style.visibility = 'hidden';
})
const btn3 = document.getElementById('btn_close4')
btn3.addEventListener('click', () => {
  modal[3].style.opacity = '0';
  modal[3].style.visibility = 'hidden';
})

function showModal() {
  modal[0].style.opacity = '1';
  modal[0].style.visibility = 'visible';
  let timerId = setInterval(() => {
    modal[0].style.opacity = '0';
    modal[0].style.visibility = 'hidden';
  }, 6000)

}

function showModal1() {
  modal[1].style.opacity = '1';
  modal[1].style.visibility = 'visible';
  let timerId = setInterval(() => {
    modal[1].style.opacity = '0';
    modal[1].style.visibility = 'hidden';
  }, 6000)
}

function showModal2() {
  modal[2].style.opacity = '1';
  modal[2].style.visibility = 'visible';
  let timerId = setInterval(() => {
    modal[2].style.opacity = '0';
    modal[2].style.visibility = 'hidden';
  }, 10000)
}

function showModal3() {
  modal[3].style.opacity = '1';
  modal[3].style.visibility = 'visible';
  let timer = 0;
  let timerId = setInterval(() => {
    modal[3].style.opacity = '0';
    modal[3].style.visibility = 'hidden';
  }, 10000)
}

let timer = 0;
let timerId = setInterval(() => {
  showModal();
  timer++;
  if (timer == 1) {
    clearInterval(timerId);
  }
}, 10000);

let timer1 = 0;
let timerId1 = setInterval(() => {
  showModal1();
  timer1++;
  if (timer1 == 1) {
    clearInterval(timerId1);
  }
}, 26000);

let timer2 = 0;
let timerId2 = setInterval(() => {
  showModal2();
  timer2++;
  if (timer2 == 1) {
    clearInterval(timerId2);
  }
}, 60000);
let timer3 = 0;
let timerId3 = setInterval(() => {
  showModal3();
  timer3++;
  if (timer3 == 1) {
    clearInterval(timerId3);
  }
}, 90000);




