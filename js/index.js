let inputDays = document.getElementById('input-days'),
    inputHours = document.getElementById('input-hours'),
    inputMinutes = document.getElementById('input-minutes'),
    inputSeconds = document.getElementById('input-seconds'),
    datetimeLocal = document.getElementById('dateInput'),
    monthInfo = document.getElementById('monthInfo'),
    btnStart = document.getElementById('btn-start'),
    btnStop = document.getElementById('btn-stop');

inputDays.disabled = true;
inputHours.disabled = true;
inputMinutes.disabled = true;
inputSeconds.disabled = true;


let countdownTimer,
    userDateTime,
    current_level;

const norm = (val) => val < 10 ? '0' + val : val;

function getLastDayInMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function timer() {

    let now = new Date();
    let daysInThisMonth = (getLastDayInMonth(now.getFullYear(), now.getMonth()) - now.getDate());//возвращает оставшееся количество дней в этом месяце

    if (userDateTime.getMonth() - now.getMonth() < 2 && (userDateTime.getMonth() - now.getMonth()) > 0) {
        monthInfo.innerHTML = (`In this month ${daysInThisMonth} days left, and in next month ${userDateTime.getDate()} days left.`);
    } else if (userDateTime.getMonth() - now.getMonth() >= 2) {
        let lastFullMonths = 0;
        for (let x = now.getMonth() + 1; x < userDateTime.getMonth(); x++) {
            lastFullMonths++;
        }
        monthInfo.innerHTML = (`In this month ${daysInThisMonth} days left, and<br>The ${lastFullMonths} full months left, and plus<br>In last month ${userDateTime.getDate()} days left.`);
    }


    let days = Math.floor(current_level / 86400);
    let remainsDays = current_level - (days * 86400);//остаток секунд за вычетом дней

    let hours = Math.floor(remainsDays / 3600);
    let remainsHours = remainsDays - (hours * 3600);//остаток секунд за вычетом дней и часов

    let minutes = Math.floor(remainsHours / 60);
    let remainsMinutes = remainsHours - (minutes * 60);//остаток секунд за вычетом дней, часов и минут

    let seconds = remainsMinutes;

    //===============================
    inputDays.value = norm(days);
    inputHours.value = norm(hours);
    inputMinutes.value = norm(minutes);
    inputSeconds.value = norm(seconds);


    if (current_level <= 0) {
        clearInterval(countdownTimer);
        current_level = 0;
        btnStart.disabled = false;
        inputDays.value = ``;
        inputHours.value = ``;
        inputMinutes.value = ``;
        inputSeconds.value = ``;
        alert('You win!');
    }
    current_level--;
}

btnStart.onclick = function () {
    let currentDateTime = new Date();
    userDateTime = new Date(datetimeLocal.value);
    if ((!userDateTime.isNaN) && (userDateTime - currentDateTime) > 0) {
        current_level = Math.floor((userDateTime - currentDateTime) / 1000);
        btnStart.disabled = true;
        countdownTimer = setInterval(timer, 1000);
    } else {
        alert(`Your date or time isn't correct! Try Again please!`);
        current_level = 0;
        return;
    }
}

btnStop.onclick = function () {
    btnStart.disabled = false;
    current_level = 0;
    clearInterval(countdownTimer);
    inputDays.value = ``;
    inputHours.value = ``;
    inputMinutes.value = ``;
    inputSeconds.value = ``;
}