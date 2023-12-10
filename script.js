const audioPlayer = document.getElementById('audioPlayer');
const timerDisplay = document.getElementById('timerDisplay');

const audioPath = './sound.mp3';

function updateTime() {
  const now = new Date();
  const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0, 0);
  const timeLeft = nextMinute - now;

  const secondsLeft = Math.floor(timeLeft / 1000);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  timerDisplay.textContent = `Time remaining: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Check if time left is less than or equal to 500 milliseconds
  if (timeLeft <= 500) {
    audioPlayer.currentTime = 0;
    audioPlayer.src = audioPath;
    audioPlayer.play().then(() => {
      console.log('Audio played successfully.');
    }).catch(error => {
      console.error('Error playing audio:', error);
    });
  }
}

updateTime();
setInterval(updateTime, 500); // Update time every 500 milliseconds
