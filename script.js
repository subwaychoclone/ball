let score = 0;
const scoreDisplay = document.getElementById('score');
const ball = document.getElementById('ball');
const gameArea = document.querySelector('.game-area');

// 게임 영역 내에서 랜덤 위치로 공 이동 함수
function moveBall() {
    const maxX = gameArea.clientWidth - ball.clientWidth;
    const maxY = gameArea.clientHeight - ball.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    ball.style.transform = `translate(${x}px, ${y}px)`;
}

// 클릭 시 점수 증가 및 공 이동
ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveBall();
});

// 초기 공 위치 설정
moveBall();
