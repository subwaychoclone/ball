let score = 0; // 현재 점수
let level = 1; // 현재 레벨
let time = 10; // 남은 시간
let goal = 5; // 레벨 목표 점수

const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const timeDisplay = document.getElementById('time');
const ball = document.getElementById('ball');
const gameArea = document.querySelector('.game-area');

let timer; // 타이머 변수

// 공을 게임 영역 내에서 랜덤 위치로 이동
function moveBall() {
    const maxX = gameArea.clientWidth - ball.clientWidth;
    const maxY = gameArea.clientHeight - ball.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    ball.style.transform = `translate(${x}px, ${y}px)`;
}

// 레벨 시작
function startLevel() {
    score = 0;
    time = 10;
    goal = level * 5; // 목표 점수는 레벨 x 5
    scoreDisplay.textContent = score;
    levelDisplay.textContent = level;
    timeDisplay.textContent = time;
    moveBall();
    startTimer();
}

// 타이머 시작
function startTimer() {
    timer = setInterval(() => {
        time--;
        timeDisplay.textContent = time;

        if (time === 0) {
            clearInterval(timer);
            checkLevelCompletion();
        }
    }, 1000);
}

// 레벨 완료 확인
function checkLevelCompletion() {
    if (score >= goal) {
        alert(`축하합니다! 레벨 ${level} 통과!`);
        level++;
        startLevel();
    } else {
        alert('게임 오버! 목표를 달성하지 못했습니다.');
        resetGame();
    }
}

// 게임 초기화
function resetGame() {
    level = 1;
    startLevel();
}

// 공 클릭 시 점수 증가
ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveBall();
});

// 게임 시작
startLevel();
