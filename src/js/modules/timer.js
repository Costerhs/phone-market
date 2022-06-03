function dateRender(linkToTime, count) {
    linkToTime.textContent = count;
}

function zero(str) {
    return String(str).padStart(2, '0')
}
function formattingDate(times) {
    let date = times.split(' ')
    let [dateArr, time] = [date[0].split('.'), date[1].split(':')];
    let lastYears = dateArr[2];
    let lastMonth = dateArr[1] - 1;
    let lastDays = dateArr[0];
    let lastHours = time[0];
    let lastMinutes = time[1];
    return new Date(lastYears, lastMonth, lastDays, lastHours, lastMinutes);
}
const timer = (times) => {
    let day = document.querySelector('.timer__day');
    let houres = document.querySelector('.timer__hours');
    let minutes = document.querySelector('.timer__minutes');
    let seconds = document.querySelector('.timer__seconds');

    let enDate = formattingDate(times)

    setInterval(() => {
        let actualDate = new Date();

        let allSeconds = (enDate - actualDate) / 1000;
        let dayDiff = zero(Math.floor(allSeconds / 60 / 60 / 24));
        let houresDiff = zero(Math.floor(allSeconds / 60 / 60) % 24);
        let minutesDiff = zero(Math.floor(allSeconds / 60) % 60);
        let secondsDiff = zero(Math.floor(allSeconds) % 60);

        dateRender(day, dayDiff);
        dateRender(houres, houresDiff);
        dateRender(minutes, minutesDiff);
        dateRender(seconds, secondsDiff);

        if (allSeconds >= 0) {
            document.querySelector('.timer').style.display = 'block';
        } else {
            document.querySelector('.timer').style.display = 'none';
        }
    }, 1000);

}


export default timer;
