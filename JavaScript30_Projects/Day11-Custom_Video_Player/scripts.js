const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){
  if(video.paused){
    video.play();
    toggle.textContent = '❚ ❚';
  }
  else{
    video.pause();
    toggle.textContent = '►';
  }
}

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  // console.log(this.value);
  // console.log(this.name);
  video[this.name] = this.value;
}

function handleProgress(){
  const percent = (video.currentTime/video.duration)*100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  // console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', ()=> mosuedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown=true);
progress.addEventListener('mouseup',() => mousedown=false);