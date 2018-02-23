let inputDays = document.getElementById('input-days'),
    inputHours = document.getElementById('input-hours'),
    inputMinutes = document.getElementById('input-minutes'),
    inputSeconds = document.getElementById('input-seconds'),
    datetimeLocal = document.getElementById('dateInput'),
    btnStart = document.getElementById('btn-start'),
    btnStop = document.getElementById('btn-stop');

    inputDays.disabled = true;
    inputHours.disabled = true;
    inputMinutes.disabled = true;
    inputSeconds.disabled = true;


let countdownTimer,
    current_level;

const norm = (val) => val < 10 ? '0' + val : val;

function timer() {

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


    if(current_level <= 0){
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

btnStart.onclick = function(){
    let currentDateTime = new Date(),
        userDateTime = new Date(datetimeLocal.value);
    if((!userDateTime.isNaN) && (userDateTime - currentDateTime) > 0){
        current_level = Math.floor((userDateTime - currentDateTime) / 1000);
        btnStart.disabled = true;
        countdownTimer = setInterval(timer, 1000);
    } else {
        alert(`Your date or time isn't correct! Try Again please!`);
        current_level = 0;
        return;
    }
}

btnStop.onclick = function(){
    btnStart.disabled = false;
    current_level = 0;
    clearInterval(countdownTimer);
    inputDays.value = ``;
    inputHours.value = ``;
    inputMinutes.value = ``;
    inputSeconds.value = ``;
}