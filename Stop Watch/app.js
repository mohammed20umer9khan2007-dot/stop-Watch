let millSec = document.getElementById("millSec")
let sec = document.getElementById("sec")
let min = document.getElementById("min")
let hr = document.getElementById("hours")

let millSecond = 0;
let second = 0;
let minutes = 0;
let hours = 0;

var timer = false;

function startTimer() {
    timer = true;
    console.log(timer);
    if (timer) {
        millSecond = millSecond + 1;
        millSec.innerHTML = millSecond;

        if (millSecond == 1000) {
            second = second + 1
            sec.innerHTML = second;
            millSecond = 0

            if (second == 60) {
                minutes = minutes + 1
                min.innerHTML = minutes

                if (minutes == 60) {
                    hours = hours + 1
                    hr.innerHTML = hours
                    minutes = 0
                }
            }
        }
    }

    if (millSecond < 10) {
        millSec.innerHTML = "0" + millSecond;
        if (second < 10) {
            sec.innerHTML = "0" + second;
        }
    }

    if (minutes < 10) {
        min.innerHTML = "0" + minutes;
    }

    if (hours < 10) {
        hr.innerHTML = "0" + hours;
    }
    start()
}

let interval;
function start() {
    interval = setTimeout(startTimer,10)
}

// stop function
function stop() {
    clearTimeout(interval)
    console.log("stopped");
}

// reset function
function reset() {
    location.reload();
}