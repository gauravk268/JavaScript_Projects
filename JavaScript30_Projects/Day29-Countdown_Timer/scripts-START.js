let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(seconds){
  const now = Date.now();
  const then = now + seconds*1000;
  // console.log({now, then});
  displayTimeLeft(seconds);
  displayEndTime(then);

  setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);

    if(secondsLeft < 0){
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title =display;
  timerDisplay.textContent = display;
  console.log({minutes, remainderSeconds});
}

function displayEndTime(timerStamp){
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back Ar ${hour > 12 ? hour-12 : hour}:${minutes < 0? '0':''}${minutes}`;
}