let score = 0;
const scoreDisplay = document.getElementById('score');
const ball = document.getElementById('ball');

// 랜덤 위치로 공 이동 함수
function moveBall() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
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
