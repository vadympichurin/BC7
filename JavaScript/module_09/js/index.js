

/*
Добавьте следующий функционал:

    - При нажатии на кнопку button.js-start, запускается таймер, который считает время
со старта и до текущего момента времени, обновляя содержимое элемента p.js-time
новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).

🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
достаточно повторять не чаще чем 1 раз в 100 мс.

- Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause',
    а функционал при клике превращается в оставновку секундомера без сброса
значений времени.

    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

- Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени,
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд
со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени
с 6 секунд, а не с 16.

    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его
при рассчете текущего времени после возобновления таймера отнимая
это значение от времени запуска таймера.

- Если секундомер находится в активном состоянии или в состоянии паузы, кнопка
button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.

- Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера
в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/


const timer = {
    startTime: null,
    deltaTime: null,
    id: null
};

function getFormattedTime(time) {
    let milisec = Math.floor(time / 100 % 10);

    let seconds = Math.floor(time / 1000 % 60);
    seconds < 10 ? seconds = `0${seconds}` : seconds;

    let minutes = Math.floor(time / 1000 / 60 % 60);
    minutes < 10 ? minutes = `0${minutes}` : minutes;

    return `${minutes}:${seconds}.${milisec}`;
}

const timeText = document.querySelector('.js-time');
const btnStart = document.querySelector('.js-start');
const btnLap = document.querySelector('.js-take-lap');
const btnReset = document.querySelector('.js-reset');
const listLap = document.querySelector('.js-laps');


function startTimer() {
    if(timer.startTime === null) {
        timer.startTime = Date.now();
    } else {
        timer.startTime = Date.now() - timer.deltaTime;
    }
    btnStart.textContent = 'Stop';
    btnStart.removeEventListener('click', startTimer);
    btnStart.addEventListener('click', stopTimer);

    function refresh() {
        let currentTime = Date.now();
        timer.deltaTime = currentTime - timer.startTime;
        timeText.textContent = getFormattedTime(timer.deltaTime);
    }

    timer.id = setInterval(refresh, 100);
    btnReset.addEventListener('click', resetFn);
}


function stopTimer() {
    clearInterval(timer.id);
    btnStart.removeEventListener('click', stopTimer);
    btnStart.textContent = 'Resume';
    btnStart.addEventListener('click', startTimer);
}


btnStart.addEventListener('click', startTimer);

function resetFn() {
    stopTimer();
    btnStart.textContent = 'Start';
    timeText.textContent = '00:00.0';
    timer.startTime = Date.now();
    timer.startTime = null;
    timer.deltaTime = null;
    listLap.innerHTML = '';
}

// btnReset.addEventListener('click', resetFn);

function lapFn() {
    let item = document.createElement('li');
    item.textContent = getFormattedTime(timer.deltaTime);
    listLap.append(item);
}

btnLap.addEventListener('click', lapFn);

