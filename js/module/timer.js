function dateDiff(linkToTime, count) {
    linkToTime.textContent = count;
}

function zero(str) {
    let res = str < 10 ? '0' + str : str;
    return res
}

const timer = () => {
    let day = document.querySelector('.timer__day');
    let houres = document.querySelector('.timer__hours');
    let minutes = document.querySelector('.timer__minutes');
    let seconds = document.querySelector('.timer__seconds');

    setInterval(() => {
        let timeBeforeEnd = "03.06.2022 21:20".split(' ');

        let dateArr = timeBeforeEnd[0].split('.').concat(timeBeforeEnd[1].split(':'));
        let lastYears = dateArr[2];
        let lastMonth = dateArr[1] - 1;
        let lastDays = dateArr[0];
        let lastHours = dateArr[3];
        let lastMinutes = dateArr[4];


        let enDate = new Date(lastYears, lastMonth, lastDays, lastHours, lastMinutes);
        let actualDate = new Date();

        let allSeconds = (enDate - actualDate) / 1000;
        let dayDiff = zero(Math.floor(allSeconds / 60 / 60 / 24));
        let houresDiff = zero(Math.floor(allSeconds / 60 / 60) % 24);
        let minutesDiff = zero(Math.floor(allSeconds / 60) % 60);
        let secondsDiff = zero(Math.floor(allSeconds) % 60);

        dateDiff(day, dayDiff);
        dateDiff(houres, houresDiff);
        dateDiff(minutes, minutesDiff);
        dateDiff(seconds, secondsDiff);

        if (allSeconds <= 0) {
            document.querySelector('.timer').classList.toggle('timer--none');
            document.querySelector('.timer').classList.toggle('timer')
        }
    }, 1000);

}

export default timer;