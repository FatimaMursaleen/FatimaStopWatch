var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.querySelector('.min');
var secHead = document.querySelector('.sec');
var msecHead = document.querySelector('.msec');
var btn = document.querySelector('.start')
var interval;

function timer() {
    msec++
    msecHead.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHead.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        minHead.innerHTML = min;
        sec = 0;
    }
}
function startWatch() {
    interval = setInterval(timer, 10);
    btn.setAttribute("disabled", "disabled")
}

function stopWatch() {
    clearInterval(interval);
    btn.removeAttribute("disabled")
}

function resetWatch() {
    btn.removeAttribute("disabled");
    min = 0;
    sec = 0;
    msec = 0;
    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    msecHead.innerHTML = msec;
    clearInterval(interval);
}