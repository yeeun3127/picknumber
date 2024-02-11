// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 버튼을 누른다
// 만약에 유저가 랜덤 번호를 맞추면 , 맞췄습니다!!!
// 랜덤번호가 < 유저번호  down!!!
// 랜덤번호가 > 유저번호  up!!!
// reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다 ( 더이상 추측불가, 버튼이disable)
// 유저가 1-100 범위 밖에 숫자를 입력하면 알려준다 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다 기회를 깍지 않는다

let computerNum = 0;
let userButton = document.getElementById("user-click");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;

userButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
chances.addEventListener("click", chance);

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "번호를 입력해주세요!";
}

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  chances--;
  if (computerNum > userValue) {
    resultArea.textContent = "UP";
  } else if (computerNum < userValue) {
    resultArea.textContent = "DOWN";
  } else {
    resultArea.textContent = "맞췄습니다!";
  }
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    userButton.Disabled = true;
  }
}

function chance() {
  let chanceValue = chances.value;
  chanceValue = chanceValue++;
  chances.textContent = `찬스 :${chanceValue}`;
}

pickRandomNum();
