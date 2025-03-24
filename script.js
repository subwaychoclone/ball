let score = 0; // 현재 점수
let level = 1; // 현재 레벨
let time = 10.0; // 남은 시간 (초 단위)
let goal = 5; // 레벨 목표 점수

const maxLevel = 100; // 최대 레벨 설정

const scoreDisplay = document.getElementById('score');
const goalDisplay = document.getElementById('goal');
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
    if (level > maxLevel) {
        alert('축하합니다! 게임 클리어!');
        resetGame();
        return;
    }

    score = 0;
    time = 5 + level * 2; // 시간은 레벨에 비례하여 증가 (예: 5초 + 레벨 * 2초)
    goal = level * 5; // 목표 점수는 레벨 x 5

    // 화면에 표시
    scoreDisplay.textContent = score;
    goalDisplay.textContent = goal;
    levelDisplay.textContent = level;
    timeDisplay.textContent = time.toFixed(1);

    moveBall(); // 공 초기 위치 설정
    startTimer(); // 타이머 시작
}

// 타이머 시작
function startTimer() {
    clearInterval(timer); // 기존 타이머 초기화
    timer = setInterval(() => {
        time -= 0.1;
        timeDisplay.textContent = time.toFixed(1);

        if (time <= 0) {
            clearInterval(timer);
            checkLevelCompletion();
        }
    }, 100); // 0.1초마다 업데이트
}

// 레벨 완료 확인
function checkLevelCompletion() {
    if (score >= goal) {
        alert(`ㅊㅋㅊㅋ 레벨 ${level} 통과!`);
        level++;
        startLevel();
    } else {
        alert('게임 오버! 다음에 더 잘해보세요.');
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
    
    if (score >= goal) {
        clearInterval(timer); // 목표 달성 시 타이머 중지
        checkLevelCompletion();
    } else {
        moveBall();
    }
});

// 게임 시작
startLevel();
