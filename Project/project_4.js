let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        minutes++;
        seconds = 0;

        if (minutes / 60 === 1) {
            hours++;
            minutes = 0;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds;
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes;
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours;
    } else {
        leadingHours = hours;
    }

    document.getElementById('timer').innerText =
        leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

const startStopBtn = document.querySelector('#startStopBtn');

let timerInterval = null;
let timerStatus = 'stopped';

startStopBtn.addEventListener('click', () => {
    const playIcon = `<i class="fa-solid fa-play" id="play"></i>`;
    const pauseIcon = `<i class="fa-solid fa-pause" id="pause"></i>`;

    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = pauseIcon;
        timerStatus = 'started';
    }
    else {
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = playIcon;
        timerStatus = 'stopped';
    }
})

const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval);
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
})