let h;
let m;
let s;
let start;

function startInterval () {
  const sec = +s.innerHTML;
  if (sec + 1 >= 60) {
    const min = +m.innerHTML;
    if (min + 1 >= 60) {
      const hour = +h.innerHTML;
      h.innerHTML = (hour + 1 <= 9) ? `0${hour + 1}` : hour + 1;
      m.innerHTML = '00';
      s.innerHTML = '00';
    } else {
      m.innerHTML = (min + 1 <= 9) ? `0${min + 1}` : min + 1;
      s.innerHTML = '00';
    }
  } else {
    s.innerHTML = (sec + 1 <= 9) ? `0${sec + 1}` : sec + 1;
  }
}

function stopWatch(state, sec, min, hour) {
  h = hour;
  m = min;
  s = sec;
  if (state === 'start') {
    h.innerHTML = '00';
    m.innerHTML = '00';
    s.innerHTML = '00';
    start = setInterval(startInterval, 1000);
  }
  if (state === 'pause') {
    clearInterval(start);
  }
  if (state === 'continue') {
    if (h.innerHTML === '') {
      h.innerHTML = '00';
      m.innerHTML = '00';
      s.innerHTML = '00';
    }
    start = setInterval(startInterval, 1000);
  }
  if (state === 'stop') {
    h.innerHTML = '00';
    m.innerHTML = '00';
    s.innerHTML = '00';
    clearInterval(start);
  }
}

export { stopWatch };