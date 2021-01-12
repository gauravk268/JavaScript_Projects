let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  clearInterval(countdown);

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
  // console.log({minutes, remainderSeconds});
}

function displayEndTime(timerStamp){
  const end = new Date(timerStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At
  
  ${hour > 12 ? hour-12 : hour}:${minutes < 0? '0':''}${minutes}`;
}

function startTimer(){
  // console.log(this.dataset.time);
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins*60);
  this.reset();
})