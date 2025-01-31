let timer;
let isRunning = false;
let seconds = 25 * 60; // 25 minutes in seconds
let isPomodoro = true;

const timeDisplay = document.getElementById("time-display");
const startStopButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function startTimer() {
  timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      timeDisplay.textContent = formatTime(seconds);
    } else {
      clearInterval(timer);
      isRunning = false;
      startStopButton.textContent = "Start";
      alert(isPomodoro ? "Pomodoro finished! Take a break." : "Break finished! Start next Pomodoro.");
      isPomodoro = !isPomodoro;
      seconds = isPomodoro ? 25 * 60 : 5 * 60; // Switch between Pomodoro (25 min) and Break (5 min)
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  startStopButton.textContent = "Start";
}

startStopButton.addEventListener('click', () => {
  if (isRunning) {
    stopTimer();
  } else {
    startTimer();
    isRunning = true;
    startStopButton.textContent = "Pause";
  }
});

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  startStopButton.textContent = "Start";
  seconds = 25 * 60; // Reset to Pomodoro time
  timeDisplay.textContent = formatTime(seconds);
});
