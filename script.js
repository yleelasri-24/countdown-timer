let interval;
let timeLeft = 0;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    if (timeLeft > 0) {
        isRunning = true;
        interval = setInterval(updateTimer, 1000);
        startButton.disabled = true;
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
    startButton.disabled = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 0;
    updateDisplay();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
    } else {
        stopTimer();
    }
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        timeLeft = 60; // Set your desired countdown time in seconds
        startTimer();
    }
});

stopButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    }
});

resetButton.addEventListener('click', () => {
    resetTimer();
});
