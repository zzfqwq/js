'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// 💬 公共函数：更新 message 文本
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 💬 公共函数：更新分数
const updateScore = function (value) {
  score = value;
  document.querySelector('.score').textContent = score;
};

// 🎯 处理点击 "Check" 按钮
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 没有输入
  if (!guess) {
    displayMessage('🚫 No number!');

    // 猜对了
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // 记录最高分
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 猜错了
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      updateScore(score - 1);
    } else {
      displayMessage('💥 You lost the game!');
      updateScore(0);
    }
  }
});

// 🔁 处理点击 "Again" 按钮：重置游戏
document.querySelector('.again').addEventListener('click', function () {
  // 重置状态
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // 重置界面
  displayMessage('Start guessing...');
  updateScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
