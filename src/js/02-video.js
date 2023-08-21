import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time') != null) {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(currentTime);
}

player.on(
  'timeupdate',
  throttle(timer => {
    localStorage.setItem('videoplayer-current-time', timer.seconds);
  }, 1000)
);
